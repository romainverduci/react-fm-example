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
    isEnabled: true,
  },
  {
    path: 'about',
    label: 'About',
    element: <About />, 
    index: undefined,
    isEnabled: false,
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
          {customRoutes.map((route, index) => 
            route.isEnabled ? (
              <Route
                key={index}
                path={route.path}
                element={route.element}
                index={route.index}
              />
            ) : null
          )}
          <Route path="*" element={<div>404 Not Found</div>} />
        </Route>
      </Routes>
    </>
  )
}

export default App