<script lang="ts">
  import Play from '~icons/lucide/Play'
  import Pause from '~icons/lucide/Pause'
  import TimerReset from '~icons/lucide/TimerReset'
  import Mic from '~icons/lucide/Mic'

  let p = 0
  $: color = p < 50 ? '#22c55e' : p < 80 ? '#fde047' : '#ef4444'
</script>

<div class="flex h-screen w-screen flex-col gap-3 bg-neutral-100 p-5">
  <div class="border-b p-5 text-8xl font-bold">
    <input
      type="text"
      placeholder="제목을 입력하세요."
      class="placeholder:font-regular w-full bg-transparent text-center placeholder-neutral-400 focus:outline-none"
    />
  </div>
  <div class="flex grow items-center justify-center font-mono text-[17vw] font-extrabold">
    00:00:00
  </div>
  <div class="mb-10 flex items-center justify-around">
    <div class="flex gap-5">
      {#each [1, 3, 5, 10, 20, 30] as min}
        <button
          class="flex h-20 w-20 items-center justify-center rounded-full bg-neutral-200 p-5 font-mono text-4xl hover:bg-neutral-300"
        >
          {min}
        </button>
      {/each}
    </div>
    <div class="flex gap-5">
      <button
        class="flex h-20 w-52 items-center justify-center rounded-full bg-orange-500 p-5 text-white hover:bg-orange-600"
      >
        <Play class="h-10 w-10" />
      </button>
      <button class="flex h-20 items-center justify-center rounded-full bg-neutral-200 p-5 hover:bg-neutral-300">
        <TimerReset class="h-10 w-10" />
      </button>
    </div>
  </div>
  <button
    class="absolute bottom-5 left-5 flex h-20 w-20 items-center justify-center rounded-full bg-white hover:bg-neutral-50"
  >
    <Mic class="h-10 w-10" />
  </button>
  <div
    class="flex h-20 w-full rounded-full bg-gradient-to-r from-green-100 via-yellow-100 to-red-100"
  >
    <div class="rounded-full transition duration-1000" style="background: {color}; width: {p}%;" />
  </div>
</div>
