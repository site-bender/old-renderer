import { FunctionalComponent, h } from '@stencil/core'
import injectComponentsIntoContent from '../../../../renderers/utilities/injectComponentsIntoContent'
import type { AnchorProps } from '../../../../types/props'
import getItemPropAttributes from '../../../../utilities/getItemPropAttributes'
import getRel from '../../../../utilities/getRel'

/*
	The Anchor, with its href attribute, creates a hyperlink to web pages, files,
	email addresses, locations in the same page, or anything else a URL can
	address.

	Content within each Anchor should indicate the link's destination. If the
	href attribute is present, pressing the enter key while focused on the Anchor
	will activate it.

	See https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a for an
	explanation of attributes.

	Accepted content: Transparent, containing either flow content (excluding
	interactive content) or phrasing content.

	Implicit role is `link`.

	Permitted roles:
		- button
		- checkbox
		- menuitem
		- menuitemcheckbox
		- menuitemradio
		- option
		- radio
		- switch
		- tab
*/
export const Anchor: FunctionalComponent<AnchorProps> = ({
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

	return (
		<a
			class="anchor-bender"
			contenteditable={contentEditable}
			dir={dir}
			draggable={draggable}
			enterkeyhint={enterKeyHint}
			hidden={hidden}
			href={href}
			hreflang={hrefLang}
			id={componentId}
			inputmode={inputMode}
			{...itemprops}
			lang={lang}
			referrerPolicy={referrerPolicy}
			rel={getRel(rel)}
			role={role}
			spellcheck={spellCheck}
			style={style}
			tabIndex={tabIndex || 0}
			target={target}
			title={title}
		>
			{injectComponentsIntoContent(children)}
		</a>
	)
}
