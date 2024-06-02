import styles from "./index.module.css"
import { footer } from "../items"
import Link from "next/link"
interface Props {
  language: "en" | "fa" | "ar"
  setLanguage: (lang: "en" | "fa" | "ar") => void
}

const Footer: React.FC<Props> = ({ language, setLanguage }) => {
  return (
    <>
      <div className={styles.container}>
        {footer[language === "en" ? 0 : language === "fa" ? 1 : 2].map(
              (item: string, itemIndex) => (
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
    </>
  )
}
export default Footer
