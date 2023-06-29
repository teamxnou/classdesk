<script lang="ts">
  export let icon: any, title: string, href: string, color: string
</script>

<a
  {href}
  class="flex h-24 flex-col justify-between rounded-xl p-3 pb-2 transition duration-150 hover:-translate-y-1 {color}"
>
  <svelte:component this={icon} class="h-8 w-8" />
  <h2 class="text-lg">{title}</h2>
</a>
