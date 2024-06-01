import Carousel from "./Carousel"
import styles from "./index.module.css"

const Admin: React.FC = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.block}>
          <div className={styles.contentBox}>
            <Carousel/>
            
          </div>
        </div>
      </div>
    </>
  )
}

export default Admin
