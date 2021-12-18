import { FunctionalComponent, h } from '@stencil/core'
import type { KeyProps } from '../../../../types/props'
import getItemPropAttributes from '../../../../utilities/getItemPropAttributes'

/*
	Key is used for an individual key on the keyboard. Used with KeyboardInput.

	Examples: 'Ctrl', 'Alt', 'X'

	Accepts a keyboard key (see KeyboardKey enum).
*/
export const Key: FunctionalComponent<KeyProps> = ({
	autoCapitalize,
	componentId,
	contentEditable,
	dir,
	draggable,
	enterKeyHint,
	hidden,
	inputMode,
	key,
	lang,
	spellCheck,
	style,
	title,
	...config
}) => {
	const itemprops = getItemPropAttributes(config)

	return (
		<kbd
			autocapitalize={autoCapitalize}
			class="key-bender"
			contentEditable={contentEditable}
			dir={dir}
			draggable={draggable}
			enterkeyhint={enterKeyHint}
			hidden={hidden}
			id={componentId}
			inputMode={inputMode}
			{...itemprops}
			lang={lang}
			spellcheck={spellCheck}
			style={style}
			title={title}
		>
			{key}
		</kbd>
	)
}
