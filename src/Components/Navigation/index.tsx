/** @format */

import { useState, useEffect } from "react"
import Mobile from "./Mobile"
import DesktopNav from "./PC"


const Navbar: React.FC= () => {
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
        <Mobile  />
      ) : (
        <div>
          <DesktopNav  />
        </div>
      )}
    </nav>
  )
}

export default Navbar
