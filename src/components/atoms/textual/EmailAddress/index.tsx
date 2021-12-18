import { FunctionalComponent, h } from '@stencil/core'
import getItemPropAttributes from '../../../../../examples/utilities/getItemPropAttributes'
import getRel from '../../../../../examples/utilities/getRel'
import type { EmailAddressProps } from '../../../../types/props'

/*
	EmailAddress wraps an email address and marks it as such for machine use.
	Optionally, setting `mailto` to true wraps it in a mailto: link.

	Permits automated styling of email addresses in text, and/or obfuscation.

	Accepts a valid email address.
*/
export const EmailAddress: FunctionalComponent<EmailAddressProps> = ({
	anchorStyle,
	componentId,
	contentEditable,
	dir,
	draggable,
	emailAddress,
	enterKeyHint,
	hidden,
	inputMode,
	lang,
	mailto,
	referrerPolicy,
	rel,
	spellCheck,
	style,
	tabIndex,
	target,
	title,
	...config
}) => {
	const itemprops = getItemPropAttributes(config)

	return mailto ? (
		<a
			class="anchor-bender"
			draggable={draggable}
			hidden={hidden}
			href={`mailto:${emailAddress}`}
			id={componentId}
			referrerPolicy={referrerPolicy}
			rel={getRel(rel)}
			style={anchorStyle}
			tabIndex={tabIndex || 0}
			target={target}
		>
			<span
				class="email-address-bender"
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
				{emailAddress}
			</span>
		</a>
	) : (
		<span
			class="email-address-bender"
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
			{emailAddress}
		</span>
	)
}
