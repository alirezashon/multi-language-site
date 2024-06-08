import React, { useState } from "react"
import styles from "./index.module.css"
import Image from "next/image"

type Video = {
  id: number
  placeholder: string
  src: string
}

const videos: Video[] = [
  { id: 1, placeholder: "/vide/1-1.jpg", src: "/vide/1.mp4" },
  { id: 2, placeholder: "/vide/2-2.jpg", src: "/vide/2.mp4" },
  { id: 1, placeholder: "/vide/1-1.jpg", src: "/vide/1.mp4" },
  { id: 2, placeholder: "/vide/2-2.jpg", src: "/vide/2.mp4" },
]

const Video: React.FC = () => {
  const [loadedVideos, setLoadedVideos] = useState<{ [key: number]: boolean }>(
    {}
  )

  const handlePlay = (id: number) => {
    setLoadedVideos((prev) => ({ ...prev, [id]: true }))
  }

  return (
    <div className={styles.gridContainer}>
      {videos.map((video) => (
        <div key={video.id} className={styles.videoWrapper}>
          {loadedVideos[video.id] ? (
            <video controls width='100%' 
            className={styles.placeholderimage}
            src={video.src} />
          ) : (
            <div
              className={styles.placeholder}
              onClick={() => handlePlay(video.id)}
            >
              <Image
                width={777}
                height={777}
            className={styles.placeholderimage}
                src={video.placeholder}
                alt={`Video ${video.id} placeholder`}
              />
              <button className={styles.playButton}>Play</button>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

export default Video
