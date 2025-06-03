'use client'

import {
  Button as RACButton,
  ButtonProps as RACButtonProps,
} from 'react-aria-components'

export function Button(props: RACButtonProps) {
  return <RACButton {...props} className={props.className} />
}
