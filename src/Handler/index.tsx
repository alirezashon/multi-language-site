/** @format */

import { Producted, Categored, Carouseled } from "../DTO"
import dynamic from "next/dynamic"
import styles from "./index.module.css"
import Image from "next/image"
import { BiArrowBack } from "react-icons/bi"
import { content } from "./main"
import { useLanguage } from "@/Context"
import Video from "@/Components/Video"

const Categoro = dynamic(() => import("../Components/Category"), {
  loading: () => <div className={styles.loadingNav}></div>,
})
const Carouselali = dynamic(() => import("../Components/Carousel"), {
  loading: () => <div className={styles.loadingCarousel}></div>,
})

const Producto = dynamic(() => import("../Components/Product"), {
  loading: () => <div className={styles.loadingNav}></div>,
})

interface Props {
  data: [Producted[], Categored[], Carouseled[]] | []
  loading: boolean
}
const Handler: React.FC<Props> = ({ data, loading }) => {
  const { language, setLanguage } = useLanguage()

  return (
    <>
      <div className={styles.main}>
        <div className={styles.block}>
          <Carouselali data={data && data[2]} isLoading={loading} />
          <div className={styles.mainContent}>
            <div className={styles.section}>
              <p>{content.main[language]}</p>
              <div onClick={() => (location.href = "/about-us")}>
                <BiArrowBack className={styles.directo} />
                {content.btn[language]}
              </div>
            </div>
            <div className={styles.section}>
              <h2>{content.headLine[language]}</h2>
              <Image
                className={styles.irano}
                src={"/images/irano.jpg"}
                alt='products'
                width={777}
                height={777}
              />
            </div>
          </div>
          <div className={styles.producted}>
            <p>{content.productTitle[language]}</p>
          </div>
          <Categoro data={data && data[1]} loading={loading} />
          {/* <Producto data={data && data[0]} loading={loading} /> */}
        </div>
        <Video/>
      </div>
    </>
  )
}
export default Handler
