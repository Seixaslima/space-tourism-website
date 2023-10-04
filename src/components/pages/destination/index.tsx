import PageHeading from "@/components/Comun/PageHeading"
import styles from "./Destination.module.css"
import Image from "next/image"
import DestinationBar from "./DestinationsBar"
import { IResponseDestination } from "@/interface/Iresponse"
import Information from "./Information"


interface IDestination {
  params: { id: string }
}



async function getData(id: string): Promise<IResponseDestination> {
  const baseURL = process.env.DB_URL
  const fetchURL = baseURL + "destinations/" + id
  const res = await fetch(fetchURL)
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    //  This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }

  return res.json()
}

export async function generateStaticParams() {
  return [{ id: '1' }, { id: '2' }, { id: '3' }, { id: '4' }]
}


export default async function Destination({ params }: IDestination) {
  const data = await getData(params.id)
  const imgURL = data.images.webp.replace("./", "/")


  return (
    <main className={styles.Destination}>
      <PageHeading stage="01" title="Pick your destination" />
      <div className={styles.container}>
        <div className={styles.item} >
          <div className={styles.image}>
            <Image
              src={imgURL}
              alt={`Image of the ${data.name}`}
              fill
              sizes="(min-width: 767px) 170px, (min-width: 1439px) 300px, 445px"
              priority={true}
            />
          </div>
        </div>
        <div className={styles.item}>
          <DestinationBar selected={params.id} />
          <h1 className={styles.title}>{data.name}</h1>
          <p className={styles.text} >
            {data.description}
          </p>
          <div className={styles.information}>
            <Information title="Avg. Distance" text={data.distance} />
            <Information title="Est. travel time" text={data.travel} />
          </div>

        </div>
      </div>
    </main>
  )
}