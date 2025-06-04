import { Link } from 'react-router-dom'
import { customRoutes } from './App'

export const Nav = () => {
  const enabledRoutes = customRoutes

  return (
    <nav>
      {enabledRoutes.map((route, index) => (
        <div key={index} style={{ display: 'inline' }}>
          <Link to={route.path}>{route.label}</Link>
          {index < enabledRoutes.length - 1 && <span> | </span>}
        </div>
      ))}
    </nav>
  )
}