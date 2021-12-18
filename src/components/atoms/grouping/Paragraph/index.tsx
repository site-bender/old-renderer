import { FunctionalComponent, h } from '@stencil/core'
import injectComponentsIntoContent from '../../../../renderers/utilities/injectComponentsIntoContent'
import type { ParagraphProps } from '../../../../types/props'
import getItemPropAttributes from '../../../../utilities/getItemPropAttributes'

/*
	Paragraph represents a paragraph of text, independent of its styled presentation.

	This is a block-level component.

	Accepts phrasing content.
*/
export const Paragraph: FunctionalComponent<ParagraphProps> = ({
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
		<p
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
		</p>
	)
}
