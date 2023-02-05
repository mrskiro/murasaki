import { Block, BlockMap } from "../types"

export const toBlockMap = (blocks: Block[]): BlockMap => {
  return blocks.reduce<BlockMap>((p, c) => {
    if (c.hasChildren) {
      return {
        ...p,
        [c.id]: c,
        ...toBlockMap(c.children),
      }
    }
    return {
      ...p,
      [c.id]: c,
    }
  }, {})
}

export const gropingBlocks = (blocks: Block[]) => {
  const results = blocks.reduce<{
    values: string[][]
    lastType?: string
  }>(
    (p, c) => {
      if (c.type === p.lastType) {
        const shouldIncludeValues = p.values.at(-1)
        if (!shouldIncludeValues) {
          return p
        }
        return {
          values: [
            ...p.values.slice(0, p.values.length - 1),
            [...shouldIncludeValues, c.id],
          ],
          lastType: c.type,
        }
      }
      return {
        values: [...p.values, [c.id]],
        lastType: c.type,
      }
    },
    {
      values: [],
      lastType: undefined,
    }
  )
  return results
}
