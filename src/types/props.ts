import type { JSX } from '@stencil/core'
import type { DateOptions, DateTimeOptions, TimeOptions } from './dates'
import {
	AutocompletionType,
	FunctionalComponentType,
	KeyboardKey,
	PopupType,
	WebComponentType,
} from './enums'
import type { TextFieldState } from './state'

export type AriaRoles =
	| 'alert'
	| 'alertdialog'
	| 'application'
	| 'article'
	| 'banner'
	| 'blockquote'
	| 'button'
	| 'caption'
	| 'cell'
	| 'checkbox'
	| 'code'
	| 'columnheader'
	| 'combobox'
	| 'complementary'
	| 'contentinfo'
	| 'definition'
	| 'deletion'
	| 'dialog'
	| 'document'
	| 'emphasis'
	| 'feed'
	| 'figure'
	| 'form'
	| 'generic'
	| 'grid'
	| 'gridcell'
	| 'group'
	| 'heading'
	| 'img'
	| 'insertion'
	| 'link'
	| 'list'
	| 'listbox'
	| 'listitem'
	| 'log'
	| 'main'
	| 'marquee'
	| 'math'
	| 'meter'
	| 'menu'
	| 'menubar'
	| 'menuitem'
	| 'menuitemcheckbox'
	| 'menuitemradio'
	| 'navigation'
	| 'none'
	| 'note'
	| 'option'
	| 'paragraph'
	| 'presentation'
	| 'progressbar'
	| 'radio'
	| 'radiogroup'
	| 'region'
	| 'row'
	| 'rowgroup'
	| 'rowheader'
	| 'scrollbar'
	| 'search'
	| 'searchbox'
	| 'separator'
	| 'slider'
	| 'spinbutton'
	| 'status'
	| 'strong'
	| 'subscript'
	| 'superscript'
	| 'switch'
	| 'tab'
	| 'table'
	| 'tablist'
	| 'tabpanel'
	| 'term'
	| 'textbox'
	| 'time'
	| 'timer'
	| 'toolbar'
	| 'tooltip'
	| 'tree'
	| 'treegrid'
	| 'treeitem'

export type TriState = boolean | 'mixed'

export type Sizes = -5 | -4 | -3 | -2 | -1 | 0 | 1 | 2 | 3 | 4 | 5

export type Borders = 'thick' | 'thin'

export type PopupOptions =
	| false // no popup
	| 'false' // no popup
	| true // menu
	| 'true' // menu
	| 'menu'
	| 'listbox'
	| 'tree'
	| 'grid'
	| 'dialog'

// Developers should prefer using the correct semantic HTML element over using ARIA

export type AriaLiveRegionAttributes = {
	// Indicates whether assistive technologies will present all, or only parts of, the changed region based on the change notifications defined by the aria-relevant attribute.
	ariaAtomic: boolean // Roles: All elements of the base markup
	// Indicates an element is being modified and that assistive technologies MAY want to wait until the modifications are complete before exposing them to the user.
	ariaBusy: boolean // Roles: All elements of the base markup
	// Indicates that an element will be updated, and describes the types of updates the user agents, assistive technologies, and user can expect from the live region.
	ariaLive:
		| 'assertive' // Indicates that updates to the region have the highest priority and should be presented the user immediately.
		| 'off' // default: Indicates that updates to the region should not be presented to the user unless the user is currently focused on that region.
		| 'polite' // Indicates that updates to the region should be presented at the next graceful opportunity, such as at the end of speaking the current sentence or when the user pauses typing.
	// Indicates what notifications the user agent will trigger when the accessibility tree within a live region is modified. See related aria-atomic.
	ariaRelevant:
		| 'additions' // Element nodes are added to the accessibility tree within the live region.
		| 'additions text' // default: Equivalent to the combination of values, "additions text".
		| 'all' // Equivalent to the combination of all values, "additions removals text".
		| 'removals' // Text content, a text alternative, or an element node within the live region is removed from the accessibility tree.
		| 'text' // Text content or a text alternative is added to any descendant in the accessibility tree of the live region.
}

export type AriaRelationshipAttributes = {
	// Identifies the currently active element when DOM focus is on a composite widget, combobox, textbox, group, or application.
	ariaActiveDescendant: string // ID reference. Roles: application, combobox, composite, group, textbox. Inherits into grid, listbox, menu, menubar, radiogroup, row, searchbox, select, spinbutton, tablist, toolbar, tree, treegrid.
	// Defines the total number of columns in a table, grid, or treegrid. See related aria-colindex.
	ariaColCount: number // integer. Roles: table. Inherits into grid, treegrid.
	// Defines an element's column index or position with respect to the total number of columns within a table, grid, or treegrid. See related aria-colcount and aria-colspan.
	ariaColIndex: number // integer. Roles: cell, row. Inherits into columnheader, gridcell, rowheader.
	// Defines the number of columns spanned by a cell or gridcell within a table, grid, or treegrid. See related aria-colindex and aria-rowspan.
	ariaColSpan: number // integer. Roles: cell. Inherits into columnheader, gridcell, rowheader.
	// Identifies the element (or elements) whose contents or presence are controlled by the current element. See related aria-owns.
	ariaControls: string // ID reference list. Roles: All elements of base markup.
	// Identifies the element (or elements) that describes the object. See related aria-labelledby.
	ariaDescribedBy: string // ID reference list. Roles: All elements of the base markup.
	// Identifies the element that provides a detailed, extended description for the object. See related aria-describedby.
	ariaDetails: string // ID reference. Roles: All elements of the base markup.
	// Identifies the element that provides an error message for an object. See related aria-invalid and aria-describedby.
	ariaErrorMessage: string // ID reference. Roles: application, checkbox, combobox, gridcell, listbox, radiogroup, slider, spinbutton, textbox, tree. Inherits into columnheader, rowheader, searchbox, switch, treegrid.
	// Identifies the next element (or elements) in an alternate reading order of content which, at the user's discretion, allows assistive technology to override the general default of reading in document source order.
	ariaFlowTo: string // ID reference list. Roles: All elements of the base markup.
	// Identifies the element (or elements) that labels the current element. See related aria-describedby.
	ariaLabelledBy: string // ID reference list. Roles: 	All elements of the base markup except for some roles or elements that prohibit its use.
	// Identifies an element (or elements) in order to define a visual, functional, or contextual parent/child relationship between DOM elements where the DOM hierarchy cannot be used to represent the relationship. See related aria-controls.
	ariaOwns: string // ID reference list. Roles: All elements of the base markup.
	// Defines an element's number or position in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM. See related aria-setsize.
	ariaPosInset: number // integer. Roles: article, listitem, menuitem, option, radio, row, tab. Inherits into menuitemcheckbox, menuitemradio, treeitem.
	// Defines the total number of rows in a table, grid, or treegrid. See related aria-rowindex.
	ariaRowCount: number // integer. Roles: table. Inherits into grid, treegrid.
	// Defines an element's row index or position with respect to the total number of rows within a table, grid, or treegrid. See related aria-rowcount and aria-rowspan.
	ariaRowIndex: number // integer. Roles: cell, row. Inherits into columnheader, gridcell, rowheader.
	// Defines the number of rows spanned by a cell or gridcell within a table, grid, or treegrid. See related aria-rowindex and aria-colspan.
	ariaRowSpan: number // integer. Roles: cell. Inherits into columnheader, gridcell, rowheader.
	// Defines the number of items in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM. See related aria-posinset.
	ariaSetSize: number // integer. Roles: article, listitem, menuitem, option, radio, row, tab. Inherits into menuitemcheckbox, menuitemradio, treeitem.
}

