import { NextSeo } from 'next-seo'
import Head from 'next/head'

type IMetaProps = {
  title: string
  description?: string
  canonical?: string
}

const Meta = (props: IMetaProps) => {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" key="charset" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1"
          key="viewport"
        />
        <link
          rel="apple-touch-icon"
          href={'/icons/apple-touch-icon.png'}
          key="apple"
        />
        <link
          rel="icon"
          href={'/icons/favicon.ico'}
          key="favicon"
          sizes="any"
        />
        <link rel="icon" type="image/svg+xml" href={'/icons/icon.svg'} />
        <link rel="manifest" href={'/manifest.webmanifest'} />
      </Head>

      <NextSeo
        title={props.title}
        description={props.description}
        canonical={props.canonical}
        openGraph={{
          title: props.title,
          description: props.description,
          url: props.canonical,
          locale: 'en',
          site_name: 'Viagem10'
        }}
      />
    </>
  )
}

export { Meta }
