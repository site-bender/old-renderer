import type { JSX } from '@stencil/core'
import parseItemIntoComponent from '../parseItemIntoComponent'

export default function injectComponentsIntoContent(
	content = '',
): Array<string | JSX.Element> {
	const parts = content.split(/(<item id="[0-9A-Za-z_-]{21}">[^<]*<\/item>)/)

	return parts.map(part =>
		part.slice(0, 8) === '<item id' ? parseItemIntoComponent(part) : part,
	)
}
