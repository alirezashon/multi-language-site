/** @format */

import Link from 'next/link'
import styles from './index.module.css'
import { useEffect, useState } from 'react'
import { items, links } from '../items'
import Image from 'next/image'
import { GiCrossMark } from 'react-icons/gi'
import { SelectButton } from 'primereact/selectbutton'
import { useLanguage } from '@/Context'
import { BsSearch } from 'react-icons/bs'

const Mobile: React.FC = () => {
  const { language, setLanguage } = useLanguage()
  const [drawer, setDrawer] = useState<boolean>(false)
  const itemso = ['English', 'فارسی', 'العربیة']

  useEffect(() => {
    const closeNav = (event: MouseEvent) => {
      if (drawer !== null && event.clientX > window.innerWidth / 2) {
        setDrawer(false)
      }
    }
    window.addEventListener('click', closeNav)

    return () => {
      window.removeEventListener('click', closeNav)
    }
  }, [drawer, setDrawer])
  return (
    <>
      {drawer ? (
        <div className={styles.drawer}>
          <GiCrossMark
            className={styles.close}
            onClick={() => setDrawer(false)}
          />
          <form
            className={styles.searchBar}
            style={{ direction: language === 'en' ? 'ltr' : 'rtl' }}
          >
            <BsSearch
              className={styles.searchIcon}
              style={{
                right: `${language !== 'en' ? '1rem' : ''}`,
                left: `${language === 'en' && '1rem'}`,
                transform: `rotate(19deg)`,
              }}
            />
            <input
              className={styles.searchInput}
              type='search'
              placeholder={
                language === 'en'
                  ? 'Search for products'
                  : language === 'fa'
                  ? 'جستجو برای محصولات'
                  : 'ابحث عن المنتجات'
              }
            />
          </form>
          {items &&
            items[language === 'en' ? 0 : language === 'fa' ? 1 : 2].map(
              (item: string, itemIndex) => (
                <div
                  style={{ direction: language === 'en' ? 'ltr' : 'rtl' }}
                  key={itemIndex}
                  onClick={() => (location.href = `${links[itemIndex]}`)}
                  className={styles.itemBox}
                >
                  <Link href={`${links[itemIndex]}`}>{item}</Link>
                </div>
              )
            )}
          <div className={styles.selectListo}>
              <div className={styles.langFlag}>
                <Image
                  src='/images/england.svg'
                  width={77}
                  height={77}
                  alt=''
                  className={styles.flag}
                  onClick={() => setLanguage('en')}
                />
                <Image
                  src='/images/arabia.png'
                  width={77}
                  height={77}
                  alt=''
                  className={styles.flag}
                  onClick={() => setLanguage('ar')}
                />
                <Image
                  src='/images/iran.png'
                  width={77}
                  height={77}
                  alt=''
                  className={styles.flag}
                  onClick={() => setLanguage('fa')}
                />
              </div>
          </div>
        </div>
      ) : (
        <div className={styles.navBar}>
          <div className={styles.navIcon} onClick={() => setDrawer(true)}>
            <p>☰</p>
          </div>

          <div className={styles.iconBox}>
            <Image
              src={'/images/icon.jpg'}
              width={555}
              height={555}
              alt=''
              className={styles.icono}
            />
          </div>
        </div>
      )}
    </>
  )
}
export default Mobile
