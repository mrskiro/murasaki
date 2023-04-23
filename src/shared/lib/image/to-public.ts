import fs from "fs"

const DIR = "public/posts/images" as const

type Item = {
  id: string
  url: string
}

export const toPublic = async (items: Item[]) => {
  if (!fs.existsSync(DIR)) {
    fs.mkdirSync(DIR, { recursive: true })
  }

  await Promise.all(items.map((v) => save(v)))
}

const save = async (item: Item) => {
  const imagePath = generateImagePath(item.id)
  if (fs.existsSync(imagePath)) {
    return
  }

  const res = await fetch(item.url)
  const buffer = await res.arrayBuffer()
  const data = Buffer.from(buffer)
  fs.writeFile(imagePath, data, (err) => {
    if (err) {
      console.warn(err)
    } else {
      console.log(`saved ${imagePath}`)
    }
  })
}

export const generateImagePath = (id: string) => {
  return `${DIR}/${id}.png` as const
}
