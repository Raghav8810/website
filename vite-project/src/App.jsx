
import './App.css'
import Heropage from './components/Hero/Heropage'
import Gridpart from './components/HeroSecondpart/Gridpart'
import Navbar from './components/navbar/Navbar'
import Range from './components/HeroSecondpart/RangeConnection/Range'
function App() {
  

  return (
    <>
      <section className='Home-section'>
         <Navbar/>
          <Heropage/>
      </section>
      <section className='Home-section'>
         <Gridpart/>
          <Range/>
      </section>
      
    </>
  )
}

export default App
