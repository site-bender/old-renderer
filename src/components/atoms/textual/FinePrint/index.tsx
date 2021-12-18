import { FunctionalComponent, h } from '@stencil/core'
import injectComponentsIntoContent from '../../../../renderers/utilities/injectComponentsIntoContent'
import type { FinePrintProps } from '../../../../types/props'
import getItemPropAttributes from '../../../../utilities/getItemPropAttributes'

/*
	FinePrint represents side-comments and small print, like copyright and legal
	text, independent of its styled presentation.

	This is a block-level component.

	Accepts phrasing content.
*/
export const FinePrint: FunctionalComponent<FinePrintProps> = ({
	autoCapitalize,
	children,
	componentId,
	contentEditable,
	dir,
	draggable,
	enterKeyHint,
	hidden,
	inputMode,
	lang,
	role,
	spellCheck,
	style,
	tabIndex,
	title,
	...config
}) => {
	const itemprops = getItemPropAttributes(config)

	return (
		<small
			autocapitalize={autoCapitalize}
			class="fine-print-bender"
			contentEditable={contentEditable}
			dir={dir}
			draggable={draggable}
			enterkeyhint={enterKeyHint}
			hidden={hidden}
			id={componentId}
			inputMode={inputMode}
			{...itemprops}
			lang={lang}
			role={role}
			spellcheck={spellCheck}
			style={style}
			tabIndex={tabIndex}
			title={title}
		>
			{injectComponentsIntoContent(children)}
		</small>
	)
}
