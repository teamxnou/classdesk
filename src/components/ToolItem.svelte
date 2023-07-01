<script lang="ts">
  import Star from '~icons/lucide/Star'

  export let icon: any, title: string, href: string, color: string
</script>

<a
  {href}
  class="flex h-24 flex-col justify-between rounded-xl p-2 pb-2 transition duration-150 hover:-translate-y-1 {color}"
>
  <div class="flex justify-between">
    <svelte:component this={icon} class="m-1 h-8 w-8" />
    <button class="rounded-lg p-2 hover:bg-black/10" on:click|preventDefault>
      <Star class="h-6 w-6" />
    </button>
  </div>
  <h2 class="pl-1 text-lg">{title}</h2>
</a>
