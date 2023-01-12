import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from '../components/Header'
import Main from '../components/Main'
import Presentation from '../components/Presentation'
import AboutUs from '../components/AboutUs'
import Footer from '../components/Footer'
export default function Home() {
  return (
    <div className="max-w-5xl mx-auto overflow-y-auto">
      <Header />
      <Main />
      <Presentation/>
      <AboutUs/>
      <Footer/>
    </div>
  )
}
