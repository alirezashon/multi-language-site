import Navigation from "../Components/Navigation"
import Footer from "@/Components/Navigation/Footer"
import { LanguageProvider } from "../Context"
import { FaWhatsapp } from "react-icons/fa"
import styles from "./index.module.css"
import { useEffect, useState } from "react"

const Layout = ({ children }: any) => {
  const [navishen, setNavishen] = useState<"fixed" | "absolute">("absolute")
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight / 2) {
        setNavishen("fixed")
      } else if (window.scrollY > 100) {
        setNavishen("absolute")
      }
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])
  return (
    <LanguageProvider>
      <div>
        <div style={{ position: navishen ,background:'red'}}>
          <Navigation />
        </div>
        <main>{children}</main>
        <Footer />
        <FaWhatsapp
          className={styles.whatsApp}
          onClick={() =>
            open("https://web.whatsapp.com/send?phone=989125159413&text=hello")
          }
        />
      </div>
    </LanguageProvider>
  )
}

export default Layout
