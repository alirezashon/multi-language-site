import { useRef, useState, useEffect, RefObject } from "react"
import styles from "../Inserto.module.css"
import List from "./List"
import { Toast } from "primereact/toast"
import { Blog } from "@/DTO"
import Image from "next/image"

const BlogManager: React.FC = () => {
  const toast = useRef<Toast>(null)

  const refs = {
    titleEn: useRef<HTMLInputElement>(null),
    titleFa: useRef<HTMLInputElement>(null),
    titleAr: useRef<HTMLInputElement>(null),
    src: useRef<HTMLInputElement>(null),
    descriptionEn: useRef<HTMLInputElement>(null),
    descriptionFa: useRef<HTMLInputElement>(null),
    descriptionAr: useRef<HTMLInputElement>(null),
    keywordsEn: useRef<HTMLInputElement>(null),
    keywordsFa: useRef<HTMLInputElement>(null),
    keywordsAr: useRef<HTMLInputElement>(null),
  }

  const [image, setImage] = useState<string>()
  const [action, setAction] = useState<string>("(*I&n()s*e(r&t*^%t^O&n*E(")
  const [data, setData] = useState<Blog[] | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [editItemId, setEditItemId] = useState<string | null>(null)
  const [subItems, setSubItems] = useState<
    {
      title: { en: string; fa: string; ar: string }
      src: string
      description: { en: string; fa: string; ar: string }
      keywords: { en: string[]; fa: string[]; ar: string[] }
    }[]
  >([])

  const keys = [
    [
      "(*I&n()s*e(r&t*^%t^O&n*E(",
      ")U*p)d(sa@!$!2s1!23r2%a$t#e@i*n(",
      "&d*E%e#t&*^%s^waf#$^e$o%f@",
    ],
    ["ایجاد", "به روزرسانی", "حذف"],
  ]

  const getData = async () => {
    try {
      const response = await fetch("/api/data/Post/Admin/Blog/GET", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          authType: "^c(a)ta*sEa0c(ga&roo*uxs^ezl&i#A!",
        }),
      })

      if (response.ok) {
        const result = await response.json()
        setData(result.blog)
        setIsLoading(false)
        console.log(result)
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
    if (editItemId && data) {
      setAction(")U*p)d(sa@!$!2s1!23r2%a$t#e@i*n(")
      const itemToEdit = data.find((item) => item._id === editItemId)
      if (itemToEdit) {
        refs.titleEn.current!.value = itemToEdit?.title.en
        refs.titleFa.current!.value = itemToEdit?.title.fa
        refs.titleAr.current!.value = itemToEdit?.title.ar
        refs.src.current!.value = itemToEdit.src
        refs.descriptionEn.current!.value = itemToEdit?.description.en
        refs.descriptionFa.current!.value = itemToEdit?.description.fa
        refs.descriptionAr.current!.value = itemToEdit?.description.ar
        refs.keywordsEn.current!.value = itemToEdit?.keywords.en.join(",") || ""
        refs.keywordsFa.current!.value = itemToEdit?.keywords.fa.join(",") || ""
        refs.keywordsAr.current!.value = itemToEdit?.keywords.ar.join(",") || ""
        setSubItems([
          ...subItems,
          {
            title: { en: "", fa: "", ar: "" },
            src: "",
            description: { en: "", fa: "", ar: "" },
            keywords: { en: [], fa: [], ar: [] },
          },
        ])
      }
    }
    !data && getData()
  }, [editItemId, data])

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

  const handleAddSubItem = () => {
    setSubItems([
      ...subItems,
      {
        title: { en: "", fa: "", ar: "" },
        src: "",
        description: { en: "", fa: "", ar: "" },
        keywords: { en: [], fa: [], ar: [] },
      },
    ])
  }

  const handleRemoveSubItem = (index: number) => {
    const newSubItems = subItems.filter((_, idx) => idx !== index)
    setSubItems(newSubItems)
  }
  const handleSubItemChange = (
    index: number,
    field: keyof Blog['subItems'][number],
    lang: keyof Blog['subItems'][number]['title'],
    value: string
  ) => {
    const newSubItems = [...subItems];
  
    if (
      field === 'title' ||
      field === 'description' ||
      field === 'keywords'
    ) {
      (newSubItems[index][field] as { en: string; fa: string; ar: string })[lang] = value;
    } else if (field === 'src') {
      newSubItems[index][field] = value;
    }
  
    setSubItems(newSubItems);
  };
  
  const inserToDB = async () => {
    try {
      const dataToSend = {
        authType: "^c(a)t*E(_)*&qqs(as^sasgf^$#m!",
        data: {
          title: {
            en: refs.titleEn.current?.value || "",
            fa: refs.titleFa.current?.value || "",
            ar: refs.titleAr.current?.value || "",
          },
          src: image,
          description: {
            en: refs.descriptionEn.current?.value || "",
            fa: refs.descriptionFa.current?.value || "",
            ar: refs.descriptionAr.current?.value || "",
          },
          keywords: {
            en: refs.keywordsEn.current?.value?.split(",") || [],
            fa: refs.keywordsFa.current?.value?.split(",") || [],
            ar: refs.keywordsAr.current?.value?.split(",") || [],
          },
          subItems: subItems,
        },
        action: action,
      }
      const url =
        action === "(*I&n()s*e(r&t*^%t^O&n*E("
          ? `/api/data/Post/Admin/Blog`
          : `/api/data/Post/Admin/Blog?aydi=${editItemId}`
      const response = await fetch(url, {
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
    <>
      <Toast ref={toast} />
      <List data={data} isLoading={isLoading} setEditItemId={setEditItemId} />
      <div className={styles.radioBox}>
        {keys[1].map((act, index) => (
          <div key={index}>
            <label htmlFor={act}>{act}</label>
            <input
              id={act}
              className={styles.checkboxInput}
              checked={action === keys[0][index]}
              onChange={() => setAction(keys[0][index])}
              type='radio'
              value={action}
            />
          </div>
        ))}
      </div>

      <form
        className={styles.productBox}
        onSubmit={(e) => {
          e.preventDefault()
          inserToDB()
        }}
      >
    {Object.keys(refs).map((refName) => {
  const ref = refs[refName as keyof typeof refs]; // Ensure TypeScript knows refName is a key of refs
  return (
    <div key={refName} className={styles.productBoxRow}>
      <label>{refName}</label>
      {refName === "src" && image && (
        <Image
          src={`data:image/jpeg;base64,${image}`}
          alt={``}
          width={77}
          height={77}
        />
      )}
      <input
        ref={ref as RefObject<HTMLInputElement>}
        placeholder={refName}
        type={refName === "src" ? "file" : "text"}
        onChange={() => refName === "src" && setFile()}
      />
    </div>
  );
})}

        <button type='button' onClick={handleAddSubItem}>
          Add Sub Item
        </button>
        {subItems.map((subItem, index) => (
          <div key={index}>
            <div>
              <label>Sub Item Title (EN)</label>
              <input
                type='text'
                value={subItem.title.en}
                onChange={(e) =>
                  handleSubItemChange(index, "title", "en", e.target.value)
                }
              />
            </div>
            <div>
              <label>Sub Item Title (FA)</label>
              <input
                type='text'
                value={subItem.title.fa}
                onChange={(e) =>
                  handleSubItemChange(index, "title", "fa", e.target.value)
                }
              />
            </div>
            <div>
              <label>Sub Item Title (AR)</label>
              <input
                type='text'
                value={subItem.title.ar}
                onChange={(e) =>
                  handleSubItemChange(index, "title", "ar", e.target.value)
                }
              />
            </div>
            {/* Similarly, implement input fields for src, description, and keywords */}
            <button type='button' onClick={() => handleRemoveSubItem(index)}>
              Remove Sub Item
            </button>
          </div>
        ))}
        <button type='submit' className={styles.submito}>
          تایید
        </button>
      </form>
    </>
  )
}

export default BlogManager
