import Navigation from "../Components/Navigation"
import Footer from "@/Components/Navigation/Footer"
import { LanguageProvider } from "../Context"
import { FaWhatsapp } from "react-icons/fa"
import styles from "./index.module.css"

const Layout = ({ children }: any) => {
  return (
    <LanguageProvider>
      <div>
        <Navigation />
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
