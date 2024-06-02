import Image from "next/image"
import styles from "./index.module.css"
import { Producted } from "@/DTO"
interface Props {
  data: Producted[] | undefined
  loading: boolean
}
const Producto: React.FC<Props> = ({ data, loading }) => {
  return (
    <div className={styles.productBox}>
      {loading
        ? Array.apply(0, Array(7)).map((x, i) => (
            <div key={i} className={styles.loading}>
              <div className={styles.loadingRect}></div>
              <div className={styles.loadingSquare}></div>
            </div>
          ))
        : data?.map((cat) => (
          <div className={styles.product}>
              <h3 className={styles.productname}>{cat.title}</h3>
              <Image
                className={styles.productimage}
                src={`data:image/jpeg;base64,${cat.src}`}
                alt={cat.title}
                width={999}
                height={777}
              />
              <div className={styles.description}>
                {cat.description}
              </div>
            </div>
          ))}
    </div>
  )
}

export default Producto
