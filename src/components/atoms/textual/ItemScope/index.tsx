import { FunctionalComponent, h } from '@stencil/core'
import type { ItemScopeProps } from '../../../../types/props'
import injectComponentsIntoContent from '../../../../renderers/utilities/injectComponentsIntoContent'
import { ComponentRenderer } from '../../../../renderers/ComponentRenderer'

export const ItemScope: FunctionalComponent<
	ItemScopeProps & { state: unknown }
> = ({ childIds = [], children, componentId, itemId, itemRef, itemType }) => {
	return childIds.length ? (
		<div
			id={componentId}
			itemscope
			itemid={itemId}
			itemref={itemRef}
			itemtype={itemType}
		>
			{childIds.map(id => (
				<ComponentRenderer componentId={id}></ComponentRenderer>
			))}
		</div>
	) : (
		<span
			id={componentId}
			itemscope
			itemid={itemId}
			itemref={itemRef}
			itemtype={itemType}
		>
			{injectComponentsIntoContent(children)}
		</span>
	)
}
