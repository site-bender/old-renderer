import { FunctionalComponent, h } from '@stencil/core'
import formatDateTime from '../../../../../examples/utilities/formatDateTime'
import getItemPropAttributes from '../../../../../examples/utilities/getItemPropAttributes'
import getRel from '../../../../../examples/utilities/getRel'
import type { FormattedDateTimeProps } from '../../../../types/props'

/*
	FormattedDateTime takes a dateTime and formats it according to the default
	format or the passed `format` object. This permits machine reading of
	dateTimes and styling of dateTime elements.

	`dateTime`: the date in ISO format.

	`format`: An Intl formatting object.

	Accepts no children.
*/
export const FormattedDateTime: FunctionalComponent<FormattedDateTimeProps> = ({
	anchorStyle,
	autoCapitalize,
	componentId,
	contentEditable,
	dateTime,
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
				class="formatted-date-time-bender"
				contentEditable={contentEditable}
				dateTime={dateTime}
				dir={dir}
				enterkeyhint={enterKeyHint}
				inputMode={inputMode}
				lang={lang}
				spellcheck={spellCheck}
				style={style}
				title={title}
			>
				{formatDateTime(dateTime, format)}
			</time>
		</a>
	) : (
		<time
			autocapitalize={autoCapitalize}
			class="formatted-date-time-bender"
			contentEditable={contentEditable}
			dateTime={dateTime}
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
			{formatDateTime(dateTime, format)}
		</time>
	)
}
