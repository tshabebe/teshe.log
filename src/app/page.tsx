import { ThemeToggle } from '@/components/theme.toggle'

export default function Home() {
  return (
    <div>
      <header className="flex px-2 py-2 lg:py-4 lg:container">
        <div className="ml-auto">
          <ThemeToggle />
        </div>
      </header>
      <section className="px-10 py-10 lg:container">
        <Hero />
      </section>
    </div>
  )
}

function Hero() {
  return (
    <div className="flex flex-col gap-2">
      <Avator />
      <p className="w-[33ch] font-[Caveat] text-xl/5">
        Building purposeful digital experiences with a touch of elegance and
        precision
      </p>
    </div>
  )
}

function Avator() {
  return (
    <div className="flex items-center gap-2">
      <span className="bg-elevation-4 p-1.5 rounded-full font-semibold">
        TS
      </span>
      <span className="font-">Teshome Abebe</span>
    </div>
  )
}
