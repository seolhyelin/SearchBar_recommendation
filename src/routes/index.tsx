import { useEffect, useState } from 'react'
import { useMount } from 'react-use'

import { ISearchData } from '../types/search.d'

import styles from './Routes.module.scss'
import { BiSearch } from 'react-icons/bi'
import { getSearchWordApi } from 'services/search'

const App = () => {
  const [keyword, setKeyword] = useState('')
  const [keyItems, setKeyItems] = useState<ISearchData[]>([])

  const handleDataChange = (e: React.FormEvent<HTMLInputElement>) => {
    setKeyword(e.currentTarget.value)
  }

  useEffect(() => {
    getSearchWordApi({ searchText: keyword })
      .then((res) => res.data)
      .then((data) => console.log(data))
  }, [keyword])

  return (
    <main className={styles.app}>
      <h1 className={styles.title}>
        국내 모든 임상시험 검색하고 <br />
        온라인으로 참여하기
      </h1>
      <div className={styles.container}>
        <div className={styles.searchWrap}>
          <form>
            <BiSearch className={styles.searchIcon} />
            <input type='text' value={keyword} placeholder='질환명을 입력해주세요' onChange={handleDataChange} />
          </form>
          <button type='button' className={styles.searchBtn}>
            검색
          </button>
        </div>
        <ul className={styles.resultWrap}>
          <li className={styles.searchTitle}>추천 검색어</li>
          <li className={styles.resultList}>
            <BiSearch className={styles.searchIcon} />
            <span className={styles.recommendItem}>추천 내용</span>
          </li>
        </ul>
      </div>
    </main>
  )
}

export default App
