import { createClient } from 'next-sanity'
import imageUrlBuilder from '@sanity/image-url'
import { config } from './sanity'

const builder = imageUrlBuilder(createClient(config))

export function getImageUrl(source) {
  return builder.image(source)
} 