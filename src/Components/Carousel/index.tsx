import React, { useState, useEffect } from "react"
import { Galleria, GalleriaResponsiveOptions } from "primereact/galleria"
import Image from "next/image"
import styles from "./index.module.css"
import { Carouseled } from "@/DTO"

interface Props {
  data: Carouseled[] | undefined
  isLoading: boolean
}

const CircularDemo: React.FC<Props> = ({ data, isLoading }) => {
  const responsiveOptions: GalleriaResponsiveOptions[] = [
    {
      breakpoint: "991px",
      numVisible: 4,
    },
    {
      breakpoint: "767px",
      numVisible: 3,
    },
    {
      breakpoint: "575px",
      numVisible: 1,
    },
  ]

  const itemTemplate = (item: Carouseled) => {
    return (
      <div className={styles.carousel}>
        <Image
          className={styles.carouselimage}
          src={`data:image/jpeg;base64,${item.src}`}
          alt={item?.alt}
          width={1111}
          height={1111}
        />
      </div>
    )
  }

  const thumbnailTemplate = (item: Carouseled) => {
    return (
      <Image
        src={`data:image/jpeg;base64,${item.src}`}
        alt={item?.alt}
        width={100}
        height={100}
      />
    )
  }

  // const caption = (item: Carouseled) => {
  //   return (
  //     <React.Fragment>
  //       <div className='text-xl mb-2 font-bold'>{item.alt}</div>
  //     </React.Fragment>
  //   )
  // }

  return (
    <div className='card'>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <Galleria
          value={data}
          responsiveOptions={responsiveOptions}
          numVisible={5}
          item={itemTemplate}
          thumbnail={thumbnailTemplate}
          // caption={caption}
          style={{ maxWidth: "92%", marginLeft: "4%" }}
        />
      )}
    </div>
  )
}

export default CircularDemo

// import React, { useState, useEffect, useRef } from "react"
// import { Carousel, CarouselResponsiveOption } from "primereact/carousel"
// import Image from "next/image"
// import styles from "./index.module.css"
// import { Carouseled } from "@/DTO"

// interface Props {
//   data: Carouseled[] | undefined
//   isLoading: boolean
// }
// const CircularDemo: React.FC<Props> = ({ data, isLoading }) => {

//   const responsiveOptions: CarouselResponsiveOption[] = [
//     {
//       breakpoint: "1400px",
//       numVisible: 2,
//       numScroll: 1,
//     },
//     {
//       breakpoint: "1199px",
//       numVisible: 3,
//       numScroll: 1,
//     },
//     {
//       breakpoint: "767px",
//       numVisible: 2,
//       numScroll: 1,
//     },
//     {
//       breakpoint: "575px",
//       numVisible: 1,
//       numScroll: 1,
//     },
//   ]

//   const productTemplate = (product: Carouseled) => {
//     return (
//       <div className={styles.carousel}>
//         <Image
//           className={styles.carouselimage}
//           src={`data:image/jpeg;base64,${product.src}`}
//           alt={product?.alt}
//           width={1111}
//           height={1111}
//         />
//       </div>
//     )
//   }

//   return (
//     <div className='card'>
//       {isLoading ? (
//         <p>Loading...</p>
//       ) : (
//         <Carousel
//         style={{direction:'ltr'}}
//           value={data}
//           numVisible={1}
//           numScroll={1}
//           responsiveOptions={responsiveOptions}
//           className='custom-carousel'
//           circular
//           autoplayInterval={3000}
//           itemTemplate={productTemplate}
//         />
//       )}
//     </div>
//   )
// }

// export default CircularDemo
