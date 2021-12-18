import { Component, Prop, h, JSX, State } from '@stencil/core'

@Component({
	tag: 'text-input-bender',
})
export class TextInput {
	/**
	 * A text input element
	 */
	@Prop() defaultValue: string
	@Prop() componentId!: string
	@Prop() labelledBy: string
	@Prop() name!: string
	@State() value = ''

	componentWillLoad(): void {
		this.value = this.defaultValue
	}

	render(): JSX.Element {
		return (
			<input
				aria-labelledby={this.labelledBy}
				id={this.componentId}
				name={this.name}
				type="text"
				value={this.value}
			/>
		)
	}
}
