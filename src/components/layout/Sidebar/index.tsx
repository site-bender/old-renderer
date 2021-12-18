import { Component, Prop, h, JSX } from '@stencil/core'
import type { SidebarProps } from '../../../types/props'
import { ComponentRenderer } from '../../../renderers/ComponentRenderer'

@Component({
	tag: 'sidebar-bender',
	styleUrl: 'index.css',
})
export class Sidebar {
	/**
	 * A sidebar layout component
	 */
	@Prop() config: SidebarProps

	render(): JSX.Element {
		const {
			childIds,
			componentId,
			gutter = 3,
			minWidth = '30%',
			noStretch = false,
			onRight = false,
			sideWidth,
			style = {},
		} = this.config

		const classes = [
			'has-sidebar-bender',
			...(onRight ? ['right'] : ['left']),
			...(noStretch ? ['no-stretch'] : []),
			...(sideWidth ? ['side-width'] : []),
		]

		return (
			<div
				class={classes.join(' ')}
				id={componentId}
				style={{
					...style,
					'--sidebar-gutter': `var(--s${gutter})`,
					'--sidebar-min-width': minWidth,
					'--sidebar-side-width': sideWidth,
				}}
			>
				{childIds.map(componentId => (
					<ComponentRenderer componentId={componentId}></ComponentRenderer>
				))}
			</div>
		)
	}
}
