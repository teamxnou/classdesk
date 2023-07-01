<script lang="ts">
  import Logo from '../components/Logo.svelte'
  import FavItem from '../components/FavItem.svelte'
  import ToolItem from '../components/ToolItem.svelte'

  import Search from '~icons/lucide/Search'
  import Star from '~icons/lucide/Star'
  import History from '~icons/lucide/History'
  import Presentation from '~icons/lucide/Presentation'
  import Dices from '~icons/lucide/Dices'
  import Shuffle from '~icons/lucide/Shuffle'
  import X from '~icons/lucide/X'

  import { tools } from '../tools'

  let searchOpened = false
</script>

<div class="flex h-screen w-screen justify-center bg-neutral-100">
  <div class="flex justify-center xl:container xl:justify-normal">
    <div class="container mx-3 mt-10 flex max-w-4xl flex-col sm:mx-8 lg:mx-10 xl:mx-10">
      <header class="flex items-center justify-between">
        <Logo />
        <button
          class="rounded-xl p-3 hover:bg-neutral-200 xl:hidden"
          on:click={() => {
            searchOpened = true
          }}
        >
          <Search class="h-7 w-7" />
        </button>
      </header>
      <main class="mt-5 flex grow flex-col gap-3">
        <section id="favorite">
          <h2 class="mb-2 flex items-center gap-1 text-lg font-medium text-neutral-500">
            <Star class="h-6 w-6" />
            즐겨찾기
          </h2>
          <ul class="flex w-full flex-wrap gap-3">
            {#each tools as tool}
              <li>
                <FavItem href={tool.href} color={tool.color} title={tool.name} icon={tool.icon} />
              </li>
            {/each}
          </ul>
        </section>
        <section class="@container">
          <h2 class="mb-2 flex items-center gap-1 text-lg font-medium text-neutral-500">
            <History class="h-6 w-6" />
            최근 사용
          </h2>
          <ul class="grid grid-cols-2 gap-3 @xl:grid-cols-3 @2xl:grid-cols-5">
            {#each tools as tool}
              <li>
                <ToolItem href={tool.href} color={tool.color} title={tool.name} icon={tool.icon} />
              </li>
            {/each}
          </ul>
        </section>
      </main>
    </div>
    {#if searchOpened}
      <div class="absolute left-0 top-0 h-screen w-screen bg-black/20" />
    {/if}
    <aside
      class="z-50 m-2 hidden w-full max-w-md flex-col gap-3 rounded-xl bg-white p-5 pt-8 @container xl:flex"
      class:mobileSearchOpened={searchOpened}
    >
      <div class="flex items-center justify-between">
        <h1
          class="ml-1 cursor-default select-none font-mono text-3xl font-bold sm:text-4xl lg:ml-2"
        >
          Search
        </h1>
        <button
          class="rounded-xl p-3 hover:bg-neutral-200 xl:hidden"
          on:click={() => {
            searchOpened = false
          }}
        >
          <X class="h-7 w-7" />
        </button>
      </div>
      <div class="flex gap-2 rounded-xl bg-neutral-100 px-3 py-2">
        <Search class="h-7 w-7 text-neutral-500" />
        <input
          type="text"
          class="w-full bg-transparent focus:outline-none"
          placeholder="도구 검색"
        />
      </div>
      <ul class="grid grid-cols-2 gap-3 @md:grid-cols-3 @lg:grid-cols-4">
        {#each tools as tool}
          <li>
            <ToolItem href={tool.href} color={tool.color} title={tool.name} icon={tool.icon} />
          </li>
        {/each}
      </ul>
    </aside>
  </div>
</div>

<style lang="postcss">
  .mobileSearchOpened {
    @apply absolute left-0 top-0 z-10 m-0 flex h-full w-full max-w-none rounded-none p-3 pt-10 sm:p-8 sm:pt-10
      md:inset-0 md:m-auto md:h-2/3 md:max-h-[45rem] md:w-[40rem] md:rounded-xl lg:h-[50rem] lg:w-[50rem];
  }
</style>
