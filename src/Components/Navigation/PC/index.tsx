import Link from "next/link"
import styles from "./index.module.css"
import { useState } from "react"
import { items } from "../items"
import Image from "next/image"
import { BsHeart, BsSearch } from "react-icons/bs"
import { useLanguage } from "@/Context"

const PC: React.FC = () => {
  const [showlang, setShowlang] = useState<boolean>(false)
  const { language, setLanguage } = useLanguage()

  return (
    <>
      <div className={styles.topBar}>
        <Image
          src='/images/icon.jpg'
          width={555}
          height={555}
          alt=''
          className={styles.icono}
        />
        <form className={styles.searchBar}>
          <BsSearch
            className={styles.searchIcon}
            style={{
              right: `${language !== "en" ? "1rem" : ""}`,
              left: `${language === "en" && "1rem"}`,
              transform: `rotate(19deg)`,
            }}
          />
          <input
            className={styles.searchInput}
            type='search'
            placeholder={
              language === "en"
                ? "Search for products"
                : language === "fa"
                ? "جستجو برای محصولات"
                : "ابحث عن المنتجات"
            }
          />
        </form>
        <div className={styles.hearto}>
          <BsHeart className={styles.heart} />
        </div>
      </div>
      <nav
        className={styles.navBar}
        style={{ direction: `${language === "en" ? "ltr" : "rtl"}` }}
      >
        <div className={styles.itemsBox}>
          {items &&
            items[language === "en" ? 0 : language === "fa" ? 1 : 2].map(
              (item: string, itemIndex) => (
                <Link
                  key={itemIndex}
                  href={`${items[3][itemIndex]}`}
                  className={styles.item}
                >
                  {item}
                </Link>
              )
            )}
        </div>
        <div className={styles.selectListo}>
          {showlang ? (
            <div className={styles.langFlag}>
              <Image
                src='/images/england.svg'
                width={77}
                height={77}
                alt=''
                className={styles.flag}
                onClick={() => {
                  setLanguage("en")
                  setShowlang(false)
                }}
              />
              <Image
                src='/images/arabia.png'
                width={77}
                height={77}
                alt=''
                className={styles.flag}
                onClick={() => {
                  setLanguage("ar")
                  setShowlang(false)
                }}
              />
              <Image
                src='/images/iran.png'
                width={77}
                height={77}
                alt=''
                className={styles.flag}
                onClick={() => {
                  setLanguage("fa")
                  setShowlang(false)
                }}
              />
            </div>
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
