import { FunctionalComponent, h } from '@stencil/core'
import injectComponentsIntoContent from '../../../../renderers/utilities/injectComponentsIntoContent'
import type { ForeignTermProps } from '../../../../types/props'
import getItemPropAttributes from '../../../../utilities/getItemPropAttributes'
import getLanguage from '../../../../utilities/getLanguage'
import getRel from '../../../../utilities/getRel'

/*
	ForeignTerm is used to mark up foreign words or terms in text. This can
	apply formatting (typically italics) and insert the language and a
	translation into the `title` attribute (visible on mouseover).

	Accepts phrasing content.
*/
export const ForeignTerm: FunctionalComponent<ForeignTermProps> = ({
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
	language,
	referrerPolicy,
	rel,
	role,
	spellCheck,
	style,
	tabIndex,
	target,
	translation,
	...config
}) => {
	const itemprops = getItemPropAttributes(config)

	const titleText =
		language && translation
			? `${getLanguage(language)}: ${translation}`
			: translation || getLanguage(language)

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
			<span
				autocapitalize={autoCapitalize}
				class="foreign-term-bender"
				contentEditable={contentEditable}
				dir={dir}
				enterkeyhint={enterKeyHint}
				inputMode={inputMode}
				lang={lang}
				spellcheck={spellCheck}
				style={style}
				title={titleText}
			>
				{injectComponentsIntoContent(children)}
			</span>
		</a>
	) : (
		<span
			autocapitalize={autoCapitalize}
			class="foreign-term-bender"
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
			title={titleText}
		>
			{injectComponentsIntoContent(children)}
		</span>
	)
}
