// components/NavBar.js
import { Link } from 'react-router-dom'
import { useFeatureFlag } from './useFeatureFlag'
import { customRoutes } from './App'
import { namespaceFlags } from './feature-management/flags'

export const Nav = () => {
  const enabledRoutes = customRoutes.filter((route) => {
    const routeFlag = true
    return routeFlag
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