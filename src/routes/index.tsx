import { useState, ChangeEvent } from 'react'
import { useQuery } from 'react-query'

import styles from './Routes.module.scss'
import { BiSearch } from 'react-icons/bi'
import { getSearchWordApi } from 'services/search'
import { useMount } from 'react-use'

const App = () => {
  const [searchText, setSearchText] = useState('')

  const handleDataChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.currentTarget.value)
  }

  const handleDataSubmit = () => {
    refetch()
  }

  useMount(() => {
    if (!searchText) return
    handleDataSubmit()
  })

  const { data, refetch } = useQuery(
    ['getSearchWordApi', searchText],
    () => getSearchWordApi({ searchText }).then((res) => res.data.response.body.items.item),
    { refetchOnWindowFocus: false, useErrorBoundary: true }
  )

  // useEffect(() => {
  //   getSearchWordApi({ searchText: keyword })
  //     .then((res) => res.data)
  //     .then((data) => console.log(data))
  // }, [keyword])

  return (
    <main className={styles.app}>
      <h1 className={styles.title}>
        국내 모든 임상시험 검색하고 <br />
        온라인으로 참여하기
      </h1>
      <div className={styles.container}>
        <section className={styles.searchWrap}>
          <form onSubmit={handleDataSubmit}>
            <BiSearch className={styles.searchIcon} />
            <input type='text' value={searchText} placeholder='질환명을 입력해주세요' onChange={handleDataChange} />
          </form>
          <button type='button' className={styles.searchBtn}>
            검색
          </button>
        </section>
        <section>
          <ul className={styles.resultWrap}>
            <li className={styles.resultTitle}>추천 검색어</li>
            {data?.map((item) => {
              ;<li className={styles.resultList}>
                <BiSearch className={styles.searchIcon} />
                <span className={styles.recommendItem}>{item.sickNm}</span>
              </li>
            })}
          </ul>
        </section>
      </div>
    </main>
  )
}

export default App
