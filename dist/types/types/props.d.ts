import type { JSX } from '../stencil-public-runtime';
import type { DateOptions, DateTimeOptions, TimeOptions } from './dates';
import { AutocompletionType, FunctionalComponentType, KeyboardKey, PopupType, WebComponentType } from './enums';
import type { TextFieldState } from './state';
export declare type AriaRoles = 'alert' | 'alertdialog' | 'application' | 'article' | 'banner' | 'blockquote' | 'button' | 'caption' | 'cell' | 'checkbox' | 'code' | 'columnheader' | 'combobox' | 'complementary' | 'contentinfo' | 'definition' | 'deletion' | 'dialog' | 'document' | 'emphasis' | 'feed' | 'figure' | 'form' | 'generic' | 'grid' | 'gridcell' | 'group' | 'heading' | 'img' | 'insertion' | 'link' | 'list' | 'listbox' | 'listitem' | 'log' | 'main' | 'marquee' | 'math' | 'meter' | 'menu' | 'menubar' | 'menuitem' | 'menuitemcheckbox' | 'menuitemradio' | 'navigation' | 'none' | 'note' | 'option' | 'paragraph' | 'presentation' | 'progressbar' | 'radio' | 'radiogroup' | 'region' | 'row' | 'rowgroup' | 'rowheader' | 'scrollbar' | 'search' | 'searchbox' | 'separator' | 'slider' | 'spinbutton' | 'status' | 'strong' | 'subscript' | 'superscript' | 'switch' | 'tab' | 'table' | 'tablist' | 'tabpanel' | 'term' | 'textbox' | 'time' | 'timer' | 'toolbar' | 'tooltip' | 'tree' | 'treegrid' | 'treeitem';
export declare type TriState = boolean | 'mixed';
export declare type Sizes = -5 | -4 | -3 | -2 | -1 | 0 | 1 | 2 | 3 | 4 | 5;
export declare type Borders = 'thick' | 'thin';
export declare type PopupOptions = false | 'false' | true | 'true' | 'menu' | 'listbox' | 'tree' | 'grid' | 'dialog';
export declare type AriaLiveRegionAttributes = {
  ariaAtomic: boolean;
  ariaBusy: boolean;
  ariaLive: 'assertive' | 'off' | 'polite';
  ariaRelevant: 'additions' | 'additions text' | 'all' | 'removals' | 'text';
};
export declare type AriaRelationshipAttributes = {
  ariaActiveDescendant: string;
  ariaColCount: number;
  ariaColIndex: number;
  ariaColSpan: number;
  ariaControls: string;
  ariaDescribedBy: string;
  ariaDetails: string;
  ariaErrorMessage: string;
  ariaFlowTo: string;
  ariaLabelledBy: string;
  ariaOwns: string;
  ariaPosInset: number;
  ariaRowCount: number;
  ariaRowIndex: number;
  ariaRowSpan: number;
  ariaSetSize: number;
};
export declare type AriaWidgetAttributes = {
  ariaAutocomplete?: 'both' | 'inline' | 'list' | 'none';
  ariaChecked?: TriState;
  ariaDisabled?: boolean;
  ariaErrorMessage?: string;
  ariaExpanded?: boolean;
  ariaHasPopup?: PopupOptions;
  ariaHidden?: boolean;
  ariaInvalid?: boolean | 'grammar' | 'spelling';
  ariaLabel?: string;
  ariaLevel?: number;
  ariaModal?: boolean;
  ariaMultiline?: boolean;
  ariaMultiSelectable?: boolean;
  ariaOrientation?: 'horizontal' | 'vertical';
  ariaPlaceholder?: string;
  ariaPressed?: TriState;
  ariaReadOnly?: boolean;
  ariaRequired?: boolean;
  ariaSelected?: boolean;
  ariaSort?: 'ascending' | 'descending' | 'none';
  ariaValueMax?: number;
  ariaValueMin?: number;
  ariaValueNow?: number;
  ariaValueText?: string;
};
export declare type EventHandlerAttributes = {
  onAbort: (e: Event) => void;
  onAutocomplete: (e: Event) => void;
  onAutocompleteError: (e: Event) => void;
  onBlur: (e: Event) => void;
  oncancel: (e: Event) => void;
  onCanPlay: (e: Event) => void;
  onCanPlayThrough: (e: Event) => void;
  onChange: (e: Event) => void;
  onClick: (e: Event) => void;
  onClose: (e: Event) => void;
  onContextMenu: (e: Event) => void;
  onCueChange: (e: Event) => void;
  onDblClick: (e: Event) => void;
  onDrag: (e: Event) => void;
  onDragEnd: (e: Event) => void;
  onDragEnter: (e: Event) => void;
  onDragLeave: (e: Event) => void;
  onDragOver: (e: Event) => void;
  onDragStart: (e: Event) => void;
  onDrop: (e: Event) => void;
  onDurationChange: (e: Event) => void;
  onEmptied: (e: Event) => void;
  onEnded: (e: Event) => void;
  onError: (e: Event) => void;
  onFocus: (e: Event) => void;
  onInput: (e: Event) => void;
  onInvalid: (e: Event) => void;
  onKeyDown: (e: Event) => void;
  onKeyPress: (e: Event) => void;
  onKeyUp: (e: Event) => void;
  onLoad: (e: Event) => void;
  onLoadedData: (e: Event) => void;
  onLoadedMetadata: (e: Event) => void;
  onLoadStart: (e: Event) => void;
  onMouseDown: (e: Event) => void;
  onMouseEnter: (e: Event) => void;
  onMouseLeave: (e: Event) => void;
  onMouseMove: (e: Event) => void;
  onMouseOut: (e: Event) => void;
  onMouseOver: (e: Event) => void;
  onMouseUp: (e: Event) => void;
  onMouseWheel: (e: Event) => void;
  onPause: (e: Event) => void;
  onPlay: (e: Event) => void;
  onPlaying: (e: Event) => void;
  onProgress: (e: Event) => void;
  onRateChange: (e: Event) => void;
  onReset: (e: Event) => void;
  onResize: (e: Event) => void;
  onScroll: (e: Event) => void;
  onSeeked: (e: Event) => void;
  onsSeeking: (e: Event) => void;
  onSelect: (e: Event) => void;
  onShow: (e: Event) => void;
  onSort: (e: Event) => void;
  onStalled: (e: Event) => void;
  onSubmit: (e: Event) => void;
  onSuspend: (e: Event) => void;
  onTimeUpdate: (e: Event) => void;
  onToggle: (e: Event) => void;
  onVolumeChange: (e: Event) => void;
  onWaiting: (e: Event) => void;
};
export declare type AutoCapitalization = 'characters' | 'none' | 'on' | 'sentences' | 'words' | 'off';
export declare type Directionality = 'auto' | 'ltr' | 'rtl';
export declare type EnterKeyHint = 'done' | 'enter' | 'go' | 'next' | 'previous' | 'search' | 'send';
export declare type InputMode = 'decimal' | 'email' | 'none' | 'numeric' | 'search' | 'tel' | 'text' | 'url';
export declare type GlobalAttributes = {
  readonly autoCapitalize?: AutoCapitalization;
  readonly autoFocus?: boolean;
  componentId: string;
  contentEditable?: boolean | 'inherit';
  readonly dir?: Directionality;
  draggable?: boolean;
  enterKeyHint?: EnterKeyHint;
  hidden?: boolean;
  inputMode?: InputMode;
  readonly lang?: string;
  readonly spellCheck?: boolean;
  readonly style?: Record<string, string>;
  tabIndex?: number;
  readonly title?: string;
};
export declare type ItemPropAttributes = {
  readonly itemId?: string;
  readonly itemProp?: string;
  readonly itemRef?: string;
  readonly itemScope?: boolean;
  readonly itemType?: string;
};
export declare type LabelPosition = 'above' | 'after' | 'before' | 'below';
export declare type AnchorRelTypes = 'alternate' | 'author' | 'bookmark' | 'external' | 'help' | 'license' | 'next' | 'nofollow' | 'noopener' | 'noreferrer' | 'prev' | 'search' | 'tag';
export declare type AreaRelTypes = 'alternate' | 'author' | 'bookmark' | 'external' | 'help' | 'license' | 'next' | 'nofollow' | 'noopener' | 'noreferrer' | 'prev' | 'search' | 'tag';
export declare type FormRelTypes = 'external' | 'help' | 'license' | 'next' | 'nofollow' | 'noopener' | 'noreferrer' | 'prev' | 'search';
export declare type LinkRelTypes = 'alternate' | 'author' | 'canonical' | 'help' | 'icon' | 'license' | 'manifest' | 'modulepreload' | 'next' | 'pingback' | 'preconnect' | 'prefetch' | 'preload' | 'prev' | 'search' | 'shortlink' | 'stylesheet';
export declare type ReferrerPolicy = 'no-referrer-when-downgrade' | 'no-referrer' | 'origin-when-cross-origin' | 'origin' | 'same-origin' | 'strict-origin-when-cross-origin' | 'strict-origin' | 'unsafe-url';
export declare type AnchorAttributes = {
  ariaAnchorRole?: 'button' | 'checkbox' | 'menuitem' | 'menuitemcheckbox' | 'menuitemradio' | 'option' | 'radio' | 'switch' | 'tab' | 'treeitem';
  download?: string;
  href?: string;
  hrefLang?: string;
  referrerPolicy?: ReferrerPolicy;
  rel?: AnchorRelTypes | Array<AnchorRelTypes>;
  target?: Target;
};
export declare type ButtonFormat = 'button' | 'card' | 'icon' | 'tab';
export declare type ButtonSize = 'expand' | 'larger' | 'smaller' | 'large' | 'medium' | 'small';
export declare type ButtonType = 'button' | 'reset' | 'submit';
export declare type ButtonVariant = 'accent-cool' | 'accent-warm' | 'base' | 'default' | 'outline-inverse' | 'outline' | 'secondary' | 'unstyled';
export declare type CitationType = 'APA' | 'MLA' | 'cite' | 'footnote';
export declare type EncType = 'application/x-www-form-urlencoded' | 'multipart/form-data' | 'text/plain';
export declare type FormMethod = 'get' | 'post';
export declare type Target = '_self' | '_blank' | '_parent' | '_top';
export declare type LinkMediaType = 'all' | 'print' | 'screen' | 'speech';
export declare type KeyboardInputType = 'echoed' | 'key-combo' | 'system';
export declare type EmphasisLevel = 'double' | 'strong' | 'weak';
export declare type HeadBase = {
  href: string;
  target?: Target;
};
export declare type HeadLink = {
  href?: string;
  media?: LinkMediaType;
  rel?: LinkRelTypes;
  type?: string;
};
export declare type HeadMeta = {
  charset?: string;
  content?: string;
  name?: string;
};
export declare type HeadStyle = {
  children?: string;
  media?: string;
  nonce?: string;
  title?: string;
};
export declare type HeadAttributes = {
  base?: HeadBase;
  link?: Array<HeadLink>;
  meta?: Array<HeadMeta>;
  style?: Array<HeadStyle>;
  title?: string;
};
export declare type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6;
export declare type HeadingSize = 'largest' | 'larger' | 'smaller' | 'smallest' | 'large' | 'medium' | 'small';
export declare type InTextType = 'narrative' | 'none' | 'number' | 'parenthetical';
export declare type LigatureVariant = 'normal' | 'none' | 'common-ligatures' | 'no-common-ligatures' | 'discretionary-ligatures' | 'no-discretionary-ligatures' | 'historical-ligatures' | 'no-historical-ligatures' | 'contextual' | 'no-contextual';
export declare type NumericVariant = 'normal' | 'ordinal' | 'slashed-zero' | 'lining-nums' | 'oldstyle-nums' | 'proportional-nums' | 'tabular-nums' | 'diagonal-fractions' | 'stacked-fractions' | 'inherit';
export declare type CapsVariant = 'normal' | 'small-caps' | 'all-small-caps' | 'petite-caps' | 'all-petite-caps' | 'unicase' | 'titling-caps' | 'inherit' | 'initial' | 'revert' | 'unset';
export declare type AlternateVariant = 'normal' | 'historical-forms' | 'inherit' | 'initial' | 'revert' | 'unset';
export declare type ReferentType = FunctionalComponentType.Footnote | FunctionalComponentType.GlossaryEntry | FunctionalComponentType.BibliographyEntry;
export declare type TypeFace = 'serif' | 'sans-serif' | 'monospace';
export declare type Validity = 'init' | 'invalid' | 'pending' | 'valid';
export declare type RendererProps = {
  componentId?: string;
};
export declare type FieldWrapperProps = {
  children: JSX.Element | Array<JSX.Element>;
};
export declare type EditorProps = {
  children: JSX.Element | Array<JSX.Element>;
};
export declare type HelpProps = {
  error: JSX.Element | Array<JSX.Element> | string;
};
export declare type LabelProps = {
  children?: Array<string>;
  fieldId: string;
  id: string;
  label?: string;
};
export declare type ComponentRendererProps = {
  componentId: string;
  merge?: Partial<ComponentProps>;
};
export declare type AbbreviationProps = GlobalAttributes & ItemPropAttributes & AnchorAttributes & {
  anchorStyle?: {
    [key: string]: string;
  };
  readonly children: string;
  readonly componentType: FunctionalComponentType.Abbreviation;
  readonly expansion: string;
  readonly role?: AriaRoles;
};
export declare type AnchorProps = GlobalAttributes & ItemPropAttributes & AnchorAttributes & {
  readonly children: string;
  readonly componentType: FunctionalComponentType.Anchor;
  readonly role?: AriaRoles;
};
export declare type ArticleProps = GlobalAttributes & ItemPropAttributes & {
  readonly childIds: Array<string>;
  readonly componentType: FunctionalComponentType.Article;
  readonly role?: 'application' | 'document' | 'feed' | 'main' | 'none' | 'presentation' | 'region';
};
export declare type AsideProps = GlobalAttributes & ItemPropAttributes & {
  readonly childIds: Array<string>;
  readonly componentType: FunctionalComponentType.Aside;
  readonly role?: 'feed' | 'none' | 'note' | 'presentation' | 'region' | 'search';
};
export declare type AudioProps = GlobalAttributes & ItemPropAttributes & {
  readonly autoPlay?: boolean;
  readonly children: Array<JSX.Element> | JSX.Element;
  readonly componentType: FunctionalComponentType.Audio;
  readonly controls?: boolean;
  readonly crossOrigin?: 'anonymous' | 'use-credentials';
  readonly loop?: boolean;
  readonly muted?: boolean;
  readonly preload?: 'auto' | 'metadata' | 'none';
  readonly src?: string;
};
export declare type BoxProps = GlobalAttributes & ItemPropAttributes & {
  readonly ariaHidden?: boolean;
  readonly border?: Borders;
  readonly childIds: Array<string>;
  readonly componentType: WebComponentType.Box;
  readonly invert?: boolean;
  readonly padding?: Sizes;
  readonly role?: AriaRoles;
};
export declare type ButtonProps = GlobalAttributes & ItemPropAttributes & {
  readonly ariaExpanded?: boolean;
  readonly ariaHidden?: boolean;
  readonly ariaPressed?: 'true' | 'false' | 'mixed';
  readonly autoFocus?: boolean;
  readonly childIds: Array<string>;
  readonly componentType: FunctionalComponentType.Button;
  readonly disabled?: boolean;
  readonly form?: string;
  readonly formAction?: string;
  readonly format: ButtonFormat;
  readonly formEncType?: EncType;
  readonly formMethod?: FormMethod;
  readonly formNoValidate?: boolean;
  readonly formTarget?: Target;
  readonly label?: string;
  readonly name?: string;
  onBlur?: (e: Event) => void;
  onClick?: (e: Event) => void;
  onFocus?: (e: Event) => void;
  onKeyDown?: (e: Event) => void;
  readonly role?: 'checkbox' | 'link' | 'menuitem' | 'menuitemcheckbox' | 'menuitemradio' | 'option' | 'radio' | 'switch' | 'tab';
  readonly size: ButtonSize;
  readonly type?: ButtonType;
  readonly value?: string;
  readonly variant: ButtonVariant;
};
export declare type CenterProps = GlobalAttributes & ItemPropAttributes & {
  readonly ariaHidden?: boolean;
  readonly childIds: Array<string>;
  readonly componentType: WebComponentType.Center;
  readonly gutter?: Sizes;
  readonly role?: AriaRoles;
};
export declare type CitationProps = GlobalAttributes & ItemPropAttributes & AnchorAttributes & {
  readonly citationType: CitationType;
  readonly componentType: FunctionalComponentType.Citation;
  readonly children: string;
  readonly inTextType: InTextType;
  readonly referentId?: string;
  readonly referentType?: ReferentType;
  readonly role?: AriaRoles;
};
export declare type ClusterProps = GlobalAttributes & ItemPropAttributes & {
  readonly align?: string;
  readonly ariaHidden?: boolean;
  readonly childIds: Array<string>;
  readonly componentType: WebComponentType.Cluster;
  readonly gap?: Sizes;
  readonly justify?: string;
  readonly role?: AriaRoles;
};
export declare type CodeProps = GlobalAttributes & ItemPropAttributes & AnchorAttributes & {
  anchorStyle?: {
    [key: string]: string;
  };
  readonly componentType: FunctionalComponentType.Code;
  readonly children: string;
  readonly role?: AriaRoles;
};
export declare type CodeBlockProps = GlobalAttributes & ItemPropAttributes & {
  readonly componentType: FunctionalComponentType.CodeBlock;
  readonly children: string;
  readonly language?: string;
  readonly role?: AriaRoles;
};
export declare type CoverProps = GlobalAttributes & ItemPropAttributes & {
  readonly ariaHidden?: boolean;
  readonly centeredId: string;
  readonly childIds: Array<string>;
  readonly componentType: WebComponentType.Cover;
  readonly inset?: string;
  readonly minHeight?: string;
  readonly padding?: Sizes;
  readonly role?: AriaRoles;
};
export declare type DefinedTermProps = GlobalAttributes & ItemPropAttributes & AnchorAttributes & {
  readonly abbreviation?: string;
  anchorStyle?: {
    [key: string]: string;
  };
  readonly componentType: FunctionalComponentType.DefinedTerm;
  readonly children: string;
  readonly role?: AriaRoles;
  readonly term: string;
};
export declare type DeletionProps = GlobalAttributes & ItemPropAttributes & AnchorAttributes & {
  anchorStyle?: {
    [key: string]: string;
  };
  readonly cite?: string;
  readonly componentType: FunctionalComponentType.Deletion;
  readonly children: string;
  readonly dateTime?: string;
  readonly role?: AriaRoles;
};
export declare type EmailAddressProps = GlobalAttributes & ItemPropAttributes & AnchorAttributes & {
  anchorStyle?: {
    [key: string]: string;
  };
  readonly componentType: FunctionalComponentType.EmailAddress;
  readonly emailAddress: string;
  readonly mailto?: boolean;
};
export declare type EmphasizeProps = GlobalAttributes & ItemPropAttributes & AnchorAttributes & {
  anchorStyle?: {
    [key: string]: string;
  };
  readonly componentType: FunctionalComponentType.Emphasize;
  readonly children: string;
  readonly level?: EmphasisLevel;
  readonly role?: AriaRoles;
};
export declare type FieldsetProps = GlobalAttributes & ItemPropAttributes & {
  readonly childIds: Array<string>;
  readonly componentType: FunctionalComponentType.Fieldset;
  form?: string;
  readonly legend?: string;
  readonly name?: string;
  readonly role?: 'none' | 'presentation' | 'radiogroup';
};
export declare type FinePrintProps = GlobalAttributes & ItemPropAttributes & {
  readonly componentType: FunctionalComponentType.FinePrint;
  readonly children: string;
  readonly role?: AriaRoles;
};
export declare type FooterProps = GlobalAttributes & ItemPropAttributes & {
  readonly childIds: Array<string>;
  readonly componentType: FunctionalComponentType.Footer;
  readonly role?: 'group' | 'none' | 'presentation';
};
export declare type FootnoteProps = {
  readonly componentType: FunctionalComponentType.Footnote;
  readonly children: string;
  readonly id: string;
  readonly itemId?: string;
  readonly itemProp?: string;
  readonly itemRef?: string;
  readonly itemType?: string;
};
export declare type ForeignTermProps = GlobalAttributes & ItemPropAttributes & AnchorAttributes & {
  anchorStyle?: {
    [key: string]: string;
  };
  readonly componentType: FunctionalComponentType.ForeignTerm;
  readonly children: string;
  readonly language?: string;
  readonly role?: AriaRoles;
  readonly translation?: string;
};
export declare type FormattedDateProps = GlobalAttributes & ItemPropAttributes & AnchorAttributes & {
  anchorStyle?: {
    [key: string]: string;
  };
  readonly componentType: FunctionalComponentType.FormattedDate;
  readonly date: string;
  readonly format: DateOptions;
  readonly role?: AriaRoles;
};
export declare type FormattedDateTimeProps = GlobalAttributes & ItemPropAttributes & AnchorAttributes & {
  anchorStyle?: {
    [key: string]: string;
  };
  readonly componentType: FunctionalComponentType.FormattedDateTime;
  readonly dateTime: string;
  readonly format: DateTimeOptions;
  readonly role?: AriaRoles;
};
export declare type FormattedTimeProps = GlobalAttributes & ItemPropAttributes & AnchorAttributes & {
  anchorStyle?: {
    [key: string]: string;
  };
  readonly componentType: FunctionalComponentType.FormattedTime;
  readonly format: TimeOptions;
  readonly role?: AriaRoles;
  readonly time: string;
};
export declare type FormProps = GlobalAttributes & {
  readonly acceptCharset?: string;
  readonly action?: string;
  readonly autoComplete?: boolean;
  readonly childIds?: Array<string>;
  readonly componentType: FunctionalComponentType.Form;
  readonly encType?: EncType;
  readonly method?: FormMethod | 'dialog';
  readonly name?: string;
  readonly noValidate?: boolean;
  onSubmit: (e: Event) => void;
  readonly rel?: FormRelTypes | Array<FormRelTypes>;
  readonly role?: 'none' | 'presentation' | 'search';
  readonly target?: Target;
};
export declare type FrameProps = GlobalAttributes & ItemPropAttributes & {
  readonly ariaHidden?: boolean;
  readonly childIds: Array<string>;
  readonly componentType: WebComponentType.Frame;
  readonly relativeHeight?: number;
  readonly relativeWidth?: number;
  readonly role?: AriaRoles;
};
export declare type GridProps = GlobalAttributes & ItemPropAttributes & {
  readonly ariaHidden?: boolean;
  readonly childIds: Array<string>;
  readonly componentType: WebComponentType.Grid;
  readonly gap?: Sizes;
  readonly minItemWidth?: string;
  readonly role?: AriaRoles;
};
export declare type HeaderProps = GlobalAttributes & ItemPropAttributes & {
  readonly childIds: Array<string>;
  readonly componentType: FunctionalComponentType.Header;
  readonly role?: 'group' | 'none' | 'presentation';
};
export declare type HeadingProps = GlobalAttributes & ItemPropAttributes & AnchorAttributes & {
  anchorStyle?: {
    [key: string]: string;
  };
  readonly children: string;
  readonly componentType: FunctionalComponentType.Heading;
  readonly level: HeadingLevel;
  readonly role?: 'none' | 'presentation' | 'tab';
  readonly size?: HeadingSize;
};
export declare type InlineLinkProps = GlobalAttributes & ItemPropAttributes & AnchorAttributes & {
  readonly componentType: FunctionalComponentType.InlineLink;
  readonly label: string;
};
export declare type InsertionProps = GlobalAttributes & ItemPropAttributes & AnchorAttributes & {
  anchorStyle?: {
    [key: string]: string;
  };
  readonly cite?: string;
  readonly componentType: FunctionalComponentType.Insertion;
  readonly children: string;
  readonly dateTime?: string;
  readonly role?: AriaRoles;
};
export declare type ItemPropProps = {
  readonly componentType: FunctionalComponentType.ItemProp;
  readonly children: string;
  readonly componentId: string;
  readonly itemId?: string;
  readonly itemProp?: string;
  readonly itemRef?: string;
};
export declare type ItemScopeProps = {
  readonly componentType: FunctionalComponentType.ItemScope;
  readonly childIds?: Array<string>;
  readonly children?: string;
  readonly componentId: string;
  readonly itemId?: string;
  readonly itemRef?: string;
  readonly itemType?: string;
};
export declare type KeyProps = GlobalAttributes & ItemPropAttributes & {
  readonly componentType: FunctionalComponentType.Key;
  readonly key: KeyboardKey;
};
export declare type KeyboardInputProps = GlobalAttributes & ItemPropAttributes & AnchorAttributes & {
  anchorStyle?: {
    [key: string]: string;
  };
  readonly componentType: FunctionalComponentType.KeyboardInput;
  readonly children: string;
  readonly nesting?: KeyboardInputType;
  readonly role?: AriaRoles;
};
export declare type ListItemProps = {
  readonly componentType: FunctionalComponentType.ListItem;
  readonly children: string;
  readonly id: string;
  readonly itemId?: string;
  readonly itemProp?: string;
  readonly itemRef?: string;
  readonly itemType?: string;
  readonly level?: number;
};
export declare type MainProps = GlobalAttributes & ItemPropAttributes & {
  readonly childIds: Array<string>;
  readonly componentType: FunctionalComponentType.Main;
  readonly role: undefined;
};
export declare type MarkRelevantProps = GlobalAttributes & ItemPropAttributes & AnchorAttributes & {
  anchorStyle?: {
    [key: string]: string;
  };
  readonly componentType: FunctionalComponentType.MarkRelevant;
  readonly children: string;
  readonly role?: AriaRoles;
};
export declare type NavProps = GlobalAttributes & ItemPropAttributes & {
  readonly childIds: Array<string>;
  readonly componentType: FunctionalComponentType.Nav;
  readonly role: undefined;
};
export declare type PageProps = {
  components: Record<string, ComponentProps>;
  head?: HeadAttributes;
  id: string;
  name: string;
  rootId: string;
  Site: SiteProps;
  title?: string;
};
export declare type ParagraphProps = GlobalAttributes & ItemPropAttributes & {
  readonly componentType: FunctionalComponentType.Paragraph;
  readonly children: string;
  readonly role?: AriaRoles;
  state: {
    config: Partial<PageProps>;
  };
};
export declare type PhoneNumberProps = GlobalAttributes & ItemPropAttributes & AnchorAttributes & {
  anchorStyle?: {
    [key: string]: string;
  };
  readonly componentType: FunctionalComponentType.PhoneNumber;
  readonly phoneNumber: string;
  readonly tel?: boolean;
};
export declare type QuotationProps = GlobalAttributes & ItemPropAttributes & AnchorAttributes & {
  anchorStyle?: {
    [key: string]: string;
  };
  readonly cite?: string;
  readonly componentType: FunctionalComponentType.Quotation;
  readonly children: string;
  readonly role?: AriaRoles;
};
export declare type ReelProps = GlobalAttributes & ItemPropAttributes & {
  readonly ariaHidden?: boolean;
  readonly childIds: Array<string>;
  readonly componentType: WebComponentType.Reel;
  readonly gap?: Sizes;
  readonly height?: string;
  readonly hideBar?: boolean;
  readonly itemWidth?: string;
  readonly role?: AriaRoles;
  readonly thumbColor?: string;
  readonly trackColor?: string;
};
export declare type RubyProps = GlobalAttributes & ItemPropAttributes & AnchorAttributes & {
  anchorStyle?: {
    [key: string]: string;
  };
  readonly componentType: FunctionalComponentType.Ruby;
  readonly children: string;
  readonly role?: AriaRoles;
};
export declare type RuleProps = GlobalAttributes & {
  readonly componentType: FunctionalComponentType.Rule;
};
export declare type SampleProps = GlobalAttributes & ItemPropAttributes & AnchorAttributes & {
  anchorStyle?: {
    [key: string]: string;
  };
  readonly componentType: FunctionalComponentType.Sample;
  readonly children: string;
  readonly role?: AriaRoles;
};
export declare type SectionProps = GlobalAttributes & ItemPropAttributes & {
  readonly childIds: Array<string>;
  readonly componentType: FunctionalComponentType.Section;
  readonly role?: 'alert' | 'alertdialog' | 'application' | 'banner' | 'complementary' | 'contentinfo' | 'dialog' | 'document' | 'feed' | 'log' | 'main' | 'marquee' | 'navigation' | 'none' | 'note' | 'presentation' | 'search' | 'status' | 'tabpanel';
};
export declare type SidebarProps = GlobalAttributes & ItemPropAttributes & {
  readonly ariaHidden?: boolean;
  readonly childIds: Array<string>;
  readonly componentType: WebComponentType.Sidebar;
  readonly gutter?: Sizes;
  readonly minWidth?: string;
  readonly noStretch?: boolean;
  readonly onRight?: boolean;
  readonly role?: AriaRoles;
  readonly sideWidth?: string;
};
export declare type SiteProps = {
  head: HeadAttributes;
  id: string;
  title: string;
  titleSeparator: string;
  titleSiteFirst?: boolean;
};
export declare type SmallTextProps = GlobalAttributes & ItemPropAttributes & AnchorAttributes & {
  anchorStyle?: {
    [key: string]: string;
  };
  readonly componentType: FunctionalComponentType.SmallText;
  readonly children: string;
  readonly role?: AriaRoles;
};
export declare type SourceProps = GlobalAttributes & ItemPropAttributes & {
  readonly componentType: FunctionalComponentType.Source;
  readonly media?: string;
  readonly role?: undefined;
  readonly sizes?: string;
  readonly src?: string;
  readonly srcSet?: string;
  readonly type?: string;
};
export declare type StackProps = GlobalAttributes & ItemPropAttributes & {
  readonly ariaHidden?: boolean;
  readonly childIds: Array<string>;
  readonly componentType: WebComponentType.Stack;
  readonly gap?: Sizes;
  readonly nest?: boolean;
  readonly role?: AriaRoles;
  readonly splitAt?: number;
};
export declare type SubscriptProps = GlobalAttributes & ItemPropAttributes & AnchorAttributes & {
  anchorStyle?: {
    [key: string]: string;
  };
  readonly componentType: FunctionalComponentType.Subscript;
  readonly children: string;
  readonly role?: AriaRoles;
};
export declare type SuperscriptProps = GlobalAttributes & ItemPropAttributes & AnchorAttributes & {
  anchorStyle?: {
    [key: string]: string;
  };
  readonly componentType: FunctionalComponentType.Superscript;
  readonly children: string;
  readonly role?: AriaRoles;
};
export declare type SwitcherProps = GlobalAttributes & ItemPropAttributes & {
  readonly ariaHidden?: boolean;
  readonly childIds: Array<string>;
  readonly componentType: WebComponentType.Switcher;
  readonly gap?: Sizes;
  readonly role?: AriaRoles;
  readonly rowLimit?: 2 | 3 | 4 | 5 | 6 | 7 | 8;
  readonly threshold?: string;
};
export declare type TextFieldProps = GlobalAttributes & ItemPropAttributes & {
  readonly ariaAutocomplete?: AutocompletionType;
  readonly ariaControls?: string;
  readonly ariaDescribedBy?: string;
  readonly ariaExpanded?: boolean;
  readonly ariaHasPopup?: boolean | PopupType;
  readonly ariaRequired?: boolean;
  readonly autoComplete?: boolean;
  readonly autoExpand?: boolean;
  readonly cols?: number;
  readonly componentType: WebComponentType.TextField;
  readonly defaultValue?: string;
  readonly disabled?: boolean;
  readonly form?: string;
  readonly label?: string;
  readonly list?: string;
  readonly maxLength?: number;
  readonly minLength?: number;
  readonly name: string;
  onBlur?: (e: Event) => void;
  onChange?: (e: Event) => void;
  onFocus?: (e: Event) => void;
  onInput?: (e: Event) => void;
  readonly pattern?: string;
  readonly placeholder?: string;
  readonly readOnly?: boolean;
  ref?: HTMLInputElement;
  readonly required?: boolean;
  readonly resize?: 'both' | 'horizontal' | 'none' | 'vertical';
  readonly role?: undefined;
  readonly rows?: number;
  readonly size?: number;
  readonly spellCheck?: boolean;
  readonly style?: Record<string, string>;
  readonly title?: string;
  updateState?: (name: string, value: TextFieldState) => void;
  readonly wrap?: 'hard' | 'soft' | 'off';
};
export declare type TopperProps = GlobalAttributes & ItemPropAttributes & {
  readonly ariaHidden?: boolean;
  readonly breakout?: boolean;
  readonly childIds: Array<string>;
  readonly componentType: WebComponentType.Topper;
  readonly fixed?: boolean;
  readonly margin?: Sizes;
  readonly role?: AriaRoles;
};
export declare type TypographyProps = GlobalAttributes & ItemPropAttributes & {
  readonly children: string;
  readonly componentType: FunctionalComponentType.Typography;
  readonly role?: AriaRoles;
  readonly size?: HeadingSize;
  readonly face?: TypeFace;
  readonly isItalic?: boolean;
  readonly isBold?: boolean;
  readonly fontVariantNumeric?: Array<NumericVariant>;
  readonly fontVariantCaps?: Array<CapsVariant>;
  readonly fontVariantLigatures?: Array<LigatureVariant>;
  readonly fontVariantAlternates?: Array<AlternateVariant>;
};
export declare type VariableProps = GlobalAttributes & ItemPropAttributes & AnchorAttributes & {
  anchorStyle?: {
    [key: string]: string;
  };
  readonly componentType: FunctionalComponentType.Variable;
  readonly role?: AriaRoles;
  readonly variable: string;
};
export declare type ComponentProps = AbbreviationProps | AnchorProps | ArticleProps | AsideProps | AudioProps | BoxProps | ButtonProps | CenterProps | CitationProps | ClusterProps | CodeBlockProps | CodeProps | CoverProps | DefinedTermProps | DeletionProps | EmailAddressProps | EmphasizeProps | FieldsetProps | FinePrintProps | FooterProps | FootnoteProps | ForeignTermProps | FormattedDateProps | FormattedDateTimeProps | FormattedTimeProps | FormProps | FrameProps | GridProps | HeaderProps | HeadingProps | InlineLinkProps | InsertionProps | ItemPropProps | ItemScopeProps | KeyboardInputProps | KeyProps | ListItemProps | MainProps | MarkRelevantProps | NavProps | ParagraphProps | PhoneNumberProps | QuotationProps | ReelProps | RubyProps | SampleProps | SectionProps | SidebarProps | SmallTextProps | SourceProps | StackProps | SubscriptProps | SuperscriptProps | SwitcherProps | TextFieldProps | TopperProps | TypographyProps | VariableProps;
