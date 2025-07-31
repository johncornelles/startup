import { sanityServerClient } from '../../../lib/sanityServer'

export async function POST(req) {
  try {
    const data = await req.json()
    // Basic validation (customize as needed)
    if (!data.name || !data.description) {
      return new Response(JSON.stringify({ error: 'Missing required fields' }), { status: 400 })
    }
    const doc = {
      _type: 'startup',
      ...data,
    }
    const result = await sanityServerClient.create(doc)
    return new Response(JSON.stringify(result), { status: 201 })
  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), { status: 500 })
  }
} 