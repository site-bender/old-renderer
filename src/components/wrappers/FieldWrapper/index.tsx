import { Component, Prop, h, JSX, Host } from '@stencil/core'
import type { LabelPosition } from '../../../types/props'

@Component({
	tag: 'field-wrapper-bender',
})
export class FieldWrapper {
	/**
	 * A wrapper around a form field
	 */
	@Prop() helpVariant: LabelPosition
	@Prop() componentId!: string
	@Prop() labelId: string
	@Prop() label: string
	@Prop() message: string
	@Prop() variant: LabelPosition

	render(): JSX.Element {
		return (
			<Host>
				{this.variant === 'above' || this.variant === 'before' ? (
					<label-sb
						labelledId={this.componentId}
						label={this.label}
						variant={this.variant}
					/>
				) : undefined}
				{this.helpVariant === 'above' || this.helpVariant === 'before' ? (
					<help-message-sb
						labelledBy={this.componentId}
						message={this.message}
						variant={this.variant}
					/>
				) : undefined}
				<slot></slot>
				{this.helpVariant === 'after' || this.helpVariant === 'below' ? (
					<help-message-sb
						labelledBy={this.componentId}
						message={this.message}
						variant={this.variant}
					/>
				) : undefined}
				{this.variant === 'after' || this.variant === 'below' ? (
					<label-sb
						labelledId={this.componentId}
						label={this.label}
						variant={this.variant}
					/>
				) : undefined}
			</Host>
		)
	}
}
