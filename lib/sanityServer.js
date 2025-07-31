import { createClient } from 'next-sanity'

export const serverConfig = {
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION,
  useCdn: false,
  token: process.env.SANITY_API_WRITE_TOKEN,
}

export const sanityServerClient = createClient(serverConfig) 