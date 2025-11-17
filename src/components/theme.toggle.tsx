'use client'
import { Icon } from '@/primitives/icon'
import { useTheme } from 'next-themes'
import { useId } from 'react'
import { Switch } from 'react-aria-components'

export function ThemeToggle() {
  const id = useId()
  const { theme, setTheme } = useTheme()
  const isDark = theme === 'dark'

  const toggleTheme = () => {
    setTheme(isDark ? 'light' : 'dark')
  }

  return (
    <Switch
      id={id}
      isSelected={isDark}
      onChange={toggleTheme}
      aria-labelledby={`${id}-off ${id}-on`}
      className="group inline-flex gap-4 bg-[var(--portfolio-card)] transition duration-400 ease-in-out shadow-lg/30 px-2 py-1 rounded-full -rotate-6 selected:rotate-6"
    >
      <Icon name="Sun" className="group-selected:text-[var(--portfolio-icon)]" />
      <Icon
        name="Moon"
        className="text-[var(--portfolio-icon)] group-selected:text-[var(--portfolio-text)]"
      />
    </Switch>
  )
}
