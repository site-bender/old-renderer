import { FunctionalComponent, h } from '@stencil/core'
import injectComponentsIntoContent from '../../../../renderers/utilities/injectComponentsIntoContent'
import type { SampleProps } from '../../../../types/props'
import getItemPropAttributes from '../../../../utilities/getItemPropAttributes'
import getRel from '../../../../utilities/getRel'

/*
	Sample is used to enclose inline text which represents sample (or quoted)
	output from a computer program. Its contents are typically rendered in a
	mono-spaced typeface.

	Accepts phrasing content.
*/
export const Sample: FunctionalComponent<SampleProps> = ({
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
			<samp
				autocapitalize={autoCapitalize}
				class="sample-bender"
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
			</samp>
		</a>
	) : (
		<samp
			autocapitalize={autoCapitalize}
			class="sample-bender"
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
		</samp>
	)
}
