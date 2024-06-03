import styles from "./index.module.css"
import { footer } from "../items"
import Link from "next/link"
import { useLanguage } from "@/Context"

const Footer: React.FC = () => {
  const { language, setLanguage } = useLanguage()
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
