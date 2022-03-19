import Head from 'next/head'


import Homepage from "../components/Homepage.jsx"
import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'

export default function Home() {
  return (
    <>
      <Head>
        <title>Xdome ToDo Application</title>
        <meta name="description" content="Xdome ToDo Application by blyncnov" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <Header/>
      <Homepage />
      <Footer/>
    </>
  )
}
