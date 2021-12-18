import { Component, Prop, h, JSX } from '@stencil/core'

@Component({
	tag: 'text-field-bender',
})
export class TextField {
	/**
	 * A text input element
	 */
	@Prop() defaultValue: string
	@Prop() componentId!: string
	@Prop() label: string
	@Prop() labelledBy: string
	@Prop() message: string
	@Prop() name!: string

	render(): JSX.Element {
		return (
			<field-wrapper-sb
				helpVariant="below"
				componentId={this.componentId}
				label={this.label}
				labelId={this.labelledBy}
				message={this.message}
				variant="above"
			>
				<text-input-sb
					defaultValue={this.defaultValue}
					componentId={this.componentId}
					labelledBy={this.labelledBy}
					name={this.name}
				></text-input-sb>
			</field-wrapper-sb>
		)
	}
}
