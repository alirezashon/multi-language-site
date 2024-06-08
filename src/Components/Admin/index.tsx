import Carousel from "./Carousel"
import CategoryManager from "./Category"
import Formo from "./Form"
import ProductManager from "./Product"
import styles from "./index.module.css"

const Admin: React.FC = () => {
  return (
    <>
      <div className={styles.container}>

        <div className={styles.block}>
          <Formo />
        </div> <div className={styles.block}>
          <Carousel />
        </div>
        <div className={styles.block}>
          <ProductManager />
        </div>
        <div className={styles.block}>
          <CategoryManager />
        </div>
      </div>
    </>
  )
}

export default Admin
