import { NextPage } from 'next'
import { AppProps } from 'next/app'
import { ReactElement, ReactNode } from 'react'

export interface IStoreLayout {
  meta?: ReactNode
  children: ReactElement
}

// eslint-disable-next-line @typescript-eslint/ban-types
export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}

export type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}
