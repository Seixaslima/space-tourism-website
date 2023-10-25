import { IResponseDestination } from "@/interface/Iresponse"

async function getData<T>(id: string, page: string): Promise<T> {
  const baseURL = process.env.DB_URL
  const fetchURL = baseURL + page + "/" + id
  const res = await fetch(fetchURL)

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
}

async function getList<T>(page: string): Promise<T[]> {
  const baseURL = process.env.DB_URL
  const fetchURL = baseURL + page + "/"
  const res = await fetch(fetchURL)

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  const list = res.json()



  return list
}

export{
  getData,
  getList
} 