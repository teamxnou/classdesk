<script lang="ts">
  import Logo from '../components/Logo.svelte'

  import {
    Star,
    History,
    Timer,
    Presentation,
    Dices,
    UserCircle2,
    ArrowDown01,
    LayoutList,
    Shuffle,
  } from 'lucide-svelte'
</script>

<div class="flex h-screen w-screen justify-center bg-neutral-100">
  <div class="container mx-3 mt-10 flex max-w-4xl flex-col sm:mx-8 lg:mx-10 xl:mx-10">
    <header>
      <Logo />
    </header>
    <main class="mt-5 flex flex-col gap-3">
      <section id="favorite">
        <h2 class="mb-2 flex items-center gap-1 text-lg font-medium text-neutral-500">
          <Star class="h-6 w-6" absoluteStrokeWidth={true} />
          즐겨찾기
        </h2>
        <ul class="flex w-full flex-wrap gap-3">
          <li>
            <a href="/" class="bg-neutral-800 text-white">
              <Timer class="h-8 w-8" absoluteStrokeWidth={true} />
              <h2 class="text-lg">타이머</h2>
            </a>
          </li>
          <li>
            <a href="/" class="bg-blue-500 text-white">
              <Presentation class="h-8 w-8" absoluteStrokeWidth={true} />
              <h2 class="text-lg">판서</h2>
            </a>
          </li>
          <li>
            <a href="/" class="bg-rose-500 text-white">
              <Dices class="h-8 w-8" absoluteStrokeWidth={true} />
              <h2 class="text-lg">숫자 뽑기</h2>
            </a>
          </li>
          <li>
            <a href="/" class="bg-green-500 text-white">
              <UserCircle2 class="h-8 w-8" absoluteStrokeWidth={true} />
              <h2 class="text-lg">학생 뽑기</h2>
            </a>
          </li>
          <li>
            <a href="/" class="bg-yellow-400">
              <ArrowDown01 class="h-8 w-8" absoluteStrokeWidth={true} />
              <h2 class="text-lg">순서 뽑기</h2>
            </a>
          </li>
          <li>
            <a href="/" class="bg-neutral-300">
              <LayoutList class="h-8 w-8" absoluteStrokeWidth={true} />
              <h2 class="text-lg">학생 기록</h2>
            </a>
          </li>
          <li>
            <a href="/" class="bg-violet-300">
              <Shuffle class="h-8 w-8" absoluteStrokeWidth={true} />
              <h2 class="text-lg">자리 뽑기</h2>
            </a>
          </li>
        </ul>
      </section>
      <section id="recent">
        <h2 class="mb-2 flex items-center gap-1 text-lg font-medium text-neutral-500">
          <History class="h-6 w-6" absoluteStrokeWidth={true} />
          최근 사용
        </h2>
        <ul class="flex w-full flex-wrap gap-3">
          <li>
            <a
              href="/"
              class="bg-rose-500 text-white"
            >
              <Dices class="h-8 w-8" absoluteStrokeWidth={true} />
              <h2 class="text-lg">숫자 뽑기</h2>
            </a>
          </li>
          <li>
            <a
              href="/"
              class="bg-violet-300"
            >
              <Shuffle class="h-8 w-8" absoluteStrokeWidth={true} />
              <h2 class="text-lg">자리 뽑기</h2>
            </a>
          </li>
          <li>
            <a href="/" class="bg-blue-500 text-white">
              <Presentation class="h-8 w-8" absoluteStrokeWidth={true} />
              <h2 class="text-lg">판서</h2>
            </a>
          </li>
        </ul>
      </section>
    </main>
  </div>
</div>

<style lang="postcss">
  #favorite ul li a {
    @apply flex items-center gap-2 rounded-xl px-3 py-2
      transition duration-150 hover:-translate-y-1 lg:h-20 lg:w-24 lg:flex-col lg:justify-between
      lg:gap-0 lg:pb-2 lg:pt-3;
  }
  #recent ul li a {
    @apply flex h-24 w-36 flex-col justify-between rounded-xl p-3 pb-2 transition duration-150 hover:-translate-y-1;
  }
</style>
