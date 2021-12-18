import { Component, Prop, h, JSX } from '@stencil/core'
import type { CenterProps } from '../../../types/props'
import { ComponentRenderer } from '../../../renderers/ComponentRenderer'

@Component({
	tag: 'center-bender',
	styleUrl: 'index.css',
})
export class Center {
	/**
	 * A center layout component
	 */
	@Prop() config: CenterProps

	render(): JSX.Element {
		const { childIds, componentId, gutter = 0, style = {} } = this.config

		return (
			<div
				class="center-bender"
				id={componentId}
				style={{
					...style,
					'--center-gutter': `var(--s${gutter})`,
				}}
			>
				{childIds.map(componentId => (
					<ComponentRenderer componentId={componentId}></ComponentRenderer>
				))}
			</div>
		)
	}
}
