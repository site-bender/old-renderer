import { Component, Prop, h, JSX } from '@stencil/core'
import type { LabelPosition } from '../../../../types/props'

@Component({
	tag: 'label-bender',
})
export class Label {
	/**
	 * A label for an element
	 */
	@Prop() labelledId: string
	@Prop() label: string
	@Prop() variant: LabelPosition

	render(): JSX.Element {
		return (
			<label htmlFor={this.labelledId} class={this.variant}>
				{this.label}
			</label>
		)
	}
}
