import { Component, Prop, h, JSX } from '@stencil/core'
import type { ClusterProps } from '../../../types/props'
import { ComponentRenderer } from '../../../renderers/ComponentRenderer'

@Component({
	tag: 'cluster-bender',
	styleUrl: 'index.css',
})
export class Cluster {
	/**
	 * A cluster layout component
	 */
	@Prop() config: ClusterProps

	render(): JSX.Element {
		const {
			align = 'center',
			childIds,
			componentId,
			gap = '1rem',
			justify = 'flex-start',
			style = {},
		} = this.config

		return (
			<div
				class="cluster-bender"
				id={componentId}
				style={{
					...style,
					'--cluster-align': align,
					'--cluster-gap': `var(--s${gap})`,
					'--cluster-justify': justify,
				}}
			>
				{childIds.map(componentId => (
					<ComponentRenderer componentId={componentId}></ComponentRenderer>
				))}
			</div>
		)
	}
}
