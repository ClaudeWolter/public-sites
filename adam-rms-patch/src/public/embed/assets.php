<?php
/**
 * Public unauthenticated asset catalogue endpoint.
 *
 * Returns a read-only JSON list of asset types and categories for a given
 * AdamRMS instance, without requiring authentication.
 *
 * Usage:  GET /src/public/embed/assets.php?i=<instance_id>
 *
 * Mirrors the pattern of src/public/embed/jobs.php.
 * Only exposes: assetTypes_name, assetTypes_description, assetCategories_name,
 * assetCategoriesGroups_name, manufacturers_name, and a thumbnail URL.
 * Does NOT expose: quantity, pricing, serial numbers, user data.
 */

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');

require_once 'head.php';

// head.php populates $PAGEDATA['INSTANCE'] and sets up $DBLIB.
// It already terminates (die()) if the instance is missing or globally disabled.

// Check that the instance has explicitly enabled the public asset catalogue.
if (
    !isset($PAGEDATA['INSTANCE']['publicData']['enableAssets']) ||
    !$PAGEDATA['INSTANCE']['publicData']['enableAssets']
) {
    echo json_encode(['result' => false, 'error' => 'disabled']);
    exit;
}

$instanceId = (int) $PAGEDATA['INSTANCE']['instances_id'];

// ------------------------------------------------------------------
// Query asset types with category, category group, and manufacturer.
// Filters:
//   - scoped to this instance
//   - not soft-deleted (assetTypes_deletedAt IS NULL)
// ------------------------------------------------------------------
$DBLIB->where('assetTypes.instances_id', $instanceId);
$DBLIB->where('assetTypes.assetTypes_deletedAt', null, 'IS NULL');
$DBLIB->join('assetCategories', 'assetCategories.assetCategories_id = assetTypes.assetCategories_id', 'LEFT');
$DBLIB->join('assetCategoriesGroups', 'assetCategoriesGroups.assetCategoriesGroups_id = assetCategories.assetCategoriesGroups_id', 'LEFT');
$DBLIB->join('manufacturers', 'manufacturers.manufacturers_id = assetTypes.manufacturers_id', 'LEFT');
$DBLIB->orderBy('assetCategoriesGroups.assetCategoriesGroups_name', 'ASC');
$DBLIB->orderBy('assetCategories.assetCategories_name', 'ASC');
$DBLIB->orderBy('assetTypes.assetTypes_name', 'ASC');

$rawTypes = $DBLIB->get('assetTypes', null, [
    'assetTypes.assetTypes_id',
    'assetTypes.assetTypes_name',
    'assetTypes.assetTypes_description',
    'assetTypes.assetCategories_id',
    'assetCategories.assetCategories_name',
    'assetCategoriesGroups.assetCategoriesGroups_id',
    'assetCategoriesGroups.assetCategoriesGroups_name',
    'manufacturers.manufacturers_name',
]);

if ($rawTypes === false || $rawTypes === null) {
    // Query failure — return empty but valid response; never expose internals.
    echo json_encode(['result' => true, 'assetTypes' => [], 'categories' => []]);
    exit;
}

// ------------------------------------------------------------------
// For each asset type, fetch the first non-deleted thumbnail URI.
// We query one row per type rather than a JOIN to avoid row inflation
// from multiple thumbnails.
// ------------------------------------------------------------------
$assetTypes = [];
$categoriesMap = [];

foreach ($rawTypes as $type) {
    $typeId = (int) $type['assetTypes_id'];

    // Thumbnail: first active thumbnail for this asset type.
    $DBLIB->where('assetFiles.assetFiles_assetTypes_id', $typeId);
    $DBLIB->where('assetFiles.assetFiles_thumbnails', 1);
    $DBLIB->where('assetFiles.assetFiles_deletedAt', null, 'IS NULL');
    $DBLIB->orderBy('assetFiles.assetFiles_id', 'ASC');
    $thumbRow = $DBLIB->getOne('assetFiles', ['assetFiles_uri']);
    $thumbnail = ($thumbRow && isset($thumbRow['assetFiles_uri'])) ? $thumbRow['assetFiles_uri'] : null;

    $assetTypes[] = [
        'id'                => $typeId,
        'name'              => $type['assetTypes_name'],
        'description'       => $type['assetTypes_description'],
        'categoryId'        => (int) $type['assetCategories_id'],
        'categoryName'      => $type['assetCategories_name'],
        'categoryGroupName' => $type['assetCategoriesGroups_name'],
        'manufacturerName'  => $type['manufacturers_name'],
        'thumbnail'         => $thumbnail,
    ];

    // Build deduplicated categories list keyed by category ID.
    $catId = (int) $type['assetCategories_id'];
    if ($catId && !isset($categoriesMap[$catId])) {
        $categoriesMap[$catId] = [
            'id'        => $catId,
            'name'      => $type['assetCategories_name'],
            'groupName' => $type['assetCategoriesGroups_name'],
        ];
    }
}

// Re-index categories array (JSON array, not object).
$categories = array_values($categoriesMap);

echo json_encode([
    'result'     => true,
    'assetTypes' => $assetTypes,
    'categories' => $categories,
]);
