import { Metadata } from 'next'
import * as React from 'react'

import { NotionPage } from 'src/components/NotionPage'
import { domain } from 'src/lib/config'
import { resolveNotionPage } from 'src/lib/resolve-notion-page'

export const getStaticProps = async () => {
  try {
    const props = await resolveNotionPage(domain);

    return { props, revalidate: 10 }
  } catch (err) {
    console.error('page error', domain, err)

    // we don't want to publish the error version of this page, so
    // let next.js know explicitly that incremental SSG failed
    throw err
  }
}
export const metadata: Metadata = {
  title: 'Gitsunmin Blog',
}

export default function NotionDomainPage(props) {
  return <NotionPage {...props} />
}