// ariaDisabled used in roles application, button, composite, gridcell, group, input, link, menuitem, scrollbar, separator, tab.
// ariaDisabled inherits into roles application, button, composite, gridcell, group, input, link, menuitem, scrollbar, separator, tab.
export type AriaWidgetAttributes = {
	// Indicates whether inputting text could trigger display of one or more predictions of the user's intended value for a combobox, searchbox, or textbox and specifies how predictions would be presented if they were made.
	ariaAutocomplete?: 'both' | 'inline' | 'list' | 'none' // default Roles: combobox, textbox. Inherits into searchbox.
	// Indicates the current "checked" state of checkboxes, radio buttons, and other widgets. See related aria-pressed and aria-selected.
	ariaChecked?: TriState // Roles: checkbox, menuitemcheckbox, option, radio, switch. Inherits into menuitemradio, treeitem.
	// Indicates that the element is perceivable but disabled, so it is not editable or otherwise operable. See related aria-hidden and aria-readonly.
	// Authors are advised not to use aria-disabled on elements that cannot be disabled through features of the host language alone.
	ariaDisabled?: boolean // false or undefined means element enabled
	// Identifies the element that provides an error message for an object. See related aria-invalid and aria-describedby.
	ariaErrorMessage?: string // Roles: application, checkbox, combobox, gridcell, listbox, radiogroup, slider, spinbutton, textbox, tree. Inherits into columnheader, rowheader, searchbox, switch, treegrid.
	// Indicates whether a grouping element owned or controlled by this element is expanded or collapsed.
	ariaExpanded?: boolean // Roles: application, button, checkbox, combobox, gridcell, link, listbox, menuitem, row, rowheader, tab, treeitem. Inherits into columnheader, menuitemcheckbox, menuitemradio, switch.
	// Indicates the availability and type of interactive popup element, such as menu or dialog, that can be triggered by an element.
	ariaHasPopup?: PopupOptions // Roles: application, button, combobox, gridcell, link, menuitem, slider, tab, textbox, treeitem. Inherits into columnheader, menuitemcheckbox, menuitemradio, rowheader, searchbox.
	// Indicates whether the element is exposed to an accessibility API. See related aria-disabled.
	ariaHidden?: boolean // Roles: used in all elements of base markup.
	// Indicates the entered value does not conform to the format expected by the application. See related aria-errormessage.
	ariaInvalid?: boolean | 'grammar' | 'spelling' // Roles: application, checkbox, combobox, gridcell, listbox, radiogroup, slider, spinbutton, textbox, tree. Inherits into columnheader, rowheader, searchbox, switch, treegrid.
	// Defines a string value that labels the current element. See related aria-labelledby.
	ariaLabel?: string // Used in all elements of the base markup except for some roles or elements that prohibit its use
	// Defines the hierarchical level of an element within a structure.
	ariaLevel?: number // integer. Roles: heading, listitem, row. Inherits into treeitem.
	// Indicates whether an element is modal when displayed.
	ariaModal?: boolean // Roles: window. Inherits into alertdialog, dialog.
	// Indicates whether a text box accepts multiple lines of input or only a single line.
	// In most user agent implementations, the default behavior of the ENTER or RETURN key is different between the single-line and multi-line text fields in HTML.
	// When user has focus in a single-line <input type="text"> element, the keystroke usually submits the form. When user has focus in a multi-line <textarea> element,
	// the keystroke inserts a line break. The WAI-ARIA textbox role differentiates these types of boxes with the aria-multiline attribute, so authors are advised
	// to be aware of this distinction when designing the field.
	ariaMultiline?: boolean // Roles: textbox. Inherits into searchbox.
	// Indicates that the user may select more than one item from the current selectable descendants.
	ariaMultiSelectable?: boolean // Roles grid, listbox, tablist, tree. Inherits into treegrid.
	// Indicates whether the element's orientation is horizontal, vertical, or unknown/ambiguous.
	ariaOrientation?: 'horizontal' | 'vertical' // default ambiguous. Roles: scrollbar, select, separator, slider, tablist, toolbar. Inherits into listbox, menu, menubar, radiogroup, tree, treegrid.
	// Defines a short hint (a word or short phrase) intended to aid the user with data entry when the control has no value. A hint could be a sample value or a brief description of the expected format.
	ariaPlaceholder?: string // Roles: textpox. Inherits into searchbox.
	// Indicates the current "pressed" state of toggle buttons. See related aria-checked and aria-selected.
	ariaPressed?: TriState // Roles: button.
	// Indicates that the element is not editable, but is otherwise operable. See related aria-disabled.
	ariaReadOnly?: boolean // Roles: checkbox, combobox, grid, gridcell, listbox, radiogroup, slider, spinbutton, textbox. Inherits into columnheader, rowheader, searchbox, switch, treegrid.
	// Indicates that user input is required on the element before a form may be submitted.
	ariaRequired?: boolean // Roles: checkbox, combobox, gridcell, listbox, radiogroup, spinbutton, textbox, tree. Inherits into columnheader, rowheader, searchbox, switch, treegrid
	// Indicates the current "selected" state of various widgets. See related aria-checked and aria-pressed.
	ariaSelected?: boolean // Roles: gridcell, option, row, tab. Inherits into columnheader, rowheader, treeitem.
	// Indicates if items in a table or grid are sorted in ascending or descending order.
	ariaSort?: 'ascending' | 'descending' | 'none' // default. Roles: columnheader, rowheader.
	// Defines the maximum allowed value for a range widget.
	ariaValueMax?: number // Roles: range, scrollbar, separator, slider, spinbutton. Inherits into meter, progressbar.
	// Defines the minimum allowed value for a range widget.
	ariaValueMin?: number // Roles: range, scrollbar, separator, slider, spinbutton. Inherits into meter, progressbar.
	// Defines the current value for a range widget. See related aria-valuetext.
	ariaValueNow?: number // Roles: range, scrollbar, separator, slider, spinbutton. Inherits into meter, progressbar.
	// Defines the human readable text alternative of aria-valuenow for a range widget.
	ariaValueText?: string // Roles: range, separator, spinbutton. Inherits into meter, progressbar, scrollbar, slider.
}

