import { Component, Prop, h, JSX } from '@stencil/core'
import type { LabelPosition } from '../../../../types/props'

@Component({
	tag: 'help-message-bender',
})
export class HelpMessage {
	/**
	 * A help message for a form field
	 */
	@Prop() labelledBy: string
	@Prop() message: string
	@Prop() variant: LabelPosition

	render(): JSX.Element {
		return (
			<div aria-labelledby={this.labelledBy} class={this.variant}>
				{this.message}
			</div>
		)
	}
}
