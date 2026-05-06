import '../styles/global.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Header from '../widgets/Header/Header'
import Footer from '../widgets/Footer/Footer'

import { HomePage } from '../pages/HomePage/HomePage'

function App() {

  return (
    <div className="site siteContainer">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<HomePage />}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
