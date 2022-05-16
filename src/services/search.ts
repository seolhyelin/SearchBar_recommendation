import axios from 'axios'
import { ISearchData } from 'types/search.d'

const SEARCH_URL = '/B551182/diseaseInfoService/getDissNameCodeList'

interface Params {
  searchText: string
}

export const getSearchWordApi = (params: Params) => {
  return axios.get<ISearchData>(SEARCH_URL, {
    params: {
      ...params,
      ServiceKey: process.env.REACT_APP_SEARCHWORD_KEY,
      numOfRows: '10',
      sickType: '1',
      medTp: '2',
      diseaseType: 'SICK_NM',
    },
  })
}
