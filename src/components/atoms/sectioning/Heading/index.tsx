import { FunctionalComponent, h } from '@stencil/core'
import getItemPropAttributes from '../../../../../examples/utilities/getItemPropAttributes'
import getRel from '../../../../../examples/utilities/getRel'
import injectComponentsIntoContent from '../../../../renderers/utilities/injectComponentsIntoContent'
import type { HeadingProps } from '../../../../types/props'

// TODO: Make this only available through sectioning elements
// and AUTOMATICALLY nested (numerically). Wrap in <header>?

/*
	Heading is used to h1-h6 HTML headings by nesting them appropriately. Font
	size can be set independently on a scale from smallest to largest.

	`level` indicates the degree of nesting from 1 to 6 where 1 is the top
	level, 2 is nested immediately under 1, etc.

	Headings may be nested as subsections to reflect the organization of the
	content of the page. Most screen readers can also generate an ordered list
	of all the headings on a page, which can help a person quickly determine
	the hierarchy of the content.

	See also https://www.w3.org/WAI/tutorials/page-structure/headings/

	`size` indicates the visual size of the type, from smallest to largest.

	Implicit role is `heading`.

	Permitted roles are 'none' | 'presentation' | 'tab'.

	Accepts phrasing content.
*/
export const Heading: FunctionalComponent<HeadingProps> = ({
	anchorStyle,
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
	size,
	spellCheck,
	style,
	tabIndex,
	target,
	title,
	...config
}) => {
	const itemprops = getItemPropAttributes(config)

	const Tag = `h${level}`

	return href ? (
		<Tag
			class={`h${level}-bender ${size}-bender`}
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
			title={title}
		>
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
				{injectComponentsIntoContent(children)}
			</a>
		</Tag>
	) : (
		<Tag
			class={`h${level}-bender ${size}-bender`}
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
			title={title}
		>
			{injectComponentsIntoContent(children)}
		</Tag>
	)
}
