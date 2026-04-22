import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { SiteLayout } from './components/SiteLayout.jsx'
import { HomePage } from './pages/HomePage.jsx'
// import { AboutPage } from './pages/AboutPage.jsx'
// import { ShowsPage } from './pages/ShowsPage.jsx'
// import { ContactPage } from './pages/ContactPage.jsx'
import { NotFoundPage } from './pages/NotFoundPage.jsx'

function App() {
  const location = useLocation()

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route element={<SiteLayout />}>
          <Route index element={<HomePage />} />
          {/* <Route path="نبذة" element={<AboutPage />} /> */}
          {/* <Route path="العروض" element={<ShowsPage />} /> */}
          {/* <Route path="تواصل" element={<ContactPage />} /> */}
          <Route path="*" element={<NotFoundPage />} />
        </Route>
        {/* <Route path="about" element={<Navigate to="/نبذة" replace />} /> */}
        {/* <Route path="shows" element={<Navigate to="/العروض" replace />} /> */}
        {/* <Route path="contact" element={<Navigate to="/تواصل" replace />} /> */}
      </Routes>
    </AnimatePresence>
  )
}

export default App
