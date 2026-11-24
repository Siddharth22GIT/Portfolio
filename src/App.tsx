import React from 'react'
import { Layout } from './components/Layout'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { TechStack } from './components/TechStack'
import { Experience } from './components/Experience'
import { OpenSource } from './components/OpenSource'
import { Projects } from './components/Projects'
import { Credentials } from './components/Credentials'
import { CreativeSkills } from './components/CreativeSkills'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { SectionId } from './config/sections'

const App: React.FC = () => {
  return (
    <Layout>
      <main className="relative">
        <Hero id={SectionId.Hero} />
        <About id={SectionId.About} />
        <TechStack id={SectionId.Tech} />
        <Experience id={SectionId.Experience} />
        <OpenSource id={SectionId.OpenSource} />
        <Projects id={SectionId.Projects} />
        <Credentials id={SectionId.Credentials} />
        <CreativeSkills id={SectionId.Creative} />
        <Contact id={SectionId.Contact} />
      </main>
      <Footer />
    </Layout>
  )
}

export default App
