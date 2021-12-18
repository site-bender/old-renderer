import { FunctionalComponent, h } from '@stencil/core'
import type { AbbreviationProps } from '../../../../types/props'
import getItemPropAttributes from '../../../../utilities/getItemPropAttributes'
import getRel from '../../../../utilities/getRel'

/*
	Abbreviation represents an abbreviation or acronym; the optional title
	attribute can provide an expansion or description for the abbreviation.

	The title attribute has a specific semantic meaning when used with the
	Abbreviation; it must contain a full human-readable description or expansion
	of the abbreviation. This text is often presented by browsers as a tooltip
	when the mouse cursor is hovered over the element.

	When an abbreviation is used and you want to provide an expansion or
	definition outside the flow of the document's content, use Abbreviation with
	an appropriate title.

	To define an abbreviation which may be unfamiliar to the reader, present the
	term using Abbreviation and either a title attribute or inline text providing
	the definition.

	When an abbreviation's presence in the text needs to be semantically noted,
	the Abbreviation element is useful. This can be used, in turn, for styling
	or scripting purposes.

	SEE ALSO: DefinedTerm.

	In languages with grammatical number (that is, languages where the number
	of items affects the grammar of a sentence), use the same grammatical
	number in your title attribute as inside your Abbreviation. This is
	especially important in languages with more than two numbers, such as
	Arabic, but is also relevant in English.

	Accepts phrasing content.
*/
export const Abbreviation: FunctionalComponent<AbbreviationProps> = ({
	anchorStyle,
	children,
	componentId,
	contentEditable,
	dir,
	draggable,
	enterKeyHint,
	expansion,
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
			referrerPolicy={referrerPolicy}
			rel={getRel(rel)}
			role={role}
			style={anchorStyle}
			tabIndex={tabIndex || 0}
			target={target}
		>
			<abbr
				contenteditable={contentEditable}
				dir={dir}
				draggable={draggable}
				enterkeyhint={enterKeyHint}
				hidden={hidden}
				inputmode={inputMode}
				{...itemprops}
				lang={lang}
				spellcheck={spellCheck}
				style={style}
				title={expansion}
			>
				{children}
			</abbr>
		</a>
	) : (
		<abbr
			contenteditable={contentEditable}
			dir={dir}
			draggable={draggable}
			enterkeyhint={enterKeyHint}
			hidden={hidden}
			id={componentId}
			inputmode={inputMode}
			{...itemprops}
			lang={lang}
			role={role}
			spellcheck={spellCheck}
			style={style}
			title={expansion}
		>
			{children}
		</abbr>
	)
}
