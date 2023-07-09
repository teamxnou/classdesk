<script lang="ts">
  import { slide } from 'svelte/transition'

  import Mic from '~icons/lucide/Mic'
  import AlertCircle from '~icons/lucide/AlertCircle'
  import Settings2 from '~icons/lucide/Settings-2'

  import { settings } from '../stores/stores'

  let p = 0
  $: color = p < 40 ? '#22c55e' : p < 70 ? '#fde047' : '#ef4444'

  let audioError = false
  let meterOn = false
  let loudCount = 0
  let prevCounted = false
  let loudDuration = 0

  let sensSetting = false
  let sensitivity = $settings.volumeMeterSensitivity
  function runMeter() {
    navigator.mediaDevices
      .getUserMedia({ audio: true })
      .then((stream) => {
        const audioCtx = new AudioContext()
        const analyser = audioCtx.createAnalyser()
        const source = audioCtx.createMediaStreamSource(stream)
        source.connect(analyser)
        analyser.fftSize = 32
        const bufferLength = analyser.frequencyBinCount
        const dataArray = new Uint8Array(bufferLength)

        function draw() {
          analyser.getByteFrequencyData(dataArray)
          const avg = dataArray.reduce((a, b) => a + b, 0) / bufferLength
          p = Math.floor(avg / sensitivity)
          if (p > 90 && !prevCounted && loudDuration > 10) {
            loudCount++
            prevCounted = true
          } else if (p > 90 && !prevCounted) {
            loudDuration++
          } else if (p < 90) {
            prevCounted = false
            loudDuration = 0
          }
          if (meterOn) requestAnimationFrame(draw)
        }
        draw()
      })
      .catch(() => {
        audioError = true
      })
  }
</script>

<div class="absolute bottom-5 left-5 flex rounded-full bg-white">
  <button
    class="flex h-20 w-20 items-center justify-center rounded-full hover:bg-neutral-50 disabled:cursor-not-allowed disabled:bg-neutral-100 disabled:hover:bg-neutral-100"
    disabled={audioError}
    on:click={() => {
      meterOn = !meterOn
      if (meterOn) runMeter()
      else if (!meterOn) {
        requestAnimationFrame(() => {
          p = 0
          loudCount = 0
        })
      }
    }}
  >
    {#if audioError}
      <AlertCircle class="h-10 w-10" />
    {:else if meterOn}
      <span class="font-mono text-5xl">{loudCount}</span>
    {:else}
      <Mic class="h-10 w-10" />
    {/if}
  </button>
  {#if meterOn}
    <button
      class="flex h-20 w-20 items-center justify-center rounded-full hover:bg-neutral-50 disabled:cursor-not-allowed disabled:bg-neutral-100 disabled:hover:bg-neutral-100"
      transition:slide={{ axis: 'x' }}
      on:click={() => {
        sensSetting = !sensSetting
      }}
    >
      <Settings2 class="h-10 w-10" />
    </button>
  {/if}
</div>
<div
  class="flex h-20 w-full rounded-full bg-gradient-to-r from-green-100 via-yellow-100 to-red-100"
>
  <div
    class="min-w-[5rem] rounded-full transition duration-300"
    style="background: {color}; width: {p}%;"
  />
</div>

{#if sensSetting}
  <div
    class="absolute left-0 top-0 flex h-[calc(100vh-8rem)] w-screen flex-col items-center justify-around bg-white py-24"
    transition:slide={{ duration: 300 }}
  >
    <h1 class="text-9xl font-bold">소음 감도</h1>
    <div class="flex overflow-hidden rounded-full">
      {#each [1, 2, 3, 4, 5] as m}
        <button
          class="flex h-20 w-20 items-center justify-center bg-neutral-100 p-5 font-mono text-4xl hover:bg-neutral-200"
          class:bg-neutral-200={sensitivity == 6 - m}
          on:click={() => {
            sensitivity = 6 - m
            settings.set({ ...$settings, volumeMeterSensitivity: sensitivity })
          }}
        >
          {m}
        </button>
      {/each}
    </div>
  </div>
{/if}
