import { FunctionalComponent, h } from '@stencil/core'
import type { PhoneNumberProps } from '../../../../types/props'
import getItemPropAttributes from '../../../../utilities/getItemPropAttributes'
import getRel from '../../../../utilities/getRel'

/*
	PhoneNumber wraps a telephone number and marks it as such for machine use.
	Optionally, setting `tel` to true wraps it in a tel: link.

	Permits automated styling of phone numbers in text, and/or obfuscation.

	Accepts a valid phone number.
*/
export const PhoneNumber: FunctionalComponent<PhoneNumberProps> = ({
	anchorStyle,
	componentId,
	contentEditable,
	dir,
	draggable,
	enterKeyHint,
	hidden,
	inputMode,
	lang,
	phoneNumber,
	referrerPolicy,
	rel,
	spellCheck,
	style,
	tabIndex,
	target,
	tel,
	title,
	...config
}) => {
	const itemprops = getItemPropAttributes(config)

	return tel ? (
		<a
			class="anchor-bender"
			draggable={draggable}
			hidden={hidden}
			href={`tel:${phoneNumber}`}
			id={componentId}
			referrerPolicy={referrerPolicy}
			rel={getRel(rel)}
			style={anchorStyle}
			tabIndex={tabIndex || 0}
			target={target}
		>
			<span
				class="phone-number-bender"
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
				{phoneNumber}
			</span>
		</a>
	) : (
		<span
			class="phone-number-bender"
			contenteditable={contentEditable}
			dir={dir}
			draggable={draggable}
			enterkeyhint={enterKeyHint}
			hidden={hidden}
			id={componentId}
			inputmode={inputMode}
			{...itemprops}
			lang={lang}
			spellcheck={spellCheck}
			style={style}
			title={title}
		>
			{phoneNumber}
		</span>
	)
}