export type EventHandlerAttributes = {
	onAbort: (e: Event) => void
	onAutocomplete: (e: Event) => void
	onAutocompleteError: (e: Event) => void
	onBlur: (e: Event) => void
	oncancel: (e: Event) => void
	onCanPlay: (e: Event) => void
	onCanPlayThrough: (e: Event) => void
	onChange: (e: Event) => void
	onClick: (e: Event) => void
	onClose: (e: Event) => void
	onContextMenu: (e: Event) => void
	onCueChange: (e: Event) => void
	onDblClick: (e: Event) => void
	onDrag: (e: Event) => void
	onDragEnd: (e: Event) => void
	onDragEnter: (e: Event) => void
	onDragLeave: (e: Event) => void
	onDragOver: (e: Event) => void
	onDragStart: (e: Event) => void
	onDrop: (e: Event) => void
	onDurationChange: (e: Event) => void
	onEmptied: (e: Event) => void
	onEnded: (e: Event) => void
	onError: (e: Event) => void
	onFocus: (e: Event) => void
	onInput: (e: Event) => void
	onInvalid: (e: Event) => void
	onKeyDown: (e: Event) => void
	onKeyPress: (e: Event) => void
	onKeyUp: (e: Event) => void
	onLoad: (e: Event) => void
	onLoadedData: (e: Event) => void
	onLoadedMetadata: (e: Event) => void
	onLoadStart: (e: Event) => void
	onMouseDown: (e: Event) => void
	onMouseEnter: (e: Event) => void
	onMouseLeave: (e: Event) => void
	onMouseMove: (e: Event) => void
	onMouseOut: (e: Event) => void
	onMouseOver: (e: Event) => void
	onMouseUp: (e: Event) => void
	onMouseWheel: (e: Event) => void
	onPause: (e: Event) => void
	onPlay: (e: Event) => void
	onPlaying: (e: Event) => void
	onProgress: (e: Event) => void
	onRateChange: (e: Event) => void
	onReset: (e: Event) => void
	onResize: (e: Event) => void
	onScroll: (e: Event) => void
	onSeeked: (e: Event) => void
	onsSeeking: (e: Event) => void
	onSelect: (e: Event) => void
	onShow: (e: Event) => void
	onSort: (e: Event) => void
	onStalled: (e: Event) => void
	onSubmit: (e: Event) => void
	onSuspend: (e: Event) => void
	onTimeUpdate: (e: Event) => void
	onToggle: (e: Event) => void
	onVolumeChange: (e: Event) => void
	onWaiting: (e: Event) => void
}

export type AutoCapitalization =
	| 'characters'
	| 'none'
	| 'on'
	| 'sentences'
	| 'words'
	| 'off'

export type Directionality = 'auto' | 'ltr' | 'rtl'

export type EnterKeyHint =
	| 'done'
	| 'enter'
	| 'go'
	| 'next'
	| 'previous'
	| 'search'
	| 'send'

// For use with contentEditable
export type InputMode =
	| 'decimal'
	| 'email'
	| 'none'
	| 'numeric'
	| 'search'
	| 'tel'
	| 'text' // default
	| 'url'

// Can include data- attributes, aria-attributes, event handlers
export type GlobalAttributes = {
	// readonly accessKey?: string // NOT USED FOR ACCESSIBILITY REASONS
	readonly autoCapitalize?: AutoCapitalization // defaults to all lowercase (off)
	readonly autoFocus?: boolean // default false
	componentId: string // Required
	contentEditable?: boolean | 'inherit'
	readonly dir?: Directionality
	draggable?: boolean // Can element be dragged?
	enterKeyHint?: EnterKeyHint
	hidden?: boolean
	inputMode?: InputMode
	readonly lang?: string // See BCP-47: https://www.ietf.org/rfc/bcp/bcp47.txt
	// readonly nonce?: string // See Content Security Policy: https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP
	readonly spellCheck?: boolean // can element be checked for spelling errors
	readonly style?: Record<string, string> // CSS style declarations
	tabIndex?: number // - means focusable but not in seq kbd navigation, 0 focusable and in seq, + focus and seq in order of #
	readonly title?: string // advisory information
}

export type ItemPropAttributes = {
	readonly itemId?: string // unique global identifier
	readonly itemProp?: string // name-value pair used to add properties
	readonly itemRef?: string // a list of ids (not itemIds) for additional properties not under itemScope
	readonly itemScope?: boolean // used with itemType
	readonly itemType?: string // a valid URL of a vocabulary (e.g., schema.org) that describes item and its properties context
}

// LinkTypes (for `rel`) https://developer.mozilla.org/en-US/docs/Web/HTML/Link_types
/*
	- alternate: a, area, link
	- author: a, area, link
	- bookmark: a, area
	- canonical: link
	- external: a, area, form
	- help: a, area, form, link
	- icon: link (Apple fucks this up with apple-touch-icon and apple-touch-startup-image)
	- license: a, area, form, link
	- manifest: link
	- modulepreload: link
	- next: a, area, form, link
	- nofollow: a, area, form
	- noopener: a, area, form
	- noreferrer: a, area, form
	- pingback: link
	- prefetch: link
	- preload: link
	- prev: a, area, form, link
	- search: a, area, form, link
	- shortlink: link
	- stylesheet: link
	- tag: a, area
*/

export type LabelPosition = 'above' | 'after' | 'before' | 'below'

