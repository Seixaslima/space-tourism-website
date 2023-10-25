import PageHeading from "@/components/Comun/PageHeading"
import styles from "./Technology.module.css"
import Image from "next/image"
import { getData } from "@/web"
import { IResponseTechnology } from "@/interface/Iresponse"
import TechnologyMarker from "./TechnologyMarker"


interface ITechnology {
  params: { id: string }
}

export async function generateStaticParams() {
  return [{ id: '1' }, { id: '2' }, { id: '3' }]
}


export default async function Technology({ params }: ITechnology) {
  const data = await getData<IResponseTechnology>(params.id, "technology")
  const landscape = data.images.landscape.replace("./", "/")
  const portrait = data.images.portrait.replace("./", "/")
  return (
    <main className={styles.Technology}>
      <PageHeading stage="03" title="SPACE LAUNCH 101" />
      <div className={styles.container}>
        <div className={styles.images}>
          <div className={styles.imagemLandscape}>
            <Image
              src={landscape}
              alt={`image of the ${data.name}`}
              width={768}
              height={310}
              sizes="100vw"
              style={{ width: '100%', height: 'auto', }}
            />
          </div>

          <div className={styles.imagemPortrait}>
            <Image
              src={portrait}
              alt={`image of the ${data.name}`}
              width={515}
              height={527}
            />
          </div>
        </div>
        <div className={styles.marker}>
          <TechnologyMarker id={params.id} />
        </div>
        <div className={styles.info}>
          <h6 className={styles.terminology}>The terminology</h6>
          <h1 className={styles.name} >{data.name}</h1>
          <p className={styles.description}> {data.description} </p>
        </div>
      </div>
    </main>
  )
}
