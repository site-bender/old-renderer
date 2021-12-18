import { FunctionalComponent, h } from '@stencil/core'
import getItemPropAttributes from '../../../../../examples/utilities/getItemPropAttributes'
import getRel from '../../../../../examples/utilities/getRel'
import injectComponentsIntoContent from '../../../../renderers/utilities/injectComponentsIntoContent'
import type { QuotationProps } from '../../../../types/props'

/*
	Quotation is used to mark inline quotations. Quotation marks are added via CSS
	permitting regional differences. This element is intended for short quotations
	that don't require paragraph breaks; for long quotations use the PullQuote element.

	`cite` is a URL that designates a source document or message for the information
	quoted. This attribute is intended to point to information explaining the context
	or the reference for the quote.

	Accepts phrasing content.
*/
export const Quotation: FunctionalComponent<QuotationProps> = ({
	anchorStyle,
	autoCapitalize,
	children,
	cite,
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
			<q
				autocapitalize={autoCapitalize}
				cite={cite}
				class="quotation-bender"
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
			</q>
		</a>
	) : (
		<q
			autocapitalize={autoCapitalize}
			cite={cite}
			class="quotation-bender"
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
		</q>
	)
}
