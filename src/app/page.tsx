import { ThemeToggle } from '@/components/theme.toggle'
import { Github, Linkedin, MoveRight, Send, Twitter } from 'lucide-react'

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
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-2">
      <Avator />
      <p className="w-[33ch] font-[Caveat] text-xl/5">
        Building purposeful digital experiences with a touch of elegance and
        precision
      </p>
      <button
        className="inline-flex bg-[var(--portfolio-card)] self-start items-center gap-2 px-6 py-1.5 rounded-full shadow-lg transform -rotate-2 hover:rotate-0 transition-all"
      >
        <span
          className="font-[Caveat] text-lg"
        >
          more
        </span>
        <MoveRight
          className="w-6 h-6"
        />
      </button>
      </div>
      <SocialLinks />
    </div>
  )
}

function CardCatagory() {
  return ""
}

function SocialLinks() {
  return <div className="flex items-center gap-2 mb-3">
    <Github
      className="w-6 h-6 text-[var(--portfolio-icon)]"
    />
    <Linkedin
      className="w-6 h-6 text-[var(--portfolio-icon)]"
    />
    <Twitter
      className="w-6 h-6 text-[var(--portfolio-icon)]"
    />
    <Send
      className="w-6 h-6 text-[var(--portfolio-icon)]"
    />
  </div>
}

function Avator() {
  return (
    <div className="flex items-center gap-2">
      <span className="bg-[var(--portfolio-avatar)] p-1.5 rounded-full font-semibold">
        TS
      </span>
      <span className="font-">Teshome Abebe</span>
    </div>
  )
}