export type AnchorRelTypes =
	| 'alternate'
	| 'author'
	| 'bookmark'
	| 'external'
	| 'help'
	| 'license'
	| 'next'
	| 'nofollow'
	| 'noopener'
	| 'noreferrer'
	| 'prev'
	| 'search'
	| 'tag'

export type AreaRelTypes =
	| 'alternate'
	| 'author'
	| 'bookmark'
	| 'external'
	| 'help'
	| 'license'
	| 'next'
	| 'nofollow'
	| 'noopener'
	| 'noreferrer'
	| 'prev'
	| 'search'
	| 'tag'

export type FormRelTypes =
	| 'external'
	| 'help'
	| 'license'
	| 'next'
	| 'nofollow'
	| 'noopener'
	| 'noreferrer'
	| 'prev'
	| 'search'

export type LinkRelTypes =
	| 'alternate'
	| 'author'
	| 'canonical'
	| 'help'
	| 'icon'
	| 'license'
	| 'manifest'
	| 'modulepreload'
	| 'next'
	| 'pingback'
	| 'preconnect'
	| 'prefetch'
	| 'preload'
	| 'prev'
	| 'search'
	| 'shortlink'
	| 'stylesheet'

export type ReferrerPolicy =
	| 'no-referrer-when-downgrade'
	| 'no-referrer'
	| 'origin-when-cross-origin'
	| 'origin'
	| 'same-origin'
	| 'strict-origin-when-cross-origin'
	| 'strict-origin'
	| 'unsafe-url'

export type AnchorAttributes = {
	ariaAnchorRole?:
		| 'button'
		| 'checkbox'
		| 'menuitem'
		| 'menuitemcheckbox'
		| 'menuitemradio'
		| 'option'
		| 'radio'
		| 'switch'
		| 'tab'
		| 'treeitem'
	download?: string
	href?: string
	hrefLang?: string // See BCP-47: https://www.ietf.org/rfc/bcp/bcp47.txt
	referrerPolicy?: ReferrerPolicy
	rel?: AnchorRelTypes | Array<AnchorRelTypes>
	target?: Target
}

export type ButtonFormat = 'button' | 'card' | 'icon' | 'tab'

export type ButtonSize =
	| 'expand'
	| 'larger'
	| 'smaller'
	| 'large'
	| 'medium'
	| 'small'

export type ButtonType = 'button' | 'reset' | 'submit'

export type ButtonVariant =
	| 'accent-cool'
	| 'accent-warm'
	| 'base'
	| 'default'
	| 'outline-inverse'
	| 'outline'
	| 'secondary'
	| 'unstyled'

export type CitationType = 'APA' | 'MLA' | 'cite' | 'footnote'

export type EncType =
	| 'application/x-www-form-urlencoded'
	| 'multipart/form-data'
	| 'text/plain'

export type FormMethod = 'get' | 'post'

export type Target = '_self' | '_blank' | '_parent' | '_top'

export type LinkMediaType = 'all' | 'print' | 'screen' | 'speech'

export type KeyboardInputType = 'echoed' | 'key-combo' | 'system'

export type EmphasisLevel = 'double' | 'strong' | 'weak'

export type HeadBase = {
	href: string
	target?: Target
}

export type HeadLink = {
	href?: string
	media?: LinkMediaType
	rel?: LinkRelTypes
	type?: string // Media type
}

export type HeadMeta = {
	charset?: string
	content?: string
	name?: string
}

export type HeadStyle = {
	children?: string
	media?: string // media query defaults to all
	nonce?: string // for CSR
	title?: string // specifies alternative stylesheets
}

export type HeadAttributes = {
	base?: HeadBase
	link?: Array<HeadLink>
	meta?: Array<HeadMeta>
	style?: Array<HeadStyle>
	title?: string
}

export type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6

export type HeadingSize =
	| 'largest'
	| 'larger'
	| 'smaller'
	| 'smallest'
	| 'large'
	| 'medium'
	| 'small'

export type InTextType = 'narrative' | 'none' | 'number' | 'parenthetical'

export type LigatureVariant =
	| 'normal' // Activates the usual ligatures and contextual forms needed for correct rendering. The ligatures and forms activated depend on the font, language and kind of script. This is the default value.
	| 'none'
	| 'common-ligatures' // Activates most common ligatures, like for fi, ffi, th or similar. They correspond to the OpenType values liga and clig.
	| 'no-common-ligatures'
	| 'discretionary-ligatures' // Activates specific ligatures, specific to the font and defined by the type designer. They correspond to the OpenType values dlig
	| 'no-discretionary-ligatures'
	| 'historical-ligatures' // Activates the ligatures used historically, in old books, like the German tz digraph being displayed as ꜩ. They correspond to the OpenType values hlig. Two
	| 'no-historical-ligatures'
	| 'contextual' // Activates whether letters adapt to their context—that is, whether they adapt to the surrounding letters. These values correspond to the OpenType values calt.
	| 'no-contextual'

export type NumericVariant =
	| 'normal'
	| 'ordinal' // Forces the use of special glyphs for the ordinal markers, like 1st, 2nd, 3rd, 4th in English or a 1a in Italian. It corresponds to the OpenType values ordn.
	| 'slashed-zero' // Forces the use of a 0 with a slash; this is useful when a clear distinction between O and 0 is needed. It corresponds to the OpenType values zero.
	| 'lining-nums' // Activates the set of figures where numbers are all lying on the baseline. It corresponds to the OpenType values lnum.
	| 'oldstyle-nums' // Activates the set of figures where some numbers, like 3, 4, 7, 9 have descenders. It corresponds to the OpenType values onum.
	| 'proportional-nums' // Activates the set of figures where numbers are not all of the same size. It corresponds to the OpenType values pnum.
	| 'tabular-nums' // Activates the set of figures where numbers are all of the same size, allowing them to be easily aligned like in tables. It corresponds to the OpenType values tnum.
	| 'diagonal-fractions' // Activates the set of figures where the numerator and denominator are made smaller and separated by a slash. It corresponds to the OpenType values frac.
	| 'stacked-fractions' // Activates the set of figures where the numerator and denominator are made smaller, stacked and separated by a horizontal line. It corresponds to the OpenType values afrc.
	| 'inherit'

