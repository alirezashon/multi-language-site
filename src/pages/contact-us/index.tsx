import { RefObject, useRef } from "react"
import styles from "./index.module.css"
import { Toast } from "primereact/toast"
import Link from "next/link"
import Image from "next/image"
import { useLanguage } from "@/Context"
import { content } from "../../Components/Content/contactContent"
const ContacUs: React.FC = () => {
  const toast = useRef<Toast>(null)
  const { language, setLanguage } = useLanguage()

  const refs: {
    [key: string]: RefObject<HTMLInputElement | HTMLTextAreaElement>
  } = {
    name: useRef<HTMLInputElement>(null),
    contact: useRef<HTMLInputElement>(null),
    description: useRef<HTMLTextAreaElement>(null),
  }
  const translations = [
    ["name", "contact", "description"],
    ["نام", "تماس", "توضیحات"],
    ["الاسم", "الاتصال", "الوصف"],
  ]
  const sendit = async () => {
    try {
      const dataToSend = {
        authType: "0c^o(n^%T$a#C%t@p&a*s(o)p*a)z&aim#anA!",
        data: {
          name: refs.name.current?.value || "",
          contact: refs.contact.current?.value || "",
          description: refs.description.current?.value || "",
        },
      }

      const response = await fetch("/api/data/Post/Client/Contactass", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(dataToSend),
      })

      const data = await response.json()
      console.log(data)
      if (data.success) {
        toast.current?.show({
          severity: "success",
          summary: "Secondary",
          detail: "موفق",
          life: 3000,
        })
        location.reload()
      } else {
        toast.current?.show({
          severity: "error",
          summary: "Secondary",
          detail: " نا موفق",
          life: 3000,
        })
      }
    } catch (error) {
      toast.current?.show({
        severity: "warn",
        summary: "Secondary",
        detail: "خطا",
        life: 3000,
      })
    }
  }

  return (
    <div style={{ direction: `${language === "en" ? "ltr" : "rtl"}` }}>
      <Toast ref={toast} />
      <div className={styles.banner}>
        <h1>
          {
            content[language === "en" ? 0 : language === "fa" ? 1 : 2].texts
              .pageTitle
          }
        </h1>
        <Link href={"/"}>
          {
            content[language === "en" ? 0 : language === "fa" ? 1 : 2].texts
              .links.home
          }
        </Link>
        /
        <Link href={"/contact-us"}>
          {
            content[language === "en" ? 0 : language === "fa" ? 1 : 2].texts
              .links.contactUs
          }
        </Link>
      </div>
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
                  .city
              }
            </h1>
            <p>
              {
                content[language === "en" ? 0 : language === "fa" ? 1 : 2].texts
                  .address
              }
            </p>
            <h5>
              {
                content[language === "en" ? 0 : language === "fa" ? 1 : 2].texts
                  .workingDays
              }
            </h5>
            <p>
              {
                content[language === "en" ? 0 : language === "fa" ? 1 : 2].texts
                  .workingHours
              }
            </p>
            <h3>
              {
                content[language === "en" ? 0 : language === "fa" ? 1 : 2].texts
                  .email
              }
            </h3>
            <p>
              {
                content[language === "en" ? 0 : language === "fa" ? 1 : 2].texts
                  .phone
              }
            </p>
          </div>
        </div>
        <form
          className={styles.productBox}
          onSubmit={(e) => {
            e.preventDefault()
            sendit()
          }}
        >
          <h3>
            {
              content[language === "en" ? 0 : language === "fa" ? 1 : 2].texts
                .contactExpert
            }
          </h3>

          {Object.keys(refs).map((refName, index) => (
            <div key={index} className={styles.productBoxRow}>
              {refName !== "description" ? (
                <input
                  ref={refs[refName] as RefObject<HTMLInputElement>}
                  placeholder={`${
                    translations[
                      language === "en" ? 0 : language === "fa" ? 1 : 2
                    ][index]
                  } . . .`}
                />
              ) : (
                <textarea
                  ref={refs[refName] as RefObject<HTMLTextAreaElement>}
                  placeholder={`${
                    translations[
                      language === "en" ? 0 : language === "fa" ? 1 : 2
                    ][index]
                  } . . .`}
                ></textarea>
              )}
            </div>
          ))}
          <input value={`${language==='en'? 'send': language==='fa'? "تایید" :'إرسال'}`} type='submit' className={styles.submito} />
        </form>
      </div>
    </div>
  )
}
export default ContacUs
