import { FunctionalComponent, h } from '@stencil/core'
import type { DefinedTermProps } from '../../../../types/props'
import getItemPropAttributes from '../../../../utilities/getItemPropAttributes'
import getRel from '../../../../utilities/getRel'

/*
	DefinedTerm is  is used to indicate the TERM being defined within the context
	of a definition phrase or sentence, not the definition itself.

	Parent is typically a Paragraph, a DefinitionList, or a Section, which
	contains the full definition.

	If the content is an Abbreviation, then the `expansion` of the abbreviation
	is the term being defined.

	Implicit  role is `term`.

	Accepts phrasing content, but not another DefinedTerm.
*/
export const DefinedTerm: FunctionalComponent<DefinedTermProps> = ({
	abbreviation,
	anchorStyle,
	autoCapitalize,
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
	term,
	...config
}) => {
	const itemprops = getItemPropAttributes(config)

	const output = abbreviation ? <abbr title={term}>{abbreviation}</abbr> : term

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
			<dfn
				autocapitalize={autoCapitalize}
				class="defined-term-bender"
				contentEditable={contentEditable}
				dir={dir}
				enterkeyhint={enterKeyHint}
				inputMode={inputMode}
				lang={lang}
				spellcheck={spellCheck}
				style={style}
			>
				{output}
			</dfn>
		</a>
	) : (
		<dfn
			autocapitalize={autoCapitalize}
			class="defined-term-bender"
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
		>
			{output}
		</dfn>
	)
}
