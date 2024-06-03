/** @format */

import { Producted, Categored, Carouseled } from "../DTO"
import dynamic from "next/dynamic"
import styles from "./index.module.css"
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
  return (
    <>
      <div className={styles.main}>
      

        <div className={styles.block}>
          <Carouselali data={data && data[2]} isLoading={loading} />
          <Categoro data={data && data[1]} loading={loading} />
          <Producto data={data && data[0]} loading={loading} />
        </div>
      </div>
    </>
  )
}
export default Handler
