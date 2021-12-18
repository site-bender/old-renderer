import { Component, Prop, h, JSX } from '@stencil/core'
import type { SwitcherProps } from '../../../types/props'
import { ComponentRenderer } from '../../../renderers/ComponentRenderer'

@Component({
	tag: 'switcher-bender',
	styleUrl: 'index.css',
})
export class Switcher {
	/**
	 * A switcher layout component
	 */
	@Prop() config: SwitcherProps

	render(): JSX.Element {
		const {
			childIds,
			componentId,
			gap = 0,
			rowLimit = 4,
			threshold = '30rem',
			style = {},
		} = this.config

		return (
			<div
				class="switcher-bender"
				id={componentId}
				style={{
					...style,
					'--switcher-gap': `var(--s${gap})`,
					'--switcher-row-limit': `${rowLimit}`,
					'--switcher-threshold': threshold,
				}}
			>
				{childIds.map(componentId => (
					<ComponentRenderer componentId={componentId}></ComponentRenderer>
				))}
			</div>
		)
	}
}
