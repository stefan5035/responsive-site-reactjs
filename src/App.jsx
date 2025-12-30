import Navbar from './components/nav'
import Hero from './components/hero'
import Client from './components/client'
import Community from './components/comm'
import Feature from './components/ftr'
import Stats from './components/stat'
import Design from './components/dsg'
import Testimony from './components/testimony'
import Blog from './components/blog'
import CTA from './components/cta'
export default function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <Client />
      <Community />
      <Feature />
      <Stats />
      <Design />
      <Testimony />
      <Blog />
      <CTA />
   </div>
  )
}