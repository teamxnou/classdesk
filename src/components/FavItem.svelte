<script lang="ts">
  import { slide } from 'svelte/transition'
  import { cubicInOut } from 'svelte/easing'
  export let icon: any, title: string, href: string, color: string
</script>

<a
  {href}
  class="flex items-center gap-2 rounded-xl px-3 py-2 transition duration-150 hover:-translate-y-1 lg:h-20 lg:w-24 lg:flex-col lg:justify-between lg:gap-0 lg:pb-2 lg:pt-3 {color}"
  transition:slide={{ axis: 'x', duration: 500, easing: cubicInOut }}
>
  <svelte:component this={icon} class="h-8 w-8" />
  <h2 class="text-lg">{title}</h2>
</a>
