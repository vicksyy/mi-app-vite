export async function onRequest(context) {
  const url = new URL(context.request.url)
  const name = url.searchParams.get('name') || 'amiga'
  const payload = {
    message: `Hola ${name}, te saluda un Worker de Cloudflare.`,
    serverTime: new Date().toISOString(),
  }

  return new Response(JSON.stringify(payload), {
    headers: {
      'content-type': 'application/json; charset=utf-8',
    },
  })
}
