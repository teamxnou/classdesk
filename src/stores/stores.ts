import { writable } from 'svelte/store'
import type { Writable } from 'svelte/store'

const defaultFavorite = ['timer', 'whiteboardtext', 'randint', 'randname', 'randorder', 'stlog']
export const favorite: Writable<string[]> = writable([])
export const recent: Writable<string[]> = writable([])

if (typeof window !== 'undefined') {
  const fav = localStorage.getItem('favorite')
  const rec = localStorage.getItem('recent')
  if (fav) favorite.set(JSON.parse(fav))
  else favorite.set(defaultFavorite)
  if (rec) recent.set(JSON.parse(rec))
  else recent.set([])
  favorite.subscribe((value) => {
    if (value == defaultFavorite) return
    localStorage.setItem('favorite', JSON.stringify(value))
  })
  recent.subscribe((value) => {
    if (value.length == 0) return
    localStorage.setItem('recent', JSON.stringify(value))
  })
}
