import { writable } from 'svelte/store'
import type { Writable } from 'svelte/store'

const defaultFavorite = ['timer', 'whiteboardtext', 'randint', 'randname', 'randorder', 'stlog']
export const favorite: Writable<string[]> = writable([])

if (typeof window !== 'undefined') {
  const data = localStorage.getItem('favorite')
  if (data) {
    favorite.set(JSON.parse(data))
  } else {
    favorite.set(defaultFavorite)
  }
  favorite.subscribe((value) => {
    if (value == defaultFavorite) return
    localStorage.setItem('favorite', JSON.stringify(value))
  })
}
