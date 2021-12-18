import { Component, Prop, h, JSX } from '@stencil/core'
import type { TopperProps } from '../../../types/props'
import { ComponentRenderer } from '../../../renderers/ComponentRenderer'

@Component({
	tag: 'topper-bender',
	styleUrl: 'index.css',
})
export class Topper {
	/**
	 * A topper layout component
	 */
	@Prop() config: TopperProps

	render(): JSX.Element {
		const { childIds, componentId, margin = 0, style = {} } = this.config

		return (
			<div
				class="topper-bender"
				id={componentId}
				style={{
					...style,
					'--topper-margin': `var(--s${margin})`,
				}}
			>
				{childIds.map(componentId => (
					<ComponentRenderer componentId={componentId}></ComponentRenderer>
				))}
			</div>
		)
	}
}
