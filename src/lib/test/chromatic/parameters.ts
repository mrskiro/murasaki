/**
 * @example
 * ```typescript
 * export const StoryName = {
 *  parameters: {
 *    ...enabledSnapshot
 *  }
 * }
 * ```
 */
export const enabledSnapshot = {
  chromatic: {
    disableSnapshot: false,
  },
} as const

export const disabledSnapshot = {
  chromatic: {
    disableSnapshot: true,
  },
} as const
