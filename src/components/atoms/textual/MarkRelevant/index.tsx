import { FunctionalComponent, h } from '@stencil/core'
import getItemPropAttributes from '../../../../../examples/utilities/getItemPropAttributes'
import getRel from '../../../../../examples/utilities/getRel'
import injectComponentsIntoContent from '../../../../renderers/utilities/injectComponentsIntoContent'
import type { MarkRelevantProps } from '../../../../types/props'

/*
	When used in a quotation (<q>) or block quote (<blockquote>), it generally
	indicates text which is of special interest but is not marked in the
	original source material, or material which needs special scrutiny even
	though the original author didn't think it was of particular importance.
	Think of this like using a highlighter pen in a book to mark passages that
	you find of interest.

	Otherwise, <mark> indicates a portion of the document's content which is
	likely to be relevant to the user's current activity. This might be used,
	for example, to indicate the words that matched a search operation.

	Don't use <mark> for syntax highlighting purposes; instead, use the
	<span> element with appropriate CSS applied to it.

	NOTE: Don't confuse <mark> with the <strong> element; <mark> is used to
	denote content which has a degree of relevance, while <strong> indicates
	spans of text of importance.

	Accepts phrasing content.
*/
export const MarkRelevant: FunctionalComponent<MarkRelevantProps> = ({
	anchorStyle,
	autoCapitalize,
	children,
	componentId,
	contentEditable,
	dir,
	draggable,
	enterKeyHint,
	hidden,
	href,
	hrefLang,
	inputMode,
	lang,
	referrerPolicy,
	rel,
	role,
	spellCheck,
	style,
	tabIndex,
	target,
	title,
	...config
}) => {
	const itemprops = getItemPropAttributes(config)

	return href ? (
		<a
			class="anchor-bender"
			draggable={draggable}
			hidden={hidden}
			href={href}
			hreflang={hrefLang}
			id={componentId}
			{...itemprops}
			referrerPolicy={referrerPolicy}
			rel={getRel(rel)}
			role={role}
			style={anchorStyle}
			tabIndex={tabIndex || 0}
			target={target}
		>
			<mark
				autocapitalize={autoCapitalize}
				class="mark-relevant-bender"
				contentEditable={contentEditable}
				dir={dir}
				enterkeyhint={enterKeyHint}
				inputMode={inputMode}
				lang={lang}
				spellcheck={spellCheck}
				style={style}
				title={title}
			>
				{injectComponentsIntoContent(children)}
			</mark>
		</a>
	) : (
		<mark
			autocapitalize={autoCapitalize}
			class="mark-relevant-bender"
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
		</mark>
	)
}
