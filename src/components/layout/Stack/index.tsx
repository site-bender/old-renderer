import { Component, Prop, h, JSX } from '@stencil/core'
import type { StackProps } from '../../../types/props'
import { ComponentRenderer } from '../../../renderers/ComponentRenderer'

@Component({
	tag: 'stack-bender',
	styleUrl: 'index.css',
})
export class Stack {
	/**
	 * A stack layout component
	 */
	@Prop() config: StackProps

	render(): JSX.Element {
		const {
			childIds,
			componentId,
			gap = 0,
			nest,
			splitAt,
			style = {},
		} = this.config

		const classes = [
			'stack-bender',
			...(nest ? ['nested'] : []),
			...(splitAt ? ['split'] : []),
		]

		return (
			<div
				class={classes.join(' ')}
				id={componentId}
				style={{
					...style,
					'--stack-gap': `var(--s${gap})`,
					'--stack-split-index': splitAt ? `${splitAt}` : undefined,
				}}
			>
				{childIds.map(componentId => (
					<ComponentRenderer componentId={componentId}></ComponentRenderer>
				))}
			</div>
		)
	}
}
