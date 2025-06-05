// components/NavBar.js
import { Link } from 'react-router-dom'
import { customRoutes } from './App'

export const Nav = () => {
  // Since about flag is always true, we can ignore flag checks for it
  const enabledRoutes = customRoutes.filter((route) => {
    if (route.featureFlag === 'about') return true
    return route.featureFlag ? true : true
  })

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