export type CapsVariant =
	| 'normal' // Deactivates of the use of alternate glyphs.
	| 'small-caps' // Enables display of small capitals (OpenType feature: smcp). Small-caps glyphs typically use the form of uppercase letters but are reduced to the size of lowercase letters.
	| 'all-small-caps' // Enables display of small capitals for both upper and lowercase letters (OpenType features: c2sc, smcp).
	| 'petite-caps' // Enables display of petite capitals (OpenType feature: pcap).
	| 'all-petite-caps' // Enables display of petite capitals for both upper and lowercase letters (OpenType features: c2pc, pcap).
	| 'unicase' // Enables display of mixture of small capitals for uppercase letters with normal lowercase letters (OpenType feature: unic).
	| 'titling-caps' // Enables display of titling capitals (OpenType feature: titl). Uppercase letter glyphs are often designed for use with lowercase letters. When used in all uppercase titling sequences they can appear too strong. Titling capitals are designed specifically for this situation.
	| 'inherit'
	| 'initial'
	| 'revert'
	| 'unset'

// Consider adding stylistic, styleset, character-variant, swash, ornaments, annotation enablers.
export type AlternateVariant =
	| 'normal' // This keyword deactivates alternate glyphs.
	| 'historical-forms' // Enables historical forms — glyphs that were common in the past but not today. It corresponds to the OpenType value hist.
	| 'inherit'
	| 'initial'
	| 'revert'
	| 'unset'

export type ReferentType =
	| FunctionalComponentType.Footnote
	| FunctionalComponentType.GlossaryEntry
	| FunctionalComponentType.BibliographyEntry

export type TypeFace = 'serif' | 'sans-serif' | 'monospace'

export type Validity = 'init' | 'invalid' | 'pending' | 'valid'

// ***** Renderer *****

export type RendererProps = {
	componentId?: string
}

// ***** Common components *****

export type FieldWrapperProps = {
	children: JSX.Element | Array<JSX.Element>
}

export type EditorProps = {
	children: JSX.Element | Array<JSX.Element>
}

export type HelpProps = {
	error: JSX.Element | Array<JSX.Element> | string
}

export type LabelProps = {
	children?: Array<string>
	fieldId: string
	id: string
	label?: string
}

export type ComponentRendererProps = {
	componentId: string
	merge?: Partial<ComponentProps>
}

// ***** Components *****

export type AbbreviationProps = GlobalAttributes &
	ItemPropAttributes &
	AnchorAttributes & {
		anchorStyle?: { [key: string]: string }
		readonly children: string
		readonly componentType: FunctionalComponentType.Abbreviation
		readonly expansion: string
		readonly role?: AriaRoles
	}

export type AnchorProps = GlobalAttributes &
	ItemPropAttributes &
	AnchorAttributes & {
		readonly children: string
		readonly componentType: FunctionalComponentType.Anchor
		readonly role?: AriaRoles
	}

export type ArticleProps = GlobalAttributes &
	ItemPropAttributes & {
		readonly childIds: Array<string>
		readonly componentType: FunctionalComponentType.Article
		readonly role?:
			| 'application'
			| 'document'
			| 'feed'
			| 'main'
			| 'none'
			| 'presentation'
			| 'region'
	}

export type AsideProps = GlobalAttributes &
	ItemPropAttributes & {
		readonly childIds: Array<string>
		readonly componentType: FunctionalComponentType.Aside
		readonly role?:
			| 'feed'
			| 'none'
			| 'note'
			| 'presentation'
			| 'region'
			| 'search'
	}

export type AudioProps = GlobalAttributes &
	ItemPropAttributes & {
		readonly autoPlay?: boolean
		readonly children: Array<JSX.Element> | JSX.Element
		readonly componentType: FunctionalComponentType.Audio
		readonly controls?: boolean
		readonly crossOrigin?: 'anonymous' | 'use-credentials'
		readonly loop?: boolean
		readonly muted?: boolean
		readonly preload?: 'auto' | 'metadata' | 'none'
		readonly src?: string
	}

export type BoxProps = GlobalAttributes &
	ItemPropAttributes & {
		readonly ariaHidden?: boolean
		readonly border?: Borders
		readonly childIds: Array<string>
		readonly componentType: WebComponentType.Box
		readonly invert?: boolean
		readonly padding?: Sizes
		readonly role?: AriaRoles
	}

export type ButtonProps = GlobalAttributes &
	ItemPropAttributes & {
		readonly ariaExpanded?: boolean
		readonly ariaHidden?: boolean
		readonly ariaPressed?: 'true' | 'false' | 'mixed'
		readonly autoFocus?: boolean
		readonly childIds: Array<string>
		readonly componentType: FunctionalComponentType.Button
		readonly disabled?: boolean
		readonly form?: string
		readonly formAction?: string
		readonly format: ButtonFormat
		readonly formEncType?: EncType
		readonly formMethod?: FormMethod
		readonly formNoValidate?: boolean
		readonly formTarget?: Target
		readonly label?: string
		readonly name?: string
		onBlur?: (e: Event) => void
		onClick?: (e: Event) => void
		onFocus?: (e: Event) => void
		onKeyDown?: (e: Event) => void
		readonly role?:
			| 'checkbox'
			| 'link'
			| 'menuitem'
			| 'menuitemcheckbox'
			| 'menuitemradio'
			| 'option'
			| 'radio'
			| 'switch'
			| 'tab'
		readonly size: ButtonSize
		readonly type?: ButtonType
		readonly value?: string
		readonly variant: ButtonVariant
	}

export type CenterProps = GlobalAttributes &
	ItemPropAttributes & {
		readonly ariaHidden?: boolean
		readonly childIds: Array<string>
		readonly componentType: WebComponentType.Center
		readonly gutter?: Sizes
		readonly role?: AriaRoles
	}

export type CitationProps = GlobalAttributes &
	ItemPropAttributes &
	AnchorAttributes & {
		readonly citationType: CitationType
		readonly componentType: FunctionalComponentType.Citation
		readonly children: string
		readonly inTextType: InTextType
		readonly referentId?: string
		readonly referentType?: ReferentType
		readonly role?: AriaRoles
	}

export type ClusterProps = GlobalAttributes &
	ItemPropAttributes & {
		readonly align?: string
		readonly ariaHidden?: boolean
		readonly childIds: Array<string>
		readonly componentType: WebComponentType.Cluster
		readonly gap?: Sizes
		readonly justify?: string
		readonly role?: AriaRoles
	}

export type CodeProps = GlobalAttributes &
	ItemPropAttributes &
	AnchorAttributes & {
		anchorStyle?: { [key: string]: string }
		readonly componentType: FunctionalComponentType.Code
		readonly children: string
		readonly role?: AriaRoles
	}

