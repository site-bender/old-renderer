import { FunctionalComponent, h } from '@stencil/core'
import getItemPropAttributes from '../../../../../examples/utilities/getItemPropAttributes'
import getRel from '../../../../../examples/utilities/getRel'
import type { KeyboardInputProps } from '../../../../types/props'

/*
	KeyboardInput is used to show strings of text meant to be input at the
	command line (terminal). Typically shown in a mono-spaced typeface.

	`nesting`: one of 'echoed' | 'key-combo' | 'system'

	See below for examples.

	Accepts a string only.
*/
export const KeyboardInput: FunctionalComponent<KeyboardInputProps> = ({
	anchorStyle,
	autoCapitalize,
	children = '',
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
	nesting,
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
	// Nesting a <kbd> element within another <kbd> element represents an
	// actual key or other unit of input as a portion of a larger input
	const input =
		nesting === 'key-combo'
			? children
					.split('+')
					.reduce(
						(acc, key) => [
							...acc,
							...(acc.length ? [<span>+</span>] : []),
							<kbd>{key}</kbd>,
						],
						[],
					)
			: children
	const cls = nesting === 'key-combo' ? ' key-combo-bender' : ''
	// Nesting a <samp> element inside a <kbd> element represents input
	// which is based on text presented by the system, such as the names of
	// menus and menu items, or the names of buttons displayed on the screen.
	const kbdText = nesting === 'system' ? <samp>{input}</samp> : input
	// KBD attributes depend on whether wrapped in anchor element
	const kbd = href ? (
		<kbd
			autocapitalize={autoCapitalize}
			class={`keyboard-input-bender${cls}`}
			contentEditable={contentEditable}
			dir={dir}
			enterkeyhint={enterKeyHint}
			inputMode={inputMode}
			lang={lang}
			spellcheck={spellCheck}
			style={style}
		>
			{kbdText}
		</kbd>
	) : (
		<kbd
			autocapitalize={autoCapitalize}
			class={`keyboard-input-bender${cls}`}
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
			title={title}
		>
			{kbdText}
		</kbd>
	)
	// Nesting a <kbd> element inside a <samp> element represents input
	// that has been echoed back to the user by the system.
	const final = nesting === 'echoed' ? <samp>{kbd}</samp> : kbd

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
			title={title}
		>
			{final}
		</a>
	) : (
		final
	)
}
