/** @format */

import Link from "next/link"
import styles from "./index.module.css"
import { useEffect, useState } from "react"
import { items } from "../items"
import Image from "next/image"
import { GiCrossMark } from "react-icons/gi"
import { SelectButton } from "primereact/selectbutton"
import { useLanguage } from "@/Context"
import { BsSearch } from "react-icons/bs"

const Mobile: React.FC = () => {
  const { language, setLanguage } = useLanguage()
  const [drawer, setDrawer] = useState<boolean>(false)
  const [showlang, setShowlang] = useState<boolean>(false)
  const itemso = ["English", "فارسی", "العربیة"]

  useEffect(() => {
    const closeNav = (event: MouseEvent) => {
      if (drawer !== null && event.clientX > window.innerWidth * 0.4) {
        setDrawer(false)
      }
    }
    window.addEventListener("click", closeNav)

    return () => {
      window.removeEventListener("click", closeNav)
    }
  }, [drawer, setDrawer])
  return (
    <>
      {drawer ? (
        <div className={styles.drawer}>
          <GiCrossMark
            className={styles.close}
            onClick={() => setDrawer(false)}
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
          {items &&
            items[language === "en" ? 0 : language === "fa" ? 1 : 2].map(
              (item: string, itemIndex) => (
                <div key={itemIndex} className={styles.itemBox}>
                  <Link
                    key={itemIndex}
                    href={`/${items[0][itemIndex]}`}
                    // className={styles.item}
                  >
                    {item}
                  </Link>
                </div>
              )
            )}
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
        </div>
      ) : (
        <div className={styles.navBar}>
          <div className={styles.navIcon} onClick={() => setDrawer(true)}>
            <p>☰</p>
          </div>

          <div className={styles.iconBox}>
            <Image
              src={"/images/icon.jpg"}
              width={555}
              height={555}
              alt=''
              className={styles.icono}
            />
          </div>
        </div>
      )}
    </>
  )
}
export default Mobile

// import { Sidebar } from "primereact/sidebar"
// import { items } from "../items"
// import { useState } from "react"
// import styles from "./index.module.css"
// import Link from "next/link"
// import { SelectButton } from "primereact/selectbutton"
// interface NavProps {
//   language: "en" | "fa" | "ar"
//   setLanguage: (lang: "en" | "fa" | "ar") => void
// }

// const Mobile: React.FC<NavProps> = ({ language, setLanguage }) => {
//   const [showlang, setShowlang] = useState<boolean>(false)
//   const itemso = ["English", "فارسی", "العربیة"]

//   return (
//     <div className='card flex justify-content-center'>
//       <Sidebar
//         visible={true}
//         onHide={() => ""}
//         className='w-full md:w-20rem lg:w-30rem'
//       >
//         {showlang ? (
//           <SelectButton
//             value={language}
//             onChange={(e) =>
//               setLanguage(
//                 e.value === "English" ? "en" : e.value === "فارسی" ? "fa" : "ar"
//               )
//             }
//             options={itemso}
//           />
//         ) : (
//           <div onMouseOver={() => setShowlang(true)}>
//             {language === "en"
//               ? "Language"
//               : language === "fa"
//               ? "زبان"
//               : "اللغة"}
//           </div>
//         )}
//         {items &&
//           items[language === "en" ? 0 : language === "fa" ? 1 : 2].map(
//             (item: string, itemIndex) => (
//               <Link
//                 key={itemIndex}
//                 href={`/${items[0][itemIndex]}`}
//                 className={styles.item}
//               >
//                 {item}
//               </Link>
//             )
//           )}
//       </Sidebar>
//     </div>
//   )
// }
// export default Mobile
