import { FunctionalComponent, h } from '@stencil/core'
import injectComponentsIntoContent from '../../../../renderers/utilities/injectComponentsIntoContent'
import type { CodeProps } from '../../../../types/props'
import getItemPropAttributes from '../../../../utilities/getItemPropAttributes'
import getRel from '../../../../utilities/getRel'

/*
	Code displays its contents styled in a fashion intended to indicate that the
	text is a short fragment of computer code. By default, the content text is
	displayed using the user agent's default monospace font.

	This is an inline component. For blocks of code, use the CodeBlock component.

	Accepts phrasing content.
*/
export const Code: FunctionalComponent<CodeProps> = ({
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
			<code
				autocapitalize={autoCapitalize}
				class="code-bender"
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
			</code>
		</a>
	) : (
		<code
			autocapitalize={autoCapitalize}
			class="code-bender"
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
		</code>
	)
}
