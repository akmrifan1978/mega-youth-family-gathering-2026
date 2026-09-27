import QRCode from 'qrcode';

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (url.pathname === '/api/qr') {
      const text = (url.searchParams.get('text') || '').trim();
      if (!text) {
        return new Response('Missing text', { status: 400, headers: { 'content-type': 'text/plain; charset=utf-8' } });
      }
      try {
        const svg = await QRCode.toString(text, {
          type: 'svg',
          width: 480,
          margin: 2,
          errorCorrectionLevel: 'M',
          color: { dark: '#000000', light: '#FFFFFF' }
        });
        return new Response(svg, {
          status: 200,
          headers: {
            'content-type': 'image/svg+xml; charset=utf-8',
            'cache-control': 'public, max-age=300',
            'access-control-allow-origin': '*',
            'access-control-allow-methods': 'GET,OPTIONS',
            'access-control-allow-headers': 'Content-Type'
          }
        });
      } catch (err) {
        return new Response('Could not generate QR', { status: 500, headers: { 'content-type': 'text/plain; charset=utf-8' } });
      }
    }

    if (request.method === 'OPTIONS') {
      return new Response('', {
        status: 204,
        headers: {
          'access-control-allow-origin': '*',
          'access-control-allow-methods': 'GET,OPTIONS',
          'access-control-allow-headers': 'Content-Type'
        }
      });
    }

    return env.ASSETS.fetch(request);
  }
};
