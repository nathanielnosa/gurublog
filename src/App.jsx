import Navbar from "./components/navbar/Navbar.jsx"
import { Outlet } from "react-router-dom"
const App = () => {

  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  )
}

export default App