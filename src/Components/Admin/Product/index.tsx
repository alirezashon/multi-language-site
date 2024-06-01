/** @format */

import { useRef, RefObject, useState } from "react"
import styles from "../Inserto.module.css"
import List from "./List"
import { Toast } from "primereact/toast"
import { Product } from "@/DTO"
const Producto: React.FC = () => {
  const toast = useRef<Toast>(null)

  const refs: {
    [key: string]: RefObject<HTMLInputElement | HTMLTextAreaElement>
  } = {
    titleEn: useRef<HTMLInputElement>(null),
    titleFA: useRef<HTMLInputElement>(null),
    titleAR: useRef<HTMLInputElement>(null),
    src: useRef<HTMLInputElement>(null),
    descriptionEn: useRef<HTMLInputElement>(null),
    descriptionFA: useRef<HTMLInputElement>(null),
    descriptionAR: useRef<HTMLInputElement>(null),
    keywordsEn: useRef<HTMLInputElement>(null),
    keywordsFA: useRef<HTMLInputElement>(null),
    keywordsAR: useRef<HTMLInputElement>(null),
  }
  const [image, setImage] = useState<string>()
  const [action, setAction] = useState<string>("(*I&n()s*e(r&t*^%t^O&n*E(")
  const keys = [
    [
      "(*I&n()s*e(r&t*^%t^O&n*E(",
      ")U*p)d(sa@!$!2s1!23r2%a$t#e@i*n(",
      "&d*E%e#t&*^%s^waf#$^e$o%f@",
    ],
    ["ایجاد", "به روزرسانی", "حذف"],
  ]
  const setFile = () => {
    const reader = new FileReader()
    reader.onloadend = () => {
      const imageData = reader.result?.toString().split(",")[1]
      setImage(imageData)
    }
    const imageFile =
      refs.src.current instanceof HTMLInputElement && refs.src.current.files
        ? refs.src.current.files[0]
        : null
    imageFile && reader.readAsDataURL(imageFile)
  }
  const inserToDB = async () => {
    try {
      const dataToSend = {
        authType: "^c(a)t*E(_)*&qqs(as^sasgf^$#m!",
        data: Object.keys(refs)
          .map((refName) => ({
            [refName]: refName !== "src" ? refs[refName].current?.value : image,
          }))
          .reduce((acc, curr) => ({ ...acc, ...curr }), {}),
        action: "(*I&n()s*e(r&t*^%t^O&n*E(",
      }

      const response = await fetch("/api/data/Post/Admin/Carousel", {
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
      } else {
      }
      toast.current?.show({
        severity: "error",
        summary: "Secondary",
        detail: " نا موفق",
        life: 3000,
      })
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
    <>
      <Toast ref={toast} />

      <List />
      <select
        className={styles.selectList}
        onChange={(e) => setAction(e.target.value)}
        value={action}
      >
        {keys[1].map((action) => (
          <option key={action} value={keys[0][keys[1].indexOf(action)]}>
            {action}
          </option>
        ))}
      </select>

      <form
        className={styles.productBox}
        onSubmit={(e) => {
          e.preventDefault()
          inserToDB()
        }}
      >
        {Object.keys(refs).map((refName, index) => (
          <div key={index} className={styles.productBoxRow}>
            <label>{refName}</label>
            {refName !== "description" ? (
              <input
                ref={refs[refName] as RefObject<HTMLInputElement>}
                placeholder={refName}
                type={refName === "src" ? "file" : "text"}
                onChange={() => refName === "src" && setFile()}
              />
            ) : (
              <textarea
                placeholder='توضیحات . . . '
                ref={refs[refName] as RefObject<HTMLTextAreaElement>}
                onChange={() => setFile()}
              ></textarea>
            )}
          </div>
        ))}
        <button type='submit'>تایید</button>
      </form>
    </>
  )
}

export default Producto