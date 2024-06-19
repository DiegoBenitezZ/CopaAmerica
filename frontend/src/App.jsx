import React from 'react'
import RouteIndex from "./routes/Index"
import {BrowserRouter} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
        <RouteIndex/>
    </BrowserRouter>
  )
}

export default App