<script lang="ts">
  import { slide } from 'svelte/transition'

  import Calander from '~icons/lucide/Calendar'
  import ZoomOut from '~icons/lucide/ZoomOut'
  import ZoomIn from '~icons/lucide/ZoomIn'
  import Type from '~icons/lucide/Type'
  import Trash from '~icons/lucide/Trash'
  import Clipboard from '~icons/lucide/Clipboard'

  const date = new Date().toLocaleDateString('ko-KR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    weekday: 'long'
  })
  let showDate = false
  let showTitle = true
</script>

<div class="flex h-screen w-screen flex-col bg-neutral-100 p-12">
  {#if showTitle}
    <div class="mb-5 flex w-full items-center justify-between gap-10" transition:slide>
      <div
        class="flex grow cursor-default"
        on:click={() => (showDate = false)}
        on:keydown={(e) => e.key === '/' && (showDate = false)}
        role="button"
        tabindex="0"
      >
        <input
          type="text"
          class="grow text-6xl font-bold"
          disabled
          value={date}
          hidden={!showDate}
        />
        <input
          type="text"
          class="grow bg-transparent text-6xl font-bold placeholder-neutral-400 focus:outline-none"
          placeholder="제목을 입력하세요..."
          hidden={showDate}
        />
      </div>
      <label>
        <input type="checkbox" class="peer hidden" bind:checked={showDate} />
        <div
          class="flex cursor-pointer rounded-lg p-3 transition-[color] duration-150 hover:bg-neutral-200 peer-checked:text-blue-500 peer-checked:hover:bg-blue-100 peer-checked:hover:text-blue-600"
        >
          <Calander class="h-6 w-6" />
        </div>
      </label>
    </div>
  {/if}
  <textarea
    class="w-full grow resize-none bg-transparent text-5xl leading-normal placeholder-neutral-400 focus:outline-none"
    placeholder="내용을 입력하세요..."
  />
</div>
<div
  class="absolute bottom-3 left-3 right-3 mx-auto flex max-w-5xl items-center justify-between rounded-3xl p-3 backdrop-blur-sm backdrop-contrast-125"
>
  <div class="ml-1 flex gap-3">
    {#each [['bg-neutral-100', 'bg-black'], ['bg-green-800', 'bg-neutral-100'], ['bg-green-600', 'bg-black'], ['bg-black', 'bg-neutral-100'], ['bg-neutral-100', 'bg-blue-600'], ['bg-neutral-100', 'bg-red-600']] as pair}
      <button
        class="flex h-10 w-10 rotate-45 overflow-hidden rounded-full transition duration-150 hover:-translate-y-1"
      >
        <div class="h-full w-1/2 {pair[0]}" />
        <div class="h-full w-1/2 {pair[1]}" />
      </button>
    {/each}
  </div>
  <div class="flex items-center">
    <button class="rounded-xl p-3 hover:bg-neutral-100">
      <ZoomOut class="h-6 w-6" />
    </button>
    <button class="rounded-xl p-3 hover:bg-neutral-100">
      <ZoomIn class="h-6 w-6" />
    </button>
    <div class="mx-1 h-5 w-0 border-r" />
    <button
      class="rounded-xl p-3 hover:bg-neutral-100"
      on:click={() => (showTitle = !showTitle)}
    >
      <Type class="h-6 w-6" />
    </button>
    <div class="mx-1 h-5 w-0 border-r" />
    <button class="rounded-xl p-3 hover:bg-neutral-100">
      <Clipboard class="h-6 w-6" />
    </button>
    <button class="rounded-xl p-3 text-red-500 hover:bg-red-100 hover:text-red-600">
      <Trash class="h-6 w-6" />
    </button>
  </div>
</div>
