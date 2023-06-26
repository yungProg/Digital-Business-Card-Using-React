// eslint-disable-next-line no-unused-vars
import React from "react"
// eslint-disable-next-line no-unused-vars
import ReactDOM from "react"
import Navbar from "./Navbar"
import MainContent from "./MainContent"
import Footer from "./Footer"
import "./App.css"
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'


const App = () => {
  return (
    <div className="main-div">
      <Navbar />
      <MainContent />
      <Footer />
    </div>
  )
}

export default App
library.add(fab, fas, far)