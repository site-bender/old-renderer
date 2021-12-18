// Palpable Content is content that is rendered and is substantive. It is neither empty nor hidden.

// Embedded content is a subset of flow content that imports another resource or inserts content
// from another mark-up language or namespace into the document, and can be used everywhere
// flow content is expected.
export type EmbeddedContent =
	| 'audio'
	| 'canvas'
	| 'embed'
	| 'iframe'
	| 'img'
	| 'math'
	| 'object'
	| 'picture'
	| 'svg'
	| 'video'

// Flow content is a broad category that encompasses most elements that can go inside the <body>
// element, including heading elements, sectioning elements, phrasing elements, embedding elements,
// interactive elements, and form-related elements.
//
// It also includes text nodes (but not those that only consist of white space characters).
export type FlowContent =
	| 'a'
	| 'abbr'
	| 'address'
	| 'article'
	| 'aside'
	| 'audio'
	| 'b'
	| 'bdi'
	| 'bdo'
	| 'blockquote'
	| 'br'
	| 'button'
	| 'canvas'
	| 'cite'
	| 'code'
	| 'command'
	| 'data'
	| 'datalist'
	| 'del'
	| 'details'
	| 'dfn'
	| 'div'
	| 'dl'
	| 'em'
	| 'embed'
	| 'fieldset'
	| 'figure'
	| 'footer'
	| 'form'
	| 'h1'
	| 'h2'
	| 'h3'
	| 'h4'
	| 'h5'
	| 'h6'
	| 'header'
	| 'hgroup'
	| 'hr'
	| 'i'
	| 'iframe'
	| 'img'
	| 'input'
	| 'ins'
	| 'kbd'
	| 'keygen'
	| 'label'
	| 'main'
	| 'map'
	| 'mark'
	| 'math'
	| 'menu'
	| 'meter'
	| 'nav'
	| 'noscript'
	| 'object'
	| 'ol'
	| 'output'
	| 'p'
	| 'picture'
	| 'pre'
	| 'progress'
	| 'q'
	| 'ruby'
	| 's'
	| 'samp'
	| 'script'
	| 'section'
	| 'select'
	| 'small'
	| 'span'
	| 'strong'
	| 'sub'
	| 'sup'
	| 'svg'
	| 'table'
	| 'template'
	| 'textarea'
	| 'time'
	| 'u'
	| 'ul'
	| 'var'
	| 'video'
	| 'wbr'
	| 'area' // if descendant of map
	| 'link' // if `itemprop` present
	| 'meta' // if `itemprop` present
	| 'style' // if `scoped` present

// Form-associated content is a subset of flow content comprising elements that have a form owner,
// exposed by a form attribute, and can be used everywhere flow content is expected. A form owner
// is either the containing <form> element or the element whose id is specified in the form attribute.
export type FormAssociatedContent =
	| 'button'
	| 'fieldset'
	| 'input'
	| 'label'
	| 'meter'
	| 'object'
	| 'output'
	| 'progress'
	| 'select'
	| 'textarea'

// Elements that can be associated with <label> elements.
export type FormLabelableContent =
	| 'button'
	| 'input'
	| 'meter'
	| 'output'
	| 'progress'
	| 'select'
	| 'textarea'

// Elements that are listed in the form.elements and fieldset.elements IDL collections.
export type FormListedContent =
	| 'button'
	| 'fieldset'
	| 'input'
	| 'object'
	| 'output'
	| 'select'
	| 'textarea'

// Elements that can be affected when a form is rese
export type FormResettableContent = 'input' | 'output' | 'select' | 'textarea'

// Elements that can be used for constructing the form data set when the form is submitted.
export type FormSubmittableContent =
	| 'button'
	| 'input'
	| 'object'
	| 'select'
	| 'textarea'

// Heading content is a subset of flow content, which defines the title of a section, whether marked
// by an explicit sectioning content element, or implicitly defined by the heading content itself.
// Heading content can be used everywhere flow content is expected.
export type HeadingContent = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'hgroup'

// Interactive content is a subset of flow content that includes elements that are specifically
// designed for user interaction, and can be used everywhere flow content is expected.
export type InteractiveContent =
	| 'a'
	| 'button'
	| 'details'
	| 'embed'
	| 'iframe'
	| 'label'
	| 'select'
	| 'textarea'
	| 'audio' // if `controls` present
	| 'img' // if `usemap` present
	| 'input' // if `type` not in hidden state
	| 'menu' // if `type` is in toolbar state
	| 'object' // if `usemap` prsent
	| 'video' // if `controls` present

// Elements belonging to the metadata content category modify the presentation or the behavior of
// the rest of the document, set up links to other documents, or convey other out of band information.
export type MetadataContent =
	| 'base'
	| 'link'
	| 'meta'
	| 'noscript'
	| 'script'
	| 'style'
	| 'title'

// Phrasing content is a subset of flow content that defines the text and the markup it contains,
// and can be used everywhere flow content is expected. Runs of phrasing content make up paragraphs.
export type PhrasingContent =
	| 'abbr'
	| 'audio'
	| 'b'
	| 'bdo'
	| 'br'
	| 'button'
	| 'canvas'
	| 'cite'
	| 'code'
	| 'data'
	| 'datalist'
	| 'dfn'
	| 'em'
	| 'embed'
	| 'i'
	| 'iframe'
	| 'img'
	| 'input'
	| 'kbd'
	| 'label'
	| 'mark'
	| 'math'
	| 'meter'
	| 'noscript'
	| 'object'
	| 'output'
	| 'picture'
	| 'progress'
	| 'q'
	| 'ruby'
	| 'samp'
	| 'script'
	| 'select'
	| 'small'
	| 'span'
	| 'strong'
	| 'sub'
	| 'sup'
	| 'svg'
	| 'textarea'
	| 'time'
	| 'u'
	| 'var'
	| 'video'
	| 'wbr'
	| 'a' // if contains only phrasing content
	| 'area' // if descendant of `map` element
	| 'del' // if contains only phrasing content
	| 'ins' // if contains only phrasing content
	| 'link' // if `itemprop` present
	| 'map' // if contains only phrasing content
	| 'meta' // if `itemprop` present

// Sectioning content is a subset of flow content, and can be used everywhere flow content is expected.
// Elements belonging to the sectioning content model create a section in the current outline that
// defines the scope of <header> elements, <footer> elements, and heading content.
export type SectioningContent = 'article' | 'aside' | 'nav' | 'section'

// Script-supporting elements are elements which don't directly contribute to the rendered output of
// a document. Instead, they serve to support scripts, either by containing or specifying script code
// directly, or by specifying data that will be used by scripts.
export type ScriptSupportingElements = 'script' | 'template'
