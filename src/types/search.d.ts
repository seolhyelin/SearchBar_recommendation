export interface ISearchData {
  serviceKey: string
  pageNo: number
  numOfRows: number
  sickType: number
  medTp: number
  diseaseType: string
  searchText: string
}

interface IItem {
  sickCd: string
  sickNm: string
}

interface IItems {
  item: IItem[]
}

interface IBody {
  items: IItems
}

interface IResponse {
  body: IBody
}

export interface IDiseaseData {
  response: IResponse
}
