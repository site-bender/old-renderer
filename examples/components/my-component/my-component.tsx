import { Component, Prop } from '@stencil/core'
import { format } from '../../utilities/example/utils'

@Component({
	tag: 'my-component',
	styleUrl: 'my-component.css',
	shadow: true,
})
export class MyComponent {
	/**
	 * The first name
	 */
	@Prop() first: string

	/**
	 * The middle name
	 */
	@Prop() middle: string

	/**
	 * The last name
	 */
	@Prop() last: string
	å
	private getText(): string {
		return format(this.first, this.middle, this.last)
	}

	render() {
		return <div>Hello, World! I'm {this.getText()}</div>
	}
}
