import Link from "next/link"
import styles from "./index.module.css"
import { useState } from "react"
import { items } from "../items"
import Image from "next/image"
import { SelectButton } from "primereact/selectbutton"

interface NavProps {
  language: "en" | "fa" | "ar"
  setLanguage: (lang: "en" | "fa" | "ar") => void
}

const PC: React.FC<NavProps> = ({ language, setLanguage }) => {
  const [showlang, setShowlang] = useState<boolean>(false)
  const itemso = ["English", "فارسی", "العربیة"]

  return (
    <>
      <nav className={styles.navBar}>
        <div className={styles.itemsBox}>
          <Image
            src={"/images/icon.jpg"}
            width={555}
            height={555}
            alt=''
            className={styles.icono}
          />
          {items &&
            items[language === "en" ? 0 : language === "fa" ? 1 : 2].map(
              (item: string, itemIndex) => (
                <Link
                  key={itemIndex}
                  href={`/${items[0][itemIndex]}`}
                  className={styles.item}
                >
                  {item}
                </Link>
              )
            )}
        </div>
        <div className={styles.selectListo}>
          {showlang ? (
            <SelectButton
              value={language}
              onChange={(e) =>
                setLanguage(
                  e.value === "English"
                    ? "en"
                    : e.value === "فارسی"
                    ? "fa"
                    : "ar"
                )
              }
              options={itemso}
            />
          ) : (
            <div onMouseOver={() => setShowlang(true)}>
              {language === "en"
                ? "Language"
                : language === "fa"
                ? "زبان"
                : "اللغة"}
            </div>
          )}
        </div>
      </nav>
    </>
  )
}
export default PC
