/** @format */

import React, { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { MdEditDocument } from "react-icons/md"
import styles from "../../List.module.css" // Update with your CSS file path
import { Carousel } from "@/DTO"

interface Props {
  data: Carousel[] | null
  isLoading: boolean
  setEditItemId: (id: string) => void
}
const List: React.FC<Props> = ({ data, isLoading ,setEditItemId}) => {
  return (
    <div className={styles.tableContainer}>
      <div className={styles.header}>لیست عکس های کروژل</div>
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
              {["Name", "Keywords", "Image", "Description"].map((header) => (
                <th key={header}>{header}</th>
              ))}
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data &&
              data?.map((carousel) => (
                <tr key={carousel._id}>
                  {/* <td>{Object.entries(carousel.alt).map((d) => d)}</td> */}
                  <td>
                    {Object.values(carousel.keywords).map((keyword, index) => (
                      <div key={index} className={styles.colorBox}>
                        {keyword}
                      </div>
                    ))}
                  </td>
                  <td>
                    <Image
                      src={`data:image/jpeg;base64,${carousel.src}`}
                      alt={``}
                      width={77}
                      height={77}
                    />
                  </td>

                  <td>
                    <MdEditDocument className={styles.actionButton} onClick={()=>setEditItemId(carousel._id)}/>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      )}
    </div>
  )
}

export default List
