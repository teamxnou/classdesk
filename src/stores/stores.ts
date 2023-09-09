import { writable } from 'svelte/store'
import type { Writable } from 'svelte/store'

const defaultFavorite = ['timer', 'whiteboardtext', 'randint', 'randname', 'randorder', 'stlog']
export const favorite: Writable<string[]> = writable([])
export const recent: Writable<string[]> = writable([])

/*
  # Definitions
  - wbt: whiteboardtext
*/

interface Settings {
  volumeMeterSensitivity: number
  wbtShowTitle: boolean
  wbtShowDate: boolean
  wbtTextColor: string
  wbtFontSize: number
}

const defaultSettings = {
  volumeMeterSensitivity: 4,
  wbtShowTitle: true,
  wbtShowDate: false,
  wbtTextColor: '#000',
  wbtFontSize: 1
}

export const settings: Writable<Settings> = writable({ ...defaultSettings })

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

  const loadedSettings = localStorage.getItem('settings') ?? '{}'
  if (settings) settings.set({ ...defaultSettings, ...JSON.parse(loadedSettings) })
  settings.subscribe((value) => {
    if (Object.keys(value).length == 0) return
    localStorage.setItem('settings', JSON.stringify(value))
  })
}
