import { FunctionalComponent, h } from '@stencil/core'

type RuleProps = {
	role?: 'separator' | 'presentation' | 'none'
	style?: { [key: string]: string }
}

export const Rule: FunctionalComponent<RuleProps> = ({ role, style }) => (
	<hr role={role} style={style} />
)
