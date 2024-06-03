import styles from "./index.module.css"
import { footer } from "../items"
import Link from "next/link"
import { useLanguage } from "@/Context"
import Image from "next/image"
import { FaFacebook } from "react-icons/fa"
import { BsInstagram, BsLinkedin } from "react-icons/bs"
import { RiEnglishInput } from "react-icons/ri"

const Footer: React.FC = () => {
  const { language, setLanguage } = useLanguage()
  return (
    <>
      <div className={styles.container}>
        <div className={styles.iconimage}>
          <Image
            src='/images/icon.jpg'
            width={555}
            height={555}
            alt=''
            className={styles.icono}
          />
          <div className={styles.iconBox}>
            <FaFacebook />
            <BsInstagram />
            <BsLinkedin />
          </div>
        </div>
        <div className={styles.footerBox}>
          {footer[language === "en" ? 0 : language === "fa" ? 1 : 2].map(
            (item: string, itemIndex) =>
              itemIndex < 3 && (
                <Link
                  key={itemIndex}
                  href={`/${footer[0][itemIndex]}`}
                  className={styles.item}
                >
                  {item}
                  <RiEnglishInput />
                </Link>
              )
          )}
        </div>
        <div className={styles.footerBox}>
          {footer[language === "en" ? 0 : language === "fa" ? 1 : 2].map(
            (item: string, itemIndex) =>
              itemIndex > 2 && (
                <Link
                  key={itemIndex}
                  href={`/${footer[0][itemIndex]}`}
                  className={styles.item}
                >
                  {item}
                  <RiEnglishInput />
                </Link>
              )
          )}
        </div>
      </div>
    </>
  )
}
export default Footer
