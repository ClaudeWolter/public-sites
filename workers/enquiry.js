// Deploy at: https://enquiry.flearmory.lu/submit
// Environment variables needed: MAILGUN_API_KEY, MAILGUN_DOMAIN

const RECIPIENT = 'equipment@flearmory.lu';
const ALLOWED_ORIGINS = ['https://rental.flearmory.lu', 'http://localhost:4321'];

export default {
  async fetch(request, env) {
    const origin = request.headers.get('Origin') || '';
    const corsHeaders = {
      'Access-Control-Allow-Origin': ALLOWED_ORIGINS.includes(origin) ? origin : ALLOWED_ORIGINS[0],
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    };

    if (request.method === 'OPTIONS') {
      return new Response(null, { status: 204, headers: corsHeaders });
    }
    if (request.method !== 'POST') {
      return new Response('Method Not Allowed', { status: 405, headers: corsHeaders });
    }

    let data;
    try {
      data = await request.json();
    } catch {
      return new Response(JSON.stringify({ ok: false, error: 'invalid_json' }), {
        status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    // Honeypot check
    if (data.website) {
      return new Response(JSON.stringify({ ok: true }), {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    const required = ['name', 'club', 'dateFrom', 'dateTo', 'equipment'];
    for (const field of required) {
      if (!data[field]?.trim()) {
        return new Response(JSON.stringify({ ok: false, error: `missing_field_${field}` }), {
          status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        });
      }
    }

    const subject = `[FLE Location] Demande de ${data.name} — ${data.club}`;
    const text = [
      `DEMANDE DE LOCATION — FLE Rental Site`,
      ``,
      `Nom : ${data.name}`,
      `Club / Organisation : ${data.club}`,
      `Période : ${data.dateFrom} → ${data.dateTo}`,
      ``,
      `Matériel souhaité :`,
      data.equipment,
      ``,
      data.message ? `Informations complémentaires :\n${data.message}` : '',
      ``,
      `---`,
      `Envoyé via le formulaire rental.flearmory.lu`,
    ].join('\n');

    const mailgunBody = new URLSearchParams({
      from: `FLE Location <noreply@${env.MAILGUN_DOMAIN}>`,
      to: RECIPIENT,
      subject,
      text,
    });

    const mgResponse = await fetch(
      `https://api.eu.mailgun.net/v3/${env.MAILGUN_DOMAIN}/messages`,
      {
        method: 'POST',
        headers: {
          Authorization: `Basic ${btoa('api:' + env.MAILGUN_API_KEY)}`,
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: mailgunBody.toString(),
      }
    );

    if (!mgResponse.ok) {
      const err = await mgResponse.text();
      console.error('Mailgun error:', err);
      return new Response(JSON.stringify({ ok: false, error: 'mail_send_failed' }), {
        status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    return new Response(JSON.stringify({ ok: true }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  },
};
