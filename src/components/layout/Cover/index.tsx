import { Component, Prop, h, JSX } from '@stencil/core'
import type { CoverProps } from '../../../types/props'
import { ComponentRenderer } from '../../../renderers/ComponentRenderer'

@Component({
	tag: 'cover-bender',
	styleUrl: 'index.css',
})
export class Cover {
	/**
	 * A cover layout component
	 */
	@Prop() config: CoverProps

	render(): JSX.Element {
		const {
			childIds,
			componentId,
			inset = '2rem',
			minHeight = '100vh',
			padding = 0,
			style = {},
		} = this.config

		return (
			<div
				class="cover-bender"
				id={componentId}
				style={{
					...style,
					'--cover-padding': `var(--s${padding})`,
					'--cover-inset': inset,
					'--cover-min-height': minHeight,
				}}
			>
				{childIds.map(componentId => (
					<ComponentRenderer componentId={componentId}></ComponentRenderer>
				))}
			</div>
		)
	}
}
