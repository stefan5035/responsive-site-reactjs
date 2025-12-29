import Navbar from './components/nav'
import Hero from './components/hero'
import Client from './components/client'
import Community from './components/comm'
export default function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <Client />
      <Community />
   </div>
  )
}