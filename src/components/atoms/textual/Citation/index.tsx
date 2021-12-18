import { FunctionalComponent, h } from '@stencil/core'
import getItemPropAttributes from '../../../../../examples/utilities/getItemPropAttributes'
import getRel from '../../../../../examples/utilities/getRel'
import injectComponentsIntoContent from '../../../../renderers/utilities/injectComponentsIntoContent'
import type { CitationProps } from '../../../../types/props'

// TODO: handle different inTextType and referentType

/*
	Citation is used to describe a reference to a cited creative work, and must
	include the title of that work. The reference may be in an abbreviated form
	according to context-appropriate conventions related to citation metadata.

	To include a reference to the source of quoted material which is contained
	within a BlockQuote or Quotation, use the cite attribute on the
	component.

	A creative work that might be cited could be, for example, one of:
		- A book
		- A research paper
		- An essay
		- A poem
		- A musical score
		- A song
		- A play or film script
		- A film
		- A television show
		- A game
		- A sculpture
		- A painting
		- A theatrical production
		- A play
		- An opera
		- A musical
		- An exhibition
		- A legal case report
		- A computer program
		- A web site
		- A web page
		- A blog post or comment
		- A forum post or comment
		- A tweet
		- A Facebook post
		- A written or oral statement
		- And so forth.

	Accepts phrasing content.
*/
export const Citation: FunctionalComponent<CitationProps> = ({
	ariaAnchorRole,
	autoCapitalize,
	children,
	citationType,
	componentId,
	contentEditable,
	dir,
	draggable,
	enterKeyHint,
	hidden,
	hrefLang,
	inputMode,
	// inTextType,
	lang,
	referentId,
	// referentType,
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

	return citationType === 'footnote' ? (
		<a
			autocapitalize={autoCapitalize}
			class="citation-anchor"
			contentEditable={contentEditable}
			dir={dir}
			draggable={draggable}
			enterkeyhint={enterKeyHint}
			hidden={hidden}
			href={`#${referentId}`}
			hreflang={hrefLang}
			id={componentId}
			inputMode={inputMode}
			{...itemprops}
			lang={lang}
			referrerPolicy={referrerPolicy}
			rel={getRel(rel)}
			role={ariaAnchorRole}
			spellcheck={spellCheck}
			style={style}
			tabIndex={tabIndex || 0}
			target={target}
			title={title}
		>
			<span class="footnote-marker" />
		</a>
	) : (
		<cite
			autocapitalize={autoCapitalize}
			class="citation-bender"
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
		</cite>
	)
}
