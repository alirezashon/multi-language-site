import { NextSeo } from "next-seo"
import { useEffect, useState } from "react"
import { GetServerSideProps, NextPage } from "next"
import {
  Product,
  Producted,
  Category,
  Categored,
  Carouselo,
  Carouseled,
} from "../DTO"
import dynamic from "next/dynamic"
import { useLanguage } from "@/Context"

const Handler = dynamic(() => import("../Handler"), {
  loading: () => <p>در حال بارگیری ...</p>,
})

interface Props {
  products: Product[]
  categories: Category[]
  carousel: Carouselo[]
}

const RootPage: NextPage<Props> = ({ products, categories, carousel }) => {
  const { language, setLanguage } = useLanguage()
  const [loading, setLoading] = useState<boolean>(true)
  const [data, setData] = useState<
    [Producted[], Categored[], Carouseled[]] | []
  >([])

  useEffect(() => {
    if (products && categories && carousel) {
      setLoading(false)

      const transformedProducts = products.map((product: Product) => ({
        _id: product._id,
        title: product.title[language],
        src: product.src,
        link: product.link,
        description: product.description ? product.description[language] : "",
        keywords: product.keywords ? product.keywords[language] : [],
      }))

      const transformedCategories = categories.map((category) => ({
        _id: category._id,
        name: category.name[language],
        src: category.src,
        keywords: category.keywords ? category.keywords[language] : [],
      }))

      const transformedCarousel = carousel.map((item) => ({
        _id: item._id,
        src: item.src,
        alt: item.alt ? item.alt[language] : "",
        keywords: item.keywords ? item.keywords[language] : [],
      }))

      setData([transformedProducts, transformedCategories, transformedCarousel])
    }
  }, [language, products, categories, carousel])

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
              #d6c66b,
              #eebe20 5vh,
              #fbf5a0 5vh,
              #ffffff 10vh
            )`,
          }}
        ></div>
      ) : (
        <div style={{ direction: `${language === "en" ? "ltr" : "rtl"}` }}>
          <Handler
            loading={loading}
            data={data}
           />
        </div>
      )}
    </>
  )
}

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  try {
    const res = await fetch(
      `http://localhost:${process.env.PRODUCTION_PORT}/api/data/Post/Client`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          category: "@L$L%O%F#D%M^",
          authType: "^c(a)ta*@x$a#r#x%s^ezl&i#A!",
        }),
      }
    )
    const result = await res.json()

    const products = result.products || []
    const categories = result.categories || []
    const carousel = result.carousel || []

    return {
      props: {
        products,
        carousel,
        categories,
      },
    }
  } catch (error) {
    console.error("Error fetching initial props:", error)
    return { props: { products: [], carousel: [], categories: [] } }
  }
}

export default RootPage
