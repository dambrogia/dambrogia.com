import OneColumn from '@/layout/one-column'
import Head from 'next/head'
import Hero from '@/component/hero'
import About from '@/component/about'
import Social from '@/component/social'
import RecentWork from '@/component/recent-work'
import Contact from '@/component/contact'

export default function Home() {
  return (
    <>
      <Head>
        <title>Dominic Dambrogia</title>
        <meta name="description" content="Dominic D'Ambrogia's personal website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <OneColumn>
        <Hero />
        <About />
        <Social />
        <RecentWork />
        <Contact />
      </OneColumn>
    </>
  )
}
