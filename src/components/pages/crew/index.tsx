import PageHeading from "@/components/Comun/PageHeading"
import styles from "./Crew.module.css"
import { getData } from "@/web"
import { IResponseCrew } from "@/interface/Iresponse"
import Image from "next/image"
import { CrewMarker } from "./CrewMarker"

interface ICrew {
  params: { id: string }
}

export async function generateStaticParams() {
  return [{ id: '1' }, { id: '2' }, { id: '3' }, { id: '4' }]
}


export default async function Crew({ params }: ICrew) {
  const data = await getData<IResponseCrew>(params.id, "crew")
  const imgURL = data.images.webp.replace("./", "/")

  return (
    <main className={styles.Crew}>
      <PageHeading stage="02" title="Meet your crew" />
      <div className={styles.container} >
        <div className={styles.item} >
          <div className={styles.imagemContainer}>
            <div className={styles.imagem}>
              <Image
                src={imgURL}
                alt={`Image of the crew`}
                fill
                priority={true}
                sizes="620px"
              />
            </div>
          </div>
        </div>

        <div className={styles.item}>
          <CrewMarker id={params.id} />
          <article className={styles.info}>
            <h5 className={styles.role}>{data.role}</h5>
            <h2 className={styles.name}>{data.name}</h2>
            <p className={styles.bio}>{data.bio} </p>
          </article>
        </div>

      </div>

    </main>
  )
}
