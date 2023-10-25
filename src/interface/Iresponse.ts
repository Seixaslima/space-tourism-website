export interface IResponseDestination {
  "id": number
  "name": string
  "images": {
    "png": string,
    "webp": string
  },
  "description": string
  "distance": string
  "travel": string
}

export interface IResponseCrew {
  "id": number
  "name": string
  "images": {
      "png": string,
      "webp": string
  },
  "role": string
  "bio": string
}