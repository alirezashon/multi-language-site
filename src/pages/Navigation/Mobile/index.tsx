/** @format */

import Link from "next/link"
import styles from "./index.module.css"
import { useEffect, useState } from "react"
import Search from "../../Form/Search"
import { items } from "../items"
import { FaUserCircle } from "react-icons/fa"
import Basket from "../../Basket"
import { Post } from "../../../DTO"
import { HashLoader } from "react-spinners"
interface Items {
  category: string
  brands: string[] | subOption[]
}
interface subOption {
  brand: string
  products: string[]
}
interface NavProps {
  basket: string[][]
  setBasketStore: (items: string[][]) => void
  basketData: Post[]
  totalPrice: [number, number]
  isBasketOpen: boolean
  setIsBasketOpen: (value: boolean) => void
}

const Mobile: React.FC<NavProps> = ({
  setBasketStore,
  basket,
  basketData,
  totalPrice,
  isBasketOpen,
  setIsBasketOpen,
}) => {
  const [drawer, setDrawer] = useState<{
    item: number
    category: number
  } | null>(null)
  const [loading, setLoading] = useState<boolean>(false)

  const closeNav = (event: MouseEvent) => {
    if (drawer !== null && event.clientX > window.innerWidth * 0.4) {
      setDrawer(null)
    }
  }
  useEffect(() => {
    window.addEventListener("click", closeNav)

    return () => {
      window.removeEventListener("click", closeNav)
    }
  }, [drawer, setDrawer])
  return (
    <>
      {loading && (
        <div className={"loadingSpin"}>
          <HashLoader
            className={"loadingSpinner"}
            color={"#499b01"}
            loading={loading}
            size={150}
            aria-label='Loading Spinner'
            data-testid='loader'
          />
        </div>
      )}
      {drawer ? (
        <div className={styles.drawer}>
          <div className={styles.searchBox}>
            <Search />
          </div>
          {items.map((item: Items, index) => (
            <div key={index} className={styles.itemBox}>
              <h5
                className={styles.item}
                onClick={() => setDrawer({ item: index, category: -1 })}
              >
                <Link
                  key={index}
                  href={`${item.category}`}
                  className={styles.products}
                >
                  {item.category}
                </Link>
              </h5>
              {drawer.item === index &&
                items[drawer.item].brands.map((data, subIndex) =>
                  typeof data === "string" ? (
                    <Link
                      key={subIndex}
                      href={`${item.category}/${
                        items[drawer.item].brands
                      }/${data}`}
                    >
                      <h5 className={styles.options}>{`${data}`}</h5>
                    </Link>
                  ) : (
                    <div key={index}>
                      <h5
                        className={styles.category}
                        onClick={() =>
                          setDrawer({ item: index, category: subIndex })
                        }
                      >
                        <Link
                          key={subIndex}
                          href={`${item.category}/${data.brand}`}
                          className={styles.products}
                        >
                          {data.brand}
                        </Link>
                      </h5>
                      {subIndex === drawer.category &&
                        data.products.map((subOption, subOptionIndex) => (
                          <Link
                            key={subOptionIndex}
                            href={`${item.category}/${data.brand}/${subOption}`}
                            className={styles.products}
                          >
                            <h5
                              className={styles.subOptions}
                            >{`${subOption}`}</h5>
                          </Link>
                        ))}
                    </div>
                  )
                )}
            </div>
          ))}
        </div>
      ) : (
        <div className={styles.navBar}>
          <div
            className={styles.navIcon}
            onClick={() => setDrawer({ item: -1, category: -1 })}
          >
            <p>☰</p>
          </div>

          <div className={styles.iconBox}>
            <div>
              <Basket
                isBasketOpen={isBasketOpen}
                setIsBasketOpen={setIsBasketOpen}
                basket={basket}
                setBasket={setBasketStore}
                basketData={basketData}
                totalPrice={totalPrice}
              />
            </div>
            <div>
              <FaUserCircle
                className={styles.profile}
                onClick={() => (window.location.href = "/profile")}
              />
            </div>
          </div>
        </div>
      )}
    </>
  )
}
export default Mobile
