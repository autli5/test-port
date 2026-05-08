import '../styles/global.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Header from '../widgets/Header/Header'

import { HomePage } from '../pages/HomePage/HomePage'
import { ProjectPage } from '../pages/ProjectPage/ProjectPage'
function App() {

  return (
    <div className="site siteContainer">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<HomePage />}/>
          <Route path='/' element={<ProjectPage />}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
