import {_Omit as _OOmit} from '../Object/Omit'
import {_ListOf} from '../Object/ListOf'
import {Key} from './_Internal'
import {List} from './List'
import {ObjectOf} from './ObjectOf'

/**
 * @hidden
 */
export type _Omit<L extends List, K extends Key> =
    _ListOf<_OOmit<ObjectOf<L>, `${K}` | K>>

/**
 * Remove out of `L` the entries of key `K`
 * @param L to remove from
 * @param K to chose entries
 * @returns [[List]]
 * @example
 * ```ts
 * ```
 */
export type Omit<L extends List, K extends Key> =
    L extends unknown
    ? _Omit<L, K>
    : never
