import { FunctionalComponent, h } from '@stencil/core'
import formatDate from '../../../../../examples/utilities/formatDate'
import getItemPropAttributes from '../../../../../examples/utilities/getItemPropAttributes'
import getRel from '../../../../../examples/utilities/getRel'
import type { FormattedDateProps } from '../../../../types/props'

/*
	FormattedDate takes a date and formats it according to the default format
	or the passed `format` object. This permits machine reading of dates
	and styling of date elements.

	`date`: the date in YYYY-MM-DD.

	`format`: An Intl formatting object.

	Accepts no children.
*/
export const FormattedDate: FunctionalComponent<FormattedDateProps> = ({
	anchorStyle,
	autoCapitalize,
	componentId,
	contentEditable,
	date,
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
				class="formatted-date-bender"
				contentEditable={contentEditable}
				dateTime={date}
				dir={dir}
				enterkeyhint={enterKeyHint}
				inputMode={inputMode}
				lang={lang}
				spellcheck={spellCheck}
				style={style}
				title={title}
			>
				{formatDate(date, format)}
			</time>
		</a>
	) : (
		<time
			autocapitalize={autoCapitalize}
			class="formatted-date-bender"
			contentEditable={contentEditable}
			dateTime={date}
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
			{formatDate(date, format)}
		</time>
	)
}
