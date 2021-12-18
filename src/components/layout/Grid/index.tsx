import { Component, Prop, h, JSX } from '@stencil/core'
import type { GridProps } from '../../../types/props'
import { ComponentRenderer } from '../../../renderers/ComponentRenderer'

@Component({
	tag: 'grid-bender',
	styleUrl: 'index.css',
})
export class Grid {
	/**
	 * A grid layout component
	 */
	@Prop() config: GridProps

	render(): JSX.Element {
		const {
			childIds,
			componentId,
			gap = 1,
			minItemWidth = '250px',
			style = {},
		} = this.config

		return (
			<div
				class="grid-bender"
				id={componentId}
				style={{
					...style,
					'--grid-gap': `var(--s${gap})`,
					'--grid-cell-width': minItemWidth,
				}}
			>
				{childIds.map(componentId => (
					<ComponentRenderer componentId={componentId}></ComponentRenderer>
				))}
			</div>
		)
	}
}
