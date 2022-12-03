//------------- Components
import Header from './components/Header'
import AboutMe from './components/AboutMe'
import Skills from './components/Skills'
import Projects from './components/Projects'

//------------- Hooks

//------------- AOS
import AOS from "aos"
import 'aos/dist/aos.css'; 


function App() {

  AOS.init({ once: true })

  return (
    <>
      <Header />
      <AboutMe />
      <Skills />
      <Projects />
    </>
  )
}

export default App
