import { NextSeo } from "next-seo"
import { useEffect, useState } from "react"
import { GetServerSideProps, NextPage } from "next"
import { Product, Producted } from "../../DTO"
import dynamic from "next/dynamic"
import { useLanguage } from "@/Context"
const Producto = dynamic(() => import("../../Components/Product"), {
  loading: () => <p>در حال بارگیری ...</p>,
})
interface Props {
  products: Product[]
}
const Bog: NextPage<Props> = ({ products }) => {
  const { language, setLanguage } = useLanguage()

  const [loading, setLoading] = useState<boolean>(true)
  const [data, setData] = useState<Producted[] | []>([])

  useEffect(() => {
    if (products) {
      setLoading(false)

      const transformedProducts = products.map((product: Product) => ({
        _id: product._id,
        title: product.title[language],
        src: product.src,
        link: product.link,
        description: product.description ? product.description[language] : "",
        keywords: product.keywords ? product.keywords[language] : [],
      }))

      setData(transformedProducts)
    }
  }, [language, products])

  return (
    <>
      <NextSeo
        title='pishgaman'
        description='...'
        canonical='https://www.roommode.ir/'
        openGraph={{
          url: "https://www.roommode.ir/",
          title: "...",
          description: "Open Graph Description",
          images: [
            {
              url: "https://www.example.ie/og-image-01.jpg",
              width: 800,
              height: 600,
              alt: "Og Image Alt",
            },
            {
              url: "https://www.example.ie/og-image-02.jpg",
              width: 900,
              height: 800,
              alt: "Og Image Alt Second",
            },
            { url: "https://www.example.ie/og-image-03.jpg" },
            { url: "https://www.example.ie/og-image-04.jpg" },
          ],
        }}
      />
      {loading ? (
        <div
          style={{
            width: "100vw",
            height: "100vh",
            background: `repeating-linear-gradient(
                90deg,
            rgb(136, 134, 129),
            rgb(255, 255, 233),
            rgb(197, 192, 179)
              )`,
          }}
        ></div>
      ) : (
        <div style={{ direction: `${language === "en" ? "ltr" : "rtl"}` }}>
          <Producto data={data} loading={loading} />
        </div>
      )}
    </>
  )
}

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  try {
    const res = await fetch(
      `http://localhost:${process.env.PRODUCTION_PORT}/api/data/Post/Client/Product`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          authType: "^c(a)ta*(A)*az)m(a^afe%x*w%s$))!",
        }),
      }
    )
    const result = await res.json()

    const products = result.products || []

    return {
      props: {
        products,
      },
    }
  } catch (error) {
    console.error("Error fetching initial props:", error)
    return { props: { products: [] } }
  }
}

export default Bog
