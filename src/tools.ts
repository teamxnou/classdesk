import Timer from '~icons/lucide/Timer'
import Presentation from '~icons/lucide/Presentation'
import Dices from '~icons/lucide/Dices'
import User2 from '~icons/lucide/User-2'
import ArrowDown01 from '~icons/lucide/ArrowDown-0-1'
import ScrollText from '~icons/lucide/ScrollText'

interface Tool {
  icon: typeof import('svelte')['SvelteComponent']
  name: string
  href: string
  tags: string[]
  color: string
}

export const tools: Tool[] = [
  {
    icon: Timer,
    name: '타이머',
    href: '/tools/timer',
    tags: ['timer', '시간', '시계', '알람'],
    color: 'bg-neutral-800 text-white'
  },
  {
    icon: Presentation,
    name: '판서',
    href: '/tools/whiteboardtext',
    tags: ['글씨', '알림장', '메모장', '칠판', '화이트보드'],
    color: 'bg-blue-500 text-white'
  },
  {
    icon: Dices,
    name: '숫자 뽑기',
    href: '/tools/randint',
    tags: ['랜덤', '주사위', '번호 뽑기', '사람 뽑기', '학생 뽑기', '무작위'],
    color: 'bg-rose-500 text-white'
  },
  {
    icon: User2,
    name: '학생 뽑기',
    href: '/tools/randname',
    tags: ['랜덤', '이름 뽑기', '사람 뽑기', '학생 뽑기', '무작위'],
    color: 'bg-green-500 text-white'
  },
  {
    icon: ArrowDown01,
    name: '순서 뽑기',
    href: '/tools/randorder',
    tags: ['랜덤', '순서 뽑기', '모둠 뽑기', '모둠 순서', '무작위'],
    color: 'bg-yellow-400'
  },
  {
    icon: ScrollText,
    name: '학생 기록',
    href: '/tools/stlog',
    tags: ['누가기록', '행동특성', '생활기록부', '생기부', '학생 특징'],
    color: 'bg-neutral-300'
  },

]
