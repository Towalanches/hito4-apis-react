import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/styles.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Footer from './components/Footer'
import Pizza from './components/Pizza'

const App = () => {
  return (
    <div>
      <Navbar />
      {/* <Home /> */}
      <Pizza />
      <Footer />
    </div>
  )
}

export default App
