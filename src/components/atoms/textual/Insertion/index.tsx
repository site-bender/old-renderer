import { FunctionalComponent, h } from '@stencil/core'
import getItemPropAttributes from '../../../../../examples/utilities/getItemPropAttributes'
import getRel from '../../../../../examples/utilities/getRel'
import injectComponentsIntoContent from '../../../../renderers/utilities/injectComponentsIntoContent'
import type { InsertionProps } from '../../../../types/props'
/*
	Insertion represents a range of text that has been inserted into a document.
	This can be used when rendering "track changes" or source code diff
	information, for example.

	`cite` is a URI for a resource that explains the change (for example,
	meeting minutes).

	`dateTime` indicates the time and date of the change and must be a valid
	date string with an optional time. If the value cannot be parsed as a date
	with an optional time string, the element does not have an associated
	timestamp.

	Date string: YYYY-MM-DD
	DateTime string: YYYY-MM-DDTHH:mm:ss.xx

	See also Insertion.

	Accepts anything that will still be valid if the enclosing Insertion
	component is stripped away (transparent).
*/
export const Insertion: FunctionalComponent<InsertionProps> = ({
	anchorStyle,
	autoCapitalize,
	children,
	cite,
	componentId,
	contentEditable,
	dateTime,
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
			title={title}
		>
			<ins
				autocapitalize={autoCapitalize}
				cite={cite}
				class="insertion-bender"
				contentEditable={contentEditable}
				datetime={dateTime}
				dir={dir}
				enterkeyhint={enterKeyHint}
				inputMode={inputMode}
				lang={lang}
				spellcheck={spellCheck}
				style={style}
			>
				{injectComponentsIntoContent(children)}
			</ins>
		</a>
	) : (
		<ins
			autocapitalize={autoCapitalize}
			cite={cite}
			class="insertion-bender"
			contentEditable={contentEditable}
			datetime={dateTime}
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
			{injectComponentsIntoContent(children)}
		</ins>
	)
}
