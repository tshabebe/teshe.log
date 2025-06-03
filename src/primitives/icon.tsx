import { icons } from 'lucide-react'

interface Props {
  name: keyof typeof icons
  color?: string
  size?: number
  strokeWidth?: number
  className?: string
}

export const Icon: React.FC<Props> = ({
  name,
  color,
  size,
  strokeWidth,
  className,
}) => {
  const LucideIcon = icons[name]

  return (
    <LucideIcon
      strokeWidth={strokeWidth}
      color={color}
      size={size ?? 20}
      className={className}
    />
  )
}

export type IconNames = keyof typeof icons
export const iconNames = Object.keys(icons) as IconNames[]
