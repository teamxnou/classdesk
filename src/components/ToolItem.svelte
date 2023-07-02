<script lang="ts">
  import { slide } from 'svelte/transition'
  import { cubicInOut } from 'svelte/easing'

  import Star from '~icons/lucide/Star'
  import FilledStar from '~icons/filled/FilledStar'

  import { favorite, recent } from '../stores/stores'

  export let icon: any, title: string, href: string, color: string

  $: isFavorite = $favorite.includes(href.replace('/tools/', ''))
  function fav() {
    favorite.update((fav) => {
      if (isFavorite) {
        return fav.filter((f) => f !== href.replace('/tools/', ''))
      } else {
        return [...fav, href.replace('/tools/', '')]
      }
    })
  }
  function rec() {
    recent.set([
      href.replace('/tools/', ''),
      ...$recent.filter((r) => r !== href.replace('/tools/', ''))
    ])
  }
</script>

<a
  {href}
  class="flex h-24 flex-col justify-between rounded-xl p-2 pb-2 transition duration-150 hover:-translate-y-1 {color}"
  transition:slide={{ axis: 'x', duration: 500, easing: cubicInOut }}
  on:click={rec}
>
  <div class="flex justify-between">
    <svelte:component this={icon} class="m-1 h-8 w-8" />
    <button
      class="rounded-lg p-2 hover:bg-black/10"
      class:fill-current={isFavorite}
      on:click|preventDefault|stopPropagation={fav}
    >
      {#if isFavorite}
        <FilledStar class="h-6 w-6" />
      {:else}
        <Star class="h-6 w-6 fill-lime-500" />
      {/if}
    </button>
  </div>
  <h2 class="pl-1 text-lg">{title}</h2>
</a>