export type CodeBlockProps = GlobalAttributes &
	ItemPropAttributes & {
		readonly componentType: FunctionalComponentType.CodeBlock
		readonly children: string
		readonly language?: string // For syntax highlighting? Linting?
		readonly role?: AriaRoles
	}

export type CoverProps = GlobalAttributes &
	ItemPropAttributes & {
		readonly ariaHidden?: boolean
		readonly centeredId: string
		readonly childIds: Array<string>
		readonly componentType: WebComponentType.Cover
		readonly inset?: string
		readonly minHeight?: string
		readonly padding?: Sizes
		readonly role?: AriaRoles
	}

export type DefinedTermProps = GlobalAttributes &
	ItemPropAttributes &
	AnchorAttributes & {
		readonly abbreviation?: string
		anchorStyle?: { [key: string]: string }
		readonly componentType: FunctionalComponentType.DefinedTerm
		readonly children: string
		readonly role?: AriaRoles
		readonly term: string
	}

export type DeletionProps = GlobalAttributes &
	ItemPropAttributes &
	AnchorAttributes & {
		anchorStyle?: { [key: string]: string }
		// This attribute defines the URI of a resource that explains the change,
		// such as a link to meeting minutes or a ticket in a troubleshooting system.
		readonly cite?: string
		readonly componentType: FunctionalComponentType.Deletion
		readonly children: string
		// This attribute indicates the time and date of the change and must be a
		// valid date with an optional time string. If the value cannot be parsed
		// as a date with an optional time string, the element does not have an
		// associated time stamp.
		readonly dateTime?: string
		readonly role?: AriaRoles
	}

export type EmailAddressProps = GlobalAttributes &
	ItemPropAttributes &
	AnchorAttributes & {
		anchorStyle?: { [key: string]: string }
		readonly componentType: FunctionalComponentType.EmailAddress
		readonly emailAddress: string
		readonly mailto?: boolean
	}

export type EmphasizeProps = GlobalAttributes &
	ItemPropAttributes &
	AnchorAttributes & {
		anchorStyle?: { [key: string]: string }
		readonly componentType: FunctionalComponentType.Emphasize
		readonly children: string
		readonly level?: EmphasisLevel
		readonly role?: AriaRoles
	}

export type FieldsetProps = GlobalAttributes &
	ItemPropAttributes & {
		readonly childIds: Array<string>
		readonly componentType: FunctionalComponentType.Fieldset
		form?: string
		readonly legend?: string
		readonly name?: string
		readonly role?: 'none' | 'presentation' | 'radiogroup'
	}

export type FinePrintProps = GlobalAttributes &
	ItemPropAttributes & {
		readonly componentType: FunctionalComponentType.FinePrint
		readonly children: string
		readonly role?: AriaRoles
	}

export type FooterProps = GlobalAttributes &
	ItemPropAttributes & {
		readonly childIds: Array<string>
		readonly componentType: FunctionalComponentType.Footer
		readonly role?: 'group' | 'none' | 'presentation'
	}

export type FootnoteProps = {
	readonly componentType: FunctionalComponentType.Footnote
	readonly children: string
	readonly id: string
	readonly itemId?: string
	readonly itemProp?: string
	readonly itemRef?: string
	readonly itemType?: string
}

export type ForeignTermProps = GlobalAttributes &
	ItemPropAttributes &
	AnchorAttributes & {
		anchorStyle?: { [key: string]: string }
		readonly componentType: FunctionalComponentType.ForeignTerm
		readonly children: string
		readonly language?: string
		readonly role?: AriaRoles
		readonly translation?: string
	}

export type FormattedDateProps = GlobalAttributes &
	ItemPropAttributes &
	AnchorAttributes & {
		anchorStyle?: { [key: string]: string }
		readonly componentType: FunctionalComponentType.FormattedDate
		readonly date: string
		readonly format: DateOptions
		readonly role?: AriaRoles
	}

export type FormattedDateTimeProps = GlobalAttributes &
	ItemPropAttributes &
	AnchorAttributes & {
		anchorStyle?: { [key: string]: string }
		readonly componentType: FunctionalComponentType.FormattedDateTime
		readonly dateTime: string
		readonly format: DateTimeOptions
		readonly role?: AriaRoles
	}

export type FormattedTimeProps = GlobalAttributes &
	ItemPropAttributes &
	AnchorAttributes & {
		anchorStyle?: { [key: string]: string }
		readonly componentType: FunctionalComponentType.FormattedTime
		readonly format: TimeOptions
		readonly role?: AriaRoles
		readonly time: string
	}

export type FormProps = GlobalAttributes & {
	readonly acceptCharset?: string
	readonly action?: string
	readonly autoComplete?: boolean
	readonly childIds?: Array<string>
	readonly componentType: FunctionalComponentType.Form
	readonly encType?: EncType
	readonly method?: FormMethod | 'dialog'
	readonly name?: string
	readonly noValidate?: boolean
	onSubmit: (e: Event) => void
	readonly rel?: FormRelTypes | Array<FormRelTypes>
	readonly role?: 'none' | 'presentation' | 'search'
	readonly target?: Target
}

export type FrameProps = GlobalAttributes &
	ItemPropAttributes & {
		readonly ariaHidden?: boolean
		readonly childIds: Array<string>
		readonly componentType: WebComponentType.Frame
		readonly relativeHeight?: number
		readonly relativeWidth?: number
		readonly role?: AriaRoles
	}

export type GridProps = GlobalAttributes &
	ItemPropAttributes & {
		readonly ariaHidden?: boolean
		readonly childIds: Array<string>
		readonly componentType: WebComponentType.Grid
		readonly gap?: Sizes
		readonly minItemWidth?: string
		readonly role?: AriaRoles
	}

export type HeaderProps = GlobalAttributes &
	ItemPropAttributes & {
		readonly childIds: Array<string>
		readonly componentType: FunctionalComponentType.Header
		readonly role?: 'group' | 'none' | 'presentation'
	}

// Permitted content: PhrasingContent
export type HeadingProps = GlobalAttributes &
	ItemPropAttributes &
	AnchorAttributes & {
		anchorStyle?: { [key: string]: string }
		readonly children: string
		readonly componentType: FunctionalComponentType.Heading
		readonly level: HeadingLevel
		readonly role?: 'none' | 'presentation' | 'tab'
		readonly size?: HeadingSize
	}

