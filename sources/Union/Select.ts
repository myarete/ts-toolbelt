import {Is} from '../Any/Is'
import {Match} from '../Any/_Internal'

/**
 * Extract the part of `U` that matches `M`
 * @param U to extract from
 * @param M to select with
 * @returns [[Union]]
 * @example
 * ```ts
 * ```
 */
export type Select<U extends any, M extends any, match extends Match = 'default'> =
    U extends unknown
    ? Is<U, M, match> extends 1
      ? U & M
      : never
    : never
