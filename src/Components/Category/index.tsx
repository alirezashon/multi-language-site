import Image from "next/image"
import styles from "./index.module.css"
import { Categored } from "@/DTO"
interface Props {
  data: Categored[] | undefined
  loading: boolean
}
const Categoro: React.FC<Props> = ({ data, loading }) => {
  return (
    <div className={styles.categoryBox}>
      {loading
        ? Array.apply(0, Array(7)).map((x, i) => (
            <div key={i} className={styles.loading}>
              <div className={styles.loadingRect}></div>
              <div className={styles.loadingSquare}></div>
            </div>
          ))
        : data?.map((cat) => (
            <div className={styles.category}>
              <Image
                className={styles.categorimage}
                src={`data:image/jpeg;base64,${cat.src}`}
                alt={cat.name}
                width={999}
                height={777}
              />
              <h3 className={styles.categoriname}>{cat.name}</h3>
            </div>
          ))}
    </div>
  )
}

export default Categoro
