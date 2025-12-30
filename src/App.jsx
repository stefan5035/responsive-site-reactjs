import Navbar from './components/nav'
import Hero from './components/hero'
import Client from './components/client'
import Community from './components/comm'
import Feature from './components/ftr'
export default function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <Client />
      <Community />
      <Feature />
   </div>
  )
}