import { Block } from 'notion-types'
import { defaultMapImageUrl } from 'react-notion-x'

import { defaultPageCover, defaultPageIcon } from './config'

export const mapImageUrl = (url: string | null, block: Block | null) => {
  if (url === defaultPageCover || url === defaultPageIcon) {
    return url
  }
  if (url && block) return defaultMapImageUrl(url, block)
  else return url
}
