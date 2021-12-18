import { FunctionalComponent, h } from '@stencil/core'
import type { TypographyProps } from '../../../../types/props'
import getItemPropAttributes from '../../../../utilities/getItemPropAttributes'

/*
	Typography represents a span of text with a different typography applied.

	Accepts phrasing content.
*/
export const Typography: FunctionalComponent<TypographyProps> = ({
	autoCapitalize,
	children,
	componentId,
	contentEditable,
	dir,
	draggable,
	enterKeyHint,
	face = 'default-font',
	fontVariantAlternates = ['inherit'],
	fontVariantCaps = ['inherit'],
	fontVariantLigatures = ['inherit'],
	fontVariantNumeric = ['inherit'],
	hidden,
	inputMode,
	isBold,
	isItalic,
	lang,
	role,
	size = 0,
	spellCheck,
	style,
	tabIndex,
	title,
	...config
}) => {
	const itemprops = getItemPropAttributes(config)

	const styles = {
		fontFamily: `var(--${face})`,
		fontSize: `var(--s${size})`,
		fontStyle: isItalic ? 'italic' : 'normal',
		fontVariantAlternates: fontVariantAlternates.join(' '),
		fontVariantCaps: fontVariantCaps.join(' '),
		fontVariantLigatures: fontVariantLigatures.join(' '),
		fontVariantNumeric: fontVariantNumeric.join(' '),
		fontWeight: isBold ? 'bold' : 'normal',
		...style,
	}

	return (
		<span
			autocapitalize={autoCapitalize}
			class="typography-bender"
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
			style={styles}
			tabIndex={tabIndex}
			title={title}
		>
			{children}
		</span>
	)
}
