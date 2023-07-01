<script lang="ts">
  import Logo from '../components/Logo.svelte'
  import FavItem from '../components/FavItem.svelte'
  import ToolItem from '../components/ToolItem.svelte'
  import SideSearch from '../components/SideSearch.svelte'

  import Search from '~icons/lucide/Search'
  import Star from '~icons/lucide/Star'
  import History from '~icons/lucide/History'

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
    <SideSearch bind:searchOpened={searchOpened} />
  </div>
</div>
