import styles from "./index.module.css"
import { footer } from "../items"
import Link from "next/link"
import { useLanguage } from "@/Context"
import Image from "next/image"
import { FaFacebook } from "react-icons/fa"
import { BsInstagram, BsLinkedin } from "react-icons/bs"

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
            <FaFacebook className={styles.icons} onClick={() => open("/")} />
            <BsInstagram className={styles.icons} onClick={() => open("/")} />
            <BsLinkedin className={styles.icons} onClick={() => open("/")} />
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
                </Link>
              )
          )}
        </div>
      </div>
      <div className={styles.langFlag}>
        <Image
          src='/images/england.svg'
          width={77}
          height={77}
          alt=''
          className={styles.flag}
          onClick={()=>setLanguage('en')}
        />
        <Image
          src='/images/arabia.png'
          width={77}
          height={77}
          alt=''
          className={styles.flag}
          onClick={()=>setLanguage('ar')}
        />
        <Image
          src='/images/iran.png'
          width={77}
          height={77}
          alt=''
          className={styles.flag}
          onClick={()=>setLanguage('fa')}
        />
      </div>
    </>
  )
}
export default Footer
