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

interface Props {
  data: [Producted[], Categored[], Carouseled[]] | []
  loading: boolean
}
const Handler: React.FC<Props> = ({ data, loading }) => {
  return (
    <>
      <div style={{ display: "grid", gap: "1vh" }}>
        <div></div>
        <div>
          <Carouselali data={data && data[2]} isLoading={loading} />
          <Categoro data={data && data[1]} loading={loading} />
        </div>
      </div>
    </>
  )
}
export default Handler
