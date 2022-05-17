import axios from 'axios'
import { ISearchData, IDiseaseData } from 'types/search.d'

const SEARCH_URL = '/B551182/diseaseInfoService/getDissNameCodeList'

interface Params {
  searchText: string
}

export const getSearchWordApi = (params: Params) => {
  return axios.get<IDiseaseData>(SEARCH_URL, {
    params: {
      ...params,
      serviceKey: process.env.REACT_APP_SEARCHWORD_KEY,
      pageNo: 1,
      numOfRows: '10',
      sickType: '1',
      medTp: '2',
      diseaseType: 'SICK_NM',
    },
  })
}
