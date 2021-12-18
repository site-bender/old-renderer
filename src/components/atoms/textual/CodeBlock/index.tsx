import { FunctionalComponent, h } from '@stencil/core'
import getItemPropAttributes from '../../../../../examples/utilities/getItemPropAttributes'
import injectComponentsIntoContent from '../../../../renderers/utilities/injectComponentsIntoContent'
import type { CodeBlockProps } from '../../../../types/props'

/*
	CodeBlock is used to display blocks of code.

	This is a block-level component. For inline code, use the Code component.

	`language` can be used for syntax highlighting.

	Accepts phrasing content.
*/
export const CodeBlock: FunctionalComponent<CodeBlockProps> = ({
	autoCapitalize,
	children,
	componentId,
	contentEditable,
	dir,
	draggable,
	enterKeyHint,
	hidden,
	inputMode,
	lang,
	language,
	role,
	spellCheck,
	style,
	tabIndex,
	title,
	...config
}) => {
	const itemprops = getItemPropAttributes(config)

	return (
		<pre>
			<code
				autocapitalize={autoCapitalize}
				class={`code-block-bender ${language ? language : ''}`}
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
				{injectComponentsIntoContent(children)}
			</code>
		</pre>
	)
}
