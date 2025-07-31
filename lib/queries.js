import { sanityClient } from './sanity'

export const startupQuery = `*[_type == "startup"]{_id, name, logo, batch, status, description, category, tags, founded_year, team_size, funding_raised, website_url, image}`

export async function fetchStartups() {
  return await sanityClient.fetch(startupQuery)
} 