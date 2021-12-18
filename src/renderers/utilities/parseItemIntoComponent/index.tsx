import { JSX, h } from '@stencil/core'
import { ComponentRenderer } from '../../ComponentRenderer'

export default function parseItemIntoComponent(item: string): JSX.Element {
	const [, id] = item.match(/^<item id="([0-9A-Za-z_-]{21})"/)

	return id ? <ComponentRenderer componentId={id} /> : item
}
