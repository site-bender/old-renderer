import { FunctionalComponent, h } from '@stencil/core'
import formatTime from '../../../../../examples/utilities/formatTime'
import getItemPropAttributes from '../../../../../examples/utilities/getItemPropAttributes'
import getRel from '../../../../../examples/utilities/getRel'
import type { FormattedTimeProps } from '../../../../types/props'

/*
	FormattedDateTime takes a dateTime and formats it according to the default
	format or the passed `format` object. This permits machine reading of
	dateTimes and styling of dateTime elements.

	`dateTime`: the date in ISO format.

	`format`: An Intl formatting object.

	Accepts no children.
*/
export const FormattedTime: FunctionalComponent<FormattedTimeProps> = ({
	anchorStyle,
	autoCapitalize,
	componentId,
	contentEditable,
	dir,
	draggable,
	enterKeyHint,
	format,
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
	time,
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
			<time
				autocapitalize={autoCapitalize}
				class="formatted-time-bender"
				contentEditable={contentEditable}
				dateTime={time}
				dir={dir}
				enterkeyhint={enterKeyHint}
				inputMode={inputMode}
				lang={lang}
				spellcheck={spellCheck}
				style={style}
				title={title}
			>
				{formatTime(time, format)}
			</time>
		</a>
	) : (
		<time
			autocapitalize={autoCapitalize}
			class="formatted-time-bender"
			contentEditable={contentEditable}
			dateTime={time}
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
			{formatTime(time, format)}
		</time>
	)
}
