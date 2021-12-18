import { Component, Prop, h, JSX } from '@stencil/core'
import type { FrameProps } from '../../../types/props'
import { ComponentRenderer } from '../../../renderers/ComponentRenderer'

@Component({
	tag: 'frame-bender',
	styleUrl: 'index.css',
})
export class Frame {
	/**
	 * A frame layout component
	 */
	@Prop() config: FrameProps

	render(): JSX.Element {
		const {
			childIds,
			componentId,
			relativeHeight = 9,
			relativeWidth = 16,
			style = {},
		} = this.config

		return (
			<div
				class="frame-bender"
				id={componentId}
				style={{
					...style,
					'--frame-relative-height': `${relativeHeight}`,
					'--frame-relative-width': `${relativeWidth}`,
				}}
			>
				{childIds.map(componentId => (
					<ComponentRenderer componentId={componentId}></ComponentRenderer>
				))}
			</div>
		)
	}
}