export type InlineLinkProps = GlobalAttributes &
	ItemPropAttributes &
	AnchorAttributes & {
		readonly componentType: FunctionalComponentType.InlineLink
		readonly label: string
	}

export type InsertionProps = GlobalAttributes &
	ItemPropAttributes &
	AnchorAttributes & {
		anchorStyle?: { [key: string]: string }
		// This attribute defines the URI of a resource that explains the change,
		// such as a link to meeting minutes or a ticket in a troubleshooting system.
		readonly cite?: string
		readonly componentType: FunctionalComponentType.Insertion
		readonly children: string
		// This attribute indicates the time and date of the change and must be a
		// valid date with an optional time string. If the value cannot be parsed
		// as a date with an optional time string, the element does not have an
		// associated time stamp.
		readonly dateTime?: string
		readonly role?: AriaRoles
	}

export type ItemPropProps = {
	readonly componentType: FunctionalComponentType.ItemProp
	readonly children: string
	readonly componentId: string
	readonly itemId?: string
	readonly itemProp?: string
	readonly itemRef?: string
}

export type ItemScopeProps = {
	readonly componentType: FunctionalComponentType.ItemScope
	readonly childIds?: Array<string>
	readonly children?: string
	readonly componentId: string
	readonly itemId?: string
	readonly itemRef?: string
	readonly itemType?: string
}

export type KeyProps = GlobalAttributes &
	ItemPropAttributes & {
		readonly componentType: FunctionalComponentType.Key
		readonly key: KeyboardKey
	}

export type KeyboardInputProps = GlobalAttributes &
	ItemPropAttributes &
	AnchorAttributes & {
		anchorStyle?: { [key: string]: string }
		readonly componentType: FunctionalComponentType.KeyboardInput
		readonly children: string
		readonly nesting?: KeyboardInputType
		readonly role?: AriaRoles
	}

export type ListItemProps = {
	readonly componentType: FunctionalComponentType.ListItem
	readonly children: string
	readonly id: string
	readonly itemId?: string
	readonly itemProp?: string
	readonly itemRef?: string
	readonly itemType?: string
	readonly level?: number
}

export type MainProps = GlobalAttributes &
	ItemPropAttributes & {
		readonly childIds: Array<string>
		readonly componentType: FunctionalComponentType.Main
		readonly role: undefined
	}

export type MarkRelevantProps = GlobalAttributes &
	ItemPropAttributes &
	AnchorAttributes & {
		anchorStyle?: { [key: string]: string }
		readonly componentType: FunctionalComponentType.MarkRelevant
		readonly children: string
		readonly role?: AriaRoles
	}

export type NavProps = GlobalAttributes &
	ItemPropAttributes & {
		readonly childIds: Array<string>
		readonly componentType: FunctionalComponentType.Nav
		readonly role: undefined
	}

export type PageProps = {
	components: Record<string, ComponentProps>
	head?: HeadAttributes
	id: string
	name: string
	rootId: string
	Site: SiteProps
	title?: string
}

export type ParagraphProps = GlobalAttributes &
	ItemPropAttributes & {
		readonly componentType: FunctionalComponentType.Paragraph
		readonly children: string
		readonly role?: AriaRoles
		state: { config: Partial<PageProps> }
	}

export type PhoneNumberProps = GlobalAttributes &
	ItemPropAttributes &
	AnchorAttributes & {
		anchorStyle?: { [key: string]: string }
		readonly componentType: FunctionalComponentType.PhoneNumber
		readonly phoneNumber: string
		readonly tel?: boolean
	}

export type QuotationProps = GlobalAttributes &
	ItemPropAttributes &
	AnchorAttributes & {
		anchorStyle?: { [key: string]: string }
		// The value of this attribute is a URL that designates a source document or
		// message for the information quoted. This attribute is intended to point to
		// information explaining the context or the reference for the quote.
		readonly cite?: string
		readonly componentType: FunctionalComponentType.Quotation
		readonly children: string
		readonly role?: AriaRoles
	}

export type ReelProps = GlobalAttributes &
	ItemPropAttributes & {
		readonly ariaHidden?: boolean
		readonly childIds: Array<string>
		readonly componentType: WebComponentType.Reel
		readonly gap?: Sizes
		readonly height?: string
		readonly hideBar?: boolean
		readonly itemWidth?: string
		readonly role?: AriaRoles
		readonly thumbColor?: string
		readonly trackColor?: string
	}

export type RubyProps = GlobalAttributes &
	ItemPropAttributes &
	AnchorAttributes & {
		anchorStyle?: { [key: string]: string }
		readonly componentType: FunctionalComponentType.Ruby
		readonly children: string
		readonly role?: AriaRoles
	}

export type RuleProps = GlobalAttributes & {
	readonly componentType: FunctionalComponentType.Rule
}

export type SampleProps = GlobalAttributes &
	ItemPropAttributes &
	AnchorAttributes & {
		anchorStyle?: { [key: string]: string }
		readonly componentType: FunctionalComponentType.Sample
		readonly children: string
		readonly role?: AriaRoles
	}

export type SectionProps = GlobalAttributes &
	ItemPropAttributes & {
		readonly childIds: Array<string>
		readonly componentType: FunctionalComponentType.Section
		readonly role?:
			| 'alert'
			| 'alertdialog'
			| 'application'
			| 'banner'
			| 'complementary'
			| 'contentinfo'
			| 'dialog'
			| 'document'
			| 'feed'
			| 'log'
			| 'main'
			| 'marquee'
			| 'navigation'
			| 'none'
			| 'note'
			| 'presentation'
			| 'search'
			| 'status'
			| 'tabpanel'
	}

export type SidebarProps = GlobalAttributes &
	ItemPropAttributes & {
		readonly ariaHidden?: boolean
		readonly childIds: Array<string>
		readonly componentType: WebComponentType.Sidebar
		readonly gutter?: Sizes
		readonly minWidth?: string
		readonly noStretch?: boolean
		readonly onRight?: boolean
		readonly role?: AriaRoles
		readonly sideWidth?: string
	}

export type SiteProps = {
	head: HeadAttributes
	id: string
	title: string
	titleSeparator: string
	titleSiteFirst?: boolean
}

export type SmallTextProps = GlobalAttributes &
	ItemPropAttributes &
	AnchorAttributes & {
		anchorStyle?: { [key: string]: string }
		readonly componentType: FunctionalComponentType.SmallText
		readonly children: string
		readonly role?: AriaRoles
	}

