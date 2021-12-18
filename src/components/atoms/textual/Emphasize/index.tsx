import { FunctionalComponent, h } from '@stencil/core'
import getItemPropAttributes from '../../../../../examples/utilities/getItemPropAttributes'
import getRel from '../../../../../examples/utilities/getRel'
import injectComponentsIntoContent from '../../../../renderers/utilities/injectComponentsIntoContent'
import type { EmphasizeProps } from '../../../../types/props'

/*
	Used in weaker form to indicate an implicit or explicit contrast.

	Weaker form is typically italicized; stronger form is typically bolded. But
	this element should not be used to apply italic or bold text, but only for
	emphasis. That said, as italics and bold emphasize text, there will rarely
	be a need for italics or bold (except, e.g., foreign terms, titles, etc.)
	that doesn't mean emphasis.

	The stronger form is for content that is of "strong importance," including
	things of great seriousness or urgency (such as warnings). This could be a
	sentence that is of great importance to the whole page, or you could merely
	try to point out that some words are of greater importance compared to
	nearby content.

	Another accepted use for stronger form is to denote the labels of paragraphs
	which represent notes or warnings within the text of a page.

	While the weaker form is used to change the meaning of a sentence as spoken
	emphasis does, the stronger form is used to give portions of a sentence
	added importance (e.g., "Warning! This is very dangerous.") Both the
	stronger form and the weaker form can be nested to increase the relative
	degree of importance or stress emphasis, respectively.

	Accepts phrasing content.
*/
export const Emphasize: FunctionalComponent<EmphasizeProps> = ({
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
	level,
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

	// Default to weak emphasis
	const Tag = level === 'strong' ? 'strong' : 'em'
	// Wrap both for double emphasis
	const content =
		level === 'double' ? (
			<strong>{injectComponentsIntoContent(children)}</strong>
		) : (
			injectComponentsIntoContent(children)
		)

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
			<Tag
				autocapitalize={autoCapitalize}
				class="emphasize-bender"
				contentEditable={contentEditable}
				dir={dir}
				enterkeyhint={enterKeyHint}
				inputMode={inputMode}
				lang={lang}
				spellcheck={spellCheck}
				style={style}
				title={title}
			>
				{content}
			</Tag>
		</a>
	) : (
		<Tag
			autocapitalize={autoCapitalize}
			class="emphasize-bender"
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
			{content}
		</Tag>
	)
}
