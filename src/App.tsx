import './App.css'
import { Outlet, Route, Routes } from 'react-router-dom'
import { Home } from './Home.tsx'
import { About } from './About.tsx'
import { Nav } from './Nav.tsx'
import { useFeatureFlag } from './useFeatureFlag.ts'
import { namespaceFlags } from './feature-management/flags.ts'

export const customRoutes = [
  {
    path: '/',
    label: 'Home',
    element: <Home />,
    index: true,
    featureFlag: { namespace: 'routes', flag: 'home' },
  },
  {
    path: 'about',
    label: 'About',
    element: <Home />
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
            const routeFlag = route.featureFlag
              ?  true
              : true
            return routeFlag ? (
              <Route
                key={index}
                path={route.path}
                element={route.element}
                index={route.index}
              />
            ) : null
          })}
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="*" element={<div>404 Not Found</div>} />
        </Route>
      </Routes>
    </>
  )
}

export default App