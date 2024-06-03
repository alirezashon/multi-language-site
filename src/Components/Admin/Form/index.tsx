import React, { useEffect, useRef, useState } from "react"
import styles from "../List.module.css" // Update with your CSS file path
import { Toast } from "primereact/toast"
import { Form } from "@/DTO"

const Formo: React.FC = () => {
  const toast = useRef<Toast>(null)

  const [data, setData] = useState<Form[] | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(true)

  const getData = async () => {
    try {
      const response = await fetch("/api/data/Post/Admin/Form/GET", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          authType: "*z)a(m&a*r^i$y#a@n$a$l(i*o(t*a&y^",
        }),
      })

      if (response.ok) {
        const result = await response.json()
        setData(result.form)
        setIsLoading(false)
      } else {
        toast.current?.show({
          severity: "error",
          summary: "Secondary",
          detail: " نا موفق",
          life: 3000,
        })
        setIsLoading(false)
      }
    } catch (error) {
      toast.current?.show({
        severity: "error",
        summary: "Secondary",
        detail: " نا موفق",
        life: 3000,
      })
      setIsLoading(false)
    }
  }
  useEffect(() => {
    !data && getData()
  }, [data])

  return (
    <div className={styles.tableContainer}>
      <div className={styles.header}>درخواست های ارسال شده</div>
      {isLoading ? (
        Array.apply(0, Array(7)).map((x, i) => (
          <div key={i} className={styles.loading}>
            <div className={styles.loadingRect}></div>
            <div className={styles.loadingSquare}></div>
          </div>
        ))
      ) : (
        <table>
          <thead>
            <tr>
              {["name", "contact", "description"].map((header) => (
                <th key={header}>{header}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data &&
              data?.map((form) => (
                <tr key={form._id}>
                  <td>{form.name}</td>
                  <td>{form.contact}</td>
                  <td>{form.description}</td>
                </tr>
              ))}
          </tbody>
        </table>
      )}
    </div>
  )
}

export default Formo
