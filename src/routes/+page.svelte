<script lang="ts">
  import Logo from '../components/Logo.svelte'
  import ToolItem from '../components/ToolItem.svelte'

  import Search from '~icons/lucide/Search'
  import Star from '~icons/lucide/Star'
  import History from '~icons/lucide/History'
  import Timer from '~icons/lucide/Timer'
  import Presentation from '~icons/lucide/Presentation'
  import Dices from '~icons/lucide/Dices'
  import UserCircle2 from '~icons/lucide/UserCircle-2'
  import ArrowDown01 from '~icons/lucide/ArrowDown-0-1'
  import LayoutList from '~icons/lucide/LayoutList'
  import Shuffle from '~icons/lucide/Shuffle'
  import X from '~icons/lucide/X'

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
            <li>
              <a href="/" class="bg-neutral-800 text-white">
                <Timer class="h-8 w-8" />
                <h2 class="text-lg">타이머</h2>
              </a>
            </li>
            <li>
              <a href="/" class="bg-blue-500 text-white">
                <Presentation class="h-8 w-8" />
                <h2 class="text-lg">판서</h2>
              </a>
            </li>
            <li>
              <a href="/" class="bg-rose-500 text-white">
                <Dices class="h-8 w-8" />
                <h2 class="text-lg">숫자 뽑기</h2>
              </a>
            </li>
            <li>
              <a href="/" class="bg-green-500 text-white">
                <UserCircle2 class="h-8 w-8" />
                <h2 class="text-lg">학생 뽑기</h2>
              </a>
            </li>
            <li>
              <a href="/" class="bg-yellow-400">
                <ArrowDown01 class="h-8 w-8" />
                <h2 class="text-lg">순서 뽑기</h2>
              </a>
            </li>
            <li>
              <a href="/" class="bg-neutral-300">
                <LayoutList class="h-8 w-8" />
                <h2 class="text-lg">학생 기록</h2>
              </a>
            </li>
            <li>
              <a href="/" class="bg-violet-300">
                <Shuffle class="h-8 w-8" />
                <h2 class="text-lg">자리 뽑기</h2>
              </a>
            </li>
          </ul>
        </section>
        <section class="@container">
          <h2 class="mb-2 flex items-center gap-1 text-lg font-medium text-neutral-500">
            <History class="h-6 w-6" />
            최근 사용
          </h2>
          <ul class="big-items grid-cols-2 @xl:grid-cols-3 @2xl:grid-cols-5">
            <li>
              <ToolItem href="/" color="bg-rose-500 text-white" title="숫자 뽑기" icon={Dices} />
            </li>
            <li>
              <ToolItem href="/" color="bg-violet-300" title="자리 뽑기" icon={Shuffle} />
            </li>
            <li>
              <ToolItem href="/" color="bg-blue-500 text-white" title="판서" icon={Presentation} />
            </li>
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
      <ul class="big-items grid-cols-2 @md:grid-cols-3 @lg:grid-cols-4">
        <li>
          <ToolItem href="/" color="bg-rose-500 text-white" icon={Dices} title="숫자 뽑기" />
        </li>
        <li>
          <ToolItem href="/" color="bg-violet-300" icon={Shuffle} title="자리 뽑기" />
        </li>
        <li>
          <ToolItem href="/" color="bg-blue-500 text-white" icon={Presentation} title="판서" />
        </li>
      </ul>
    </aside>
  </div>
</div>

<style lang="postcss">
  #favorite ul li a {
    @apply flex items-center gap-2 rounded-xl px-3 py-2
      transition duration-150 hover:-translate-y-1 lg:h-20 lg:w-24 lg:flex-col lg:justify-between
      lg:gap-0 lg:pb-2 lg:pt-3;
  }
  ul.big-items {
    @apply grid gap-3;
  }
  .mobileSearchOpened {
    @apply absolute left-0 top-0 z-10 m-0 flex h-full w-full max-w-none rounded-none p-3 pt-10 sm:p-8 sm:pt-10
      md:inset-0 md:m-auto md:h-2/3 md:max-h-[45rem] md:w-[40rem] md:rounded-xl lg:h-[50rem] lg:w-[50rem];
  }
</style>
