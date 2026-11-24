import React from 'react'
import { Layout } from './components/Layout'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { TechStack } from './components/TechStack'
import { Projects } from './components/Projects'
import { OpenSource } from './components/OpenSource'
import { Experience } from './components/Experience'
import { Credentials } from './components/Credentials'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { SectionId } from './config/sections'

const App: React.FC = () => {
  return (
    <Layout>
      <main>
        <Hero id={SectionId.Hero} />
        <About id={SectionId.About} />
        <TechStack id={SectionId.Tech} />
        <Projects id={SectionId.Projects} />
        <OpenSource id={SectionId.OpenSource} />
        <Experience id={SectionId.Experience} />
        <Credentials id={SectionId.Credentials} />
        <Contact id={SectionId.Contact} />
      </main>
      <Footer />
    </Layout>
  )
}

export default App
