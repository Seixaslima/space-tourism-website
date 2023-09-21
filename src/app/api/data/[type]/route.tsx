import data from "@/json/data.json"
import { NextResponse } from "next/server"

const filter = {
  destinations: "destination",
  crew: "crew",
  technology: "technology"
}

export async function GET(request: Request) {
  const param = request.url.split("/data/")[1]
  let response = {}

  if (param === "destination") {
    response = data["destinations"]
    return NextResponse.json(response)
  }
  if (param === "crew") {
    response = data["crew"]
    return NextResponse.json(response)
  }
  if (param === "technology") {
    response = data["technology"]
    return NextResponse.json(response)
  }

  return new Response("Data does not exist", {
    status: 400,
  })
}