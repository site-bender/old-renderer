import { FunctionalComponent, h } from '@stencil/core'
import type { ItemPropProps } from '../../../../types/props'
import injectComponentsIntoContent from '../../../../renderers/utilities/injectComponentsIntoContent'

export const ItemProp: FunctionalComponent<
	ItemPropProps & { state: unknown }
> = ({ children, componentId, itemId, itemRef }) => {
	return (
		<span id={componentId} itemscope itemid={itemId} itemref={itemRef}>
			{injectComponentsIntoContent(children)}
		</span>
	)
}
