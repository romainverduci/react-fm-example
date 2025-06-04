// components/NavBar.js
import { Link } from 'react-router-dom'
import { customRoutes } from './App'

export const Nav = () => {
  return (
    <nav>
      {customRoutes.map((route, index) => (
        <div key={index} style={{ display: 'inline' }}>
          <Link to={route.path}>{route.label}</Link>
          {index < customRoutes.length - 1 && <span> | </span>}
        </div>
      ))}
    </nav>
  )
}