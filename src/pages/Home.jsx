import React from 'react'
import Hero from '../components/sections/Hero'
import About from '../components/sections/About'
import Experience from '../components/sections/Experience'
import Projects from '../components/sections/Projects'
import Skills from '../components/sections/Skills'
import Contact from '../components/sections/Contact'
import Header from '../components/layout/Header'

const Home = () => {
  return (
    <div>
        <Header/>
      <Hero/>
      <About/>
      <Experience/>
      <Projects/>
      <Skills/>
      <Contact/>
    </div>
  )
}

export default Home
