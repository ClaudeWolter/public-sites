# AdamRMS — Public Assets Embed Patch

This patch adds a read-only, unauthenticated JSON endpoint for the asset
catalogue to the [ClaudeWolter/adam-rms](https://github.com/ClaudeWolter/adam-rms)
fork of [adam-rms/adam-rms](https://github.com/adam-rms/adam-rms).

It is intended for use by the FLE Armoury public rental catalogue site, which
needs to fetch equipment names, categories, and thumbnails without an API token.

## Files in this patch

```
src/public/embed/assets.php   — new public JSON endpoint
```

## How to apply

Copy the patched file into the adam-rms repository root:

```bash
cp src/public/embed/assets.php  <adam-rms-root>/src/public/embed/assets.php
```

Or, if you are working from the `ClaudeWolter/adam-rms` fork:

```bash
git checkout -b feature/public-assets-embed
cp src/public/embed/assets.php  src/public/embed/assets.php
git add src/public/embed/assets.php
git commit -m "Add public unauthenticated asset catalogue endpoint"
git push -u origin feature/public-assets-embed
```

## Endpoint

```
GET /src/public/embed/assets.php?i=<instance_id>
```

### Prerequisites (AdamRMS admin configuration)

In the AdamRMS admin panel for the target instance, the public configuration
JSON (`instances_publicConfig`) must include:

```json
{
  "enabled": true,
  "enableAssets": true
}
```

Without `enabled: true`, `head.php` will terminate the request before
`assets.php` runs. Without `enableAssets: true`, the endpoint returns:

```json
{"result": false, "error": "disabled"}
```

### Successful response

```json
{
  "result": true,
  "assetTypes": [
    {
      "id": 42,
      "name": "LED Par Can",
      "description": "RGBW wash light",
      "categoryId": 5,
      "categoryName": "Lighting",
      "categoryGroupName": "Stage Equipment",
      "manufacturerName": "Chauvet",
      "thumbnail": "https://cdn.example.com/path/to/thumb.jpg"
    }
  ],
  "categories": [
    {
      "id": 5,
      "name": "Lighting",
      "groupName": "Stage Equipment"
    }
  ]
}
```

`thumbnail` is `null` when no thumbnail file exists for a type.

### Error responses

| Condition                                  | Response                                          |
|--------------------------------------------|---------------------------------------------------|
| `?i` parameter missing                     | Empty response (terminated by `head.php`)         |
| Instance not found / globally disabled     | `"Disabled by AdamRMS administrator"` (head.php)  |
| `enableAssets` not set or false            | `{"result":false,"error":"disabled"}`             |
| DB query failure                           | `{"result":true,"assetTypes":[],"categories":[]}`  |

### Security notes

- No authentication required (by design — public catalogue only).
- Exposed fields: name, description, category, manufacturer, thumbnail URI.
- NOT exposed: quantity, pricing, serial/tag numbers, user data, internal IDs
  beyond the category ID needed for client-side grouping.
- All inputs are validated by `head.php` (instance ID cast to integer internally
  via `$DBLIB->where()` parameter binding).
- `Content-Type: application/json` and `Access-Control-Allow-Origin: *` headers
  are set unconditionally so the static site can fetch from any origin.

## Deployed URL

Once the fork is deployed at `https://rms.flearmory.lu`, the endpoint is:

```
https://rms.flearmory.lu/src/public/embed/assets.php?i=<instance_id>
```
