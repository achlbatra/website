import './App.css'
import HeroComponent from './components/HeroComponent'
import Introduction from './components/Introduction'
import Navbar from './components/Navbar'
import Services from './components/Services'
import Contact from './components/Contact'


function App() {
  return (
    <>
      <Navbar></Navbar>
      <HeroComponent></HeroComponent>
      <Contact />
      <Introduction></Introduction>
      <Services></Services>
    </>
  )
}

export default App