export type SourceProps = GlobalAttributes &
	ItemPropAttributes & {
		readonly componentType: FunctionalComponentType.Source
		readonly media?: string // media query, e.g., (min-width: 800px)
		readonly role?: undefined
		readonly sizes?: string // comma-separated list of media condition-length pairs - determines which file in srcset to use (use width dimension descriptors in srcset)
		readonly src?: string // for Audio and Video, ignored when Picture
		readonly srcSet?: string // comma-separated list of possible images, each with URL, width descriptor (e.g., 300w), pixel density descriptor (e.g., 3x - defaults to 1x)
		readonly type?: string // MIME media type, optionally with a codecs parameter (see https://developer.mozilla.org/en-US/docs/Web/Media/Formats/Image_types, https://developer.mozilla.org/en-US/docs/Web/Media/Formats/codecs_parameter)
	}

export type StackProps = GlobalAttributes &
	ItemPropAttributes & {
		readonly ariaHidden?: boolean
		readonly childIds: Array<string>
		readonly componentType: WebComponentType.Stack
		readonly gap?: Sizes
		readonly nest?: boolean
		readonly role?: AriaRoles
		readonly splitAt?: number
	}

// Child of Audio, Picture, or Video component. Empty element.
// Must be placed before any flow content or Track component (Audio or Video)
// and before the Image component in a Picture component.
// https://developer.mozilla.org/en-US/docs/Web/HTML/Element/source
// With the <picture> element, you must always include an <img> with a fallback image, with an alt attribute to ensure accessibility

export type SubscriptProps = GlobalAttributes &
	ItemPropAttributes &
	AnchorAttributes & {
		anchorStyle?: { [key: string]: string }
		readonly componentType: FunctionalComponentType.Subscript
		readonly children: string
		readonly role?: AriaRoles
	}

export type SuperscriptProps = GlobalAttributes &
	ItemPropAttributes &
	AnchorAttributes & {
		anchorStyle?: { [key: string]: string }
		readonly componentType: FunctionalComponentType.Superscript
		readonly children: string
		readonly role?: AriaRoles
	}

export type SwitcherProps = GlobalAttributes &
	ItemPropAttributes & {
		readonly ariaHidden?: boolean
		readonly childIds: Array<string>
		readonly componentType: WebComponentType.Switcher
		readonly gap?: Sizes
		readonly role?: AriaRoles
		readonly rowLimit?: 2 | 3 | 4 | 5 | 6 | 7 | 8
		readonly threshold?: string
	}

export type TextFieldProps = GlobalAttributes &
	ItemPropAttributes & {
		readonly ariaAutocomplete?: AutocompletionType
		readonly ariaControls?: string
		readonly ariaDescribedBy?: string
		readonly ariaExpanded?: boolean
		readonly ariaHasPopup?: boolean | PopupType
		readonly ariaRequired?: boolean
		readonly autoComplete?: boolean
		readonly autoExpand?: boolean
		readonly cols?: number
		readonly componentType: WebComponentType.TextField
		readonly defaultValue?: string
		readonly disabled?: boolean
		readonly form?: string
		readonly label?: string
		readonly list?: string
		readonly maxLength?: number
		readonly minLength?: number
		readonly name: string
		onBlur?: (e: Event) => void
		onChange?: (e: Event) => void
		onFocus?: (e: Event) => void
		onInput?: (e: Event) => void
		readonly pattern?: string
		readonly placeholder?: string
		readonly readOnly?: boolean
		ref?: HTMLInputElement
		readonly required?: boolean
		readonly resize?: 'both' | 'horizontal' | 'none' | 'vertical'
		readonly role?: undefined
		readonly rows?: number
		readonly size?: number
		readonly spellCheck?: boolean
		readonly style?: Record<string, string>
		readonly title?: string
		updateState?: (name: string, value: TextFieldState) => void
		readonly wrap?: 'hard' | 'soft' | 'off'
	}

export type TopperProps = GlobalAttributes &
	ItemPropAttributes & {
		readonly ariaHidden?: boolean
		readonly breakout?: boolean
		readonly childIds: Array<string>
		readonly componentType: WebComponentType.Topper
		readonly fixed?: boolean
		readonly margin?: Sizes
		readonly role?: AriaRoles
	}

export type TypographyProps = GlobalAttributes &
	ItemPropAttributes & {
		readonly children: string
		readonly componentType: FunctionalComponentType.Typography
		readonly role?: AriaRoles
		readonly size?: HeadingSize
		readonly face?: TypeFace
		readonly isItalic?: boolean
		readonly isBold?: boolean
		readonly fontVariantNumeric?: Array<NumericVariant>
		readonly fontVariantCaps?: Array<CapsVariant>
		readonly fontVariantLigatures?: Array<LigatureVariant>
		readonly fontVariantAlternates?: Array<AlternateVariant>
	}

export type VariableProps = GlobalAttributes &
	ItemPropAttributes &
	AnchorAttributes & {
		anchorStyle?: { [key: string]: string }
		readonly componentType: FunctionalComponentType.Variable
		readonly role?: AriaRoles
		readonly variable: string
	}

export type ComponentProps =
	| AbbreviationProps
	| AnchorProps
	| ArticleProps
	| AsideProps
	| AudioProps
	| BoxProps
	| ButtonProps
	| CenterProps
	| CitationProps
	| ClusterProps
	| CodeBlockProps
	| CodeProps
	| CoverProps
	| DefinedTermProps
	| DeletionProps
	| EmailAddressProps
	| EmphasizeProps
	| FieldsetProps
	| FinePrintProps
	| FooterProps
	| FootnoteProps
	| ForeignTermProps
	| FormattedDateProps
	| FormattedDateTimeProps
	| FormattedTimeProps
	| FormProps
	| FrameProps
	| GridProps
	| HeaderProps
	| HeadingProps
	| InlineLinkProps
	| InsertionProps
	| ItemPropProps
	| ItemScopeProps
	| KeyboardInputProps
	| KeyProps
	| ListItemProps
	| MainProps
	| MarkRelevantProps
	| NavProps
	| ParagraphProps
	| PhoneNumberProps
	| QuotationProps
	| ReelProps
	| RubyProps
	| SampleProps
	| SectionProps
	| SidebarProps
	| SmallTextProps
	| SourceProps
	| StackProps
	| SubscriptProps
	| SuperscriptProps
	| SwitcherProps
	| TextFieldProps
	| TopperProps
	| TypographyProps
	| VariableProps
