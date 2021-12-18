import { FunctionalComponent, h } from '@stencil/core'
import getItemPropAttributes from '../../../../../examples/utilities/getItemPropAttributes'
import getRel from '../../../../../examples/utilities/getRel'
import type { VariableProps } from '../../../../types/props'

/*
	Variable represents the name of a variable in a mathematical expression
	or a programming context. It's typically presented using an italicized
	version of the current typeface, although that behavior is browser-dependent.

	Accepts phrasing content.
*/
export const Variable: FunctionalComponent<VariableProps> = ({
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
	title,
	variable,
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
			<var
				autocapitalize={autoCapitalize}
				class="variable-bender"
				contentEditable={contentEditable}
				dir={dir}
				enterkeyhint={enterKeyHint}
				inputMode={inputMode}
				lang={lang}
				spellcheck={spellCheck}
				style={style}
				title={title}
			>
				{variable}
			</var>
		</a>
	) : (
		<var
			autocapitalize={autoCapitalize}
			class="variable-bender"
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
			{variable}
		</var>
	)
}
