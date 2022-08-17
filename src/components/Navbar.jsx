import { useNavigate, useLocation } from "react-router-dom"

function Navbar() {
  const navigate = useNavigate()
  const location = useLocation()
  return (
    <nav>
      <ul>
        <li onClick={() => navigate("/")}>Home</li>
        <li onClick={() => navigate("/team")}>The Team</li>
        <li onClick={() => navigate("/contact")}>Contact</li>
        <li onClick={() => navigate("/login")}>Login</li>
      </ul>
    </nav>
  )
}

export default Navbar
