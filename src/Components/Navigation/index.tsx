/** @format */

import { useState, useEffect } from "react"
import Mobile from "./Mobile"
import DesktopNav from "./PC"

interface NavProps {
  language: "en" | "fa" | "ar"
  setLanguage: (lang: "en" | "fa" | "ar") => void
}
const Navbar: React.FC<NavProps> = ({ language, setLanguage }) => {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    if (window.innerWidth < 999) {
      setIsMobile(true)
    }
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 999)
    }

    handleResize()
    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return (
    <nav style={{ marginBottom: `${isMobile ? "7vh" : "8vh"}`, zIndex: 44 }}>
      {isMobile ? (
        <Mobile language={language} setLanguage={setLanguage} />
      ) : (
        <div>
          <DesktopNav language={language} setLanguage={setLanguage} />
        </div>
      )}
    </nav>
  )
}

export default Navbar
