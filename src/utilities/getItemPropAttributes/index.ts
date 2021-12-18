import type { ItemPropAttributes } from '../../types/props'

export default function getItemPropAttributes(
	itemprops: ItemPropAttributes,
): ItemPropAttributes {
	return {
		itemId: itemprops.itemId,
		itemProp: itemprops.itemProp,
		itemRef: itemprops.itemRef,
		itemScope: Boolean(itemprops.itemType),
		itemType: itemprops.itemType,
	}
}
