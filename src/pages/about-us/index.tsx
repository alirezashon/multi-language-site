import { useRef } from "react"
import styles from "./index.module.css"
import { Toast } from "primereact/toast"
import Image from "next/image"
import { useLanguage } from "@/Context"
import { content } from "../../Components/Content/aboutContent"
const ContacUs: React.FC = () => {
  const toast = useRef<Toast>(null)
  const { language, setLanguage } = useLanguage()

  return (
    <div style={{ direction: `${language === "en" ? "ltr" : "rtl"}` }}>
      <Toast ref={toast} />
      <div className={styles.banner}></div>
      <div className={styles.container}>
        <div className={styles.info}>
          <div className={styles.imageBox}>
            <Image
              src='/images/icon.jpg'
              width={555}
              height={555}
              alt=''
              className={styles.icono}
            />
          </div>
          <div className={styles.information}>
            <h1>
              {
                content[language === "en" ? 0 : language === "fa" ? 1 : 2].texts
                  .alwaysOn
              }
            </h1>
            {
              content[language === "en" ? 0 : language === "fa" ? 1 : 2].texts
                .introduction
            }

            {
              content[language === "en" ? 0 : language === "fa" ? 1 : 2].texts
                .fruitSector
            }
            <h1>
              {
                content[language === "en" ? 0 : language === "fa" ? 1 : 2].texts
                  .exportInfo
              }
            </h1>
            <p>
              {
                content[language === "en" ? 0 : language === "fa" ? 1 : 2].texts
                  .vision
              }
            </p>
            <h5>
              {
                content[language === "en" ? 0 : language === "fa" ? 1 : 2].texts
                  .mission
              }
            </h5>
            <p>
              {
                content[language === "en" ? 0 : language === "fa" ? 1 : 2].texts
                  .values
              }
            </p>
            <h3>
              {
                content[language === "en" ? 0 : language === "fa" ? 1 : 2].texts
                  .attention
              }
            </h3>
            <p>
              {
                content[language === "en" ? 0 : language === "fa" ? 1 : 2].texts
                  .motto
              }
            </p>
            <h3>
              {
                content[language === "en" ? 0 : language === "fa" ? 1 : 2].texts
                  .responsibility
              }
            </h3>
            <p>
              {
                content[language === "en" ? 0 : language === "fa" ? 1 : 2].texts
                  .responsibilityDescription
              }
            </p>
            <h3>
              {
                content[language === "en" ? 0 : language === "fa" ? 1 : 2].texts
                  .learning
              }
            </h3>
            <p>
              {
                content[language === "en" ? 0 : language === "fa" ? 1 : 2].texts
                  .learningDescription
              }
            </p>
            <h3>
              {
                content[language === "en" ? 0 : language === "fa" ? 1 : 2].texts
                  .protection
              }
            </h3>
            <p>
              {
                content[language === "en" ? 0 : language === "fa" ? 1 : 2].texts
                  .protectionDescription
              }
            </p>
            <h3>
              {
                content[language === "en" ? 0 : language === "fa" ? 1 : 2].texts
                  .services
              }
            </h3>
            <p>
              {
                content[language === "en" ? 0 : language === "fa" ? 1 : 2].texts
                  .servicesDescription
              }
            </p>
            <h3>
              {
                content[language === "en" ? 0 : language === "fa" ? 1 : 2].texts
                  .aboutStore
              }
            </h3>
            <h3>
              {
                content[language === "en" ? 0 : language === "fa" ? 1 : 2].texts
                  .teamMembers
              }
            </h3>
            <p>
              {
                content[language === "en" ? 0 : language === "fa" ? 1 : 2].texts
                  .exploreCollections
              }
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
export default ContacUs
