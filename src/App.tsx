import './App.css'
import { Outlet, Route, Routes } from 'react-router-dom'
import { Home } from './Home.tsx'
import { About } from './About.tsx'
import { Nav } from './Nav.tsx'

export const customRoutes = [
  {
    path: '/',
    label: 'Home',
    element: <Home />,
    index: true,
    featureFlag: 'home',
  },
  {
    path: 'about',
    label: 'About',
    element: <About />,
  },
]

const Layout = () => (
  <div>
    <Nav />
    <Outlet />
  </div>
)

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          {customRoutes.map((route, index) => {
            // Remove about feature flag logic since flag is always true
            if (route.path === 'about') {
              return (
                <Route
                  key={index}
                  path={route.path}
                  element={route.element}
                  index={route.index}
                />
              )
            }
            const routeFlag = route.featureFlag ? route.featureFlag !== 'about' : true
            if (routeFlag) {
              return (
                <Route
                  key={index}
                  path={route.path}
                  element={route.element}
                  index={route.index}
                />
              )
            }
            return null
          })}
          <Route path="*" element={<div>404 Not Found</div>} />
        </Route>
      </Routes>
    </>
  )
}

export default App