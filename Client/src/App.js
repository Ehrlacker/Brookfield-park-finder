import { Route, Routes } from "react-router-dom"
import HomePage from "./pages/HomePage/HomePage"
import Search from "./pages/Search/Search"

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/Search" element={<Search />} />
    </Routes>
  )
}
export default App
