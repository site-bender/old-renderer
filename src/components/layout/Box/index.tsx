import { Component, Prop, h, JSX } from '@stencil/core'
import type { BoxProps } from '../../../types/props'
import { ComponentRenderer } from '../../../renderers/ComponentRenderer'

@Component({
	tag: 'box-bender',
	styleUrl: 'index.css',
})
export class Reel {
	/**
	 * A box layout component
	 */
	@Prop() config: BoxProps

	render(): JSX.Element {
		const { invert, componentId, style, childIds } = this.config
		const classes = ['box-bender', ...(invert ? ['invert-sb'] : [])]

		return (
			<div class={classes.join(' ')} id={componentId} style={style}>
				{childIds.map(componentId => (
					<ComponentRenderer componentId={componentId}></ComponentRenderer>
				))}
			</div>
		)
	}
}
