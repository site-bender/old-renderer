import { Component, Prop, h, JSX } from '@stencil/core'
import { ReelProps } from '../../../types/props'
import { ComponentRenderer } from '../../../renderers/ComponentRenderer'

@Component({
	tag: 'reel-bender',
	styleUrl: 'index.css',
})
export class Reel {
	/**
	 * A reel layout component
	 */
	@Prop() config: ReelProps

	render(): JSX.Element {
		const {
			childIds = [],
			componentId,
			gap = 0,
			height = 'auto',
			hideBar = false,
			itemWidth = '360px',
			style = {},
			thumbColor = 'red',
			trackColor = 'var(--color-light, white)',
		} = this.config

		return (
			<div
				class="reel-bender"
				id={componentId}
				style={{
					...style,
					'--reel-gap': `var(--s${gap})`,
					'--reel-height': height,
					'--reel-item-width': itemWidth,
					'--reel-scrollbar-display': hideBar ? 'none' : 'block',
					'--reel-thumb-color': thumbColor,
					'--reel-track-color': trackColor,
				}}
			>
				{childIds.map(id => (
					<ComponentRenderer componentId={id}></ComponentRenderer>
				))}
			</div>
		)
	}
}
