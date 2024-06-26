// /pages/post/[id].tsx
import { GetServerSideProps, NextPage } from "next"
import Head from "next/head"
import { Product, Producted } from "@/DTO"
import { useLanguage } from "../../../Context"
import Image from "next/image"

interface PostProps {
  post: Product
}

const Post: NextPage<PostProps> = ({ post }) => {
  const { language } = useLanguage()

  const transformedPost = {
    _id: post._id,
    title: post.title[language],
    src: post.src,
    link: post.link,
    description: post.description[language],
    keywords: post.keywords[language],
  }

  return (
    <>
      <Head>
        <title>{transformedPost.title}</title>
      </Head>
      <PostDisplay post={transformedPost} />
    </>
  )
}

interface PostDisplayProps {
  post: Producted
}

const PostDisplay: React.FC<PostDisplayProps> = ({ post }) => {
  return (
    <div>
      <h1>{post.title}</h1>
      <Image src={post.src} alt={post.title} width={777}height={777} />
      <p>{post.description}</p>
      <ul>
        {post.keywords.map((keyword, index) => (
          <li key={index}>{keyword}</li>
        ))}
      </ul>
      <a href={post.link}>Read more</a>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps<PostProps> = async ({
  params,
}) => {
  const title = params?.id as string
  const res = await fetch(
    `http://localhost:${process.env.PRODUCTION_PORT}/api/data/Post/Client/page`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        category: "@L$L%O%F#D%M^",
        title: title,
        authType: "G&E!T*P^R$O#D$U^C@T*S",
      }),
    }
  )

  const postData = await res.json()
  return {
    props: {
      post: postData.products[0], // Assuming your API response has a "products" array
    },
  }
}

export default Post
