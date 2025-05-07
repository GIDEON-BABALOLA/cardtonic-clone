import './App.css'
import Home from "./pages/Home"
import Layout from "./pages/Layout"
import { Route, Routes, Navigate } from "react-router-dom";
function App() {
  return (
    <>
<Routes>
  <Route path='/' element={<Layout />}>
  <Route index element={<Home />} />
  </Route>
</Routes>
    </>
  )
}

export default App
