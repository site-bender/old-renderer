import type { Validity } from './props'

export type TextFieldState = {
	error?: string
	isDirty: boolean
	isFocused: boolean
	isTouched: boolean
	validity: Validity
	value: string
}
