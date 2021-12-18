import { FunctionalComponent, h } from '@stencil/core'
import state from '../../store'
import type {
	ComponentRendererProps,
	PageProps,
	ComponentProps,
} from '../../types/props'
import type { FunctionalComponentType } from '../../types/enums'
import { Abbreviation } from '../../components/atoms/textual/Abbreviation'
import { Anchor } from '../../components/atoms/textual/Anchor'
import { Citation } from '../../components/atoms/textual/Citation'
import { Code } from '../../components/atoms/textual/Code'
import { CodeBlock } from '../../components/atoms/textual/CodeBlock'
import { DefinedTerm } from '../../components/atoms/textual/DefinedTerm'
import { Deletion } from '../../components/atoms/textual/Deletion'
import { EmailAddress } from '../../components/atoms/textual/EmailAddress'
import { Emphasize } from '../../components/atoms/textual/Emphasize'
import { FinePrint } from '../../components/atoms/textual/FinePrint'
import { ForeignTerm } from '../../components/atoms/textual/ForeignTerm'
import { FormattedDate } from '../../components/atoms/textual/FormattedDate'
import { FormattedDateTime } from '../../components/atoms/textual/FormattedDateTime'
import { FormattedTime } from '../../components/atoms/textual/FormattedTime'
import { Heading } from '../../components/atoms/sectioning/Heading'
import { Insertion } from '../../components/atoms/textual/Insertion'
import { ItemProp } from '../../components/atoms/textual/ItemProp'
import { ItemScope } from '../../components/atoms/textual/ItemScope'
import { Key } from '../../components/atoms/textual/Key'
import { KeyboardInput } from '../../components/atoms/textual/KeyboardInput'
import { MarkRelevant } from '../../components/atoms/textual/MarkRelevant'
import { Paragraph } from '../../components/atoms/grouping/Paragraph'
import { PhoneNumber } from '../../components/atoms/textual/PhoneNumber'
import { Quotation } from '../../components/atoms/textual/Quotation'
import { Sample } from '../../components/atoms/textual/Sample'
import { SmallText } from '../../components/atoms/textual/SmallText'
import { Subscript } from '../../components/atoms/textual/Subscript'
import { Superscript } from '../../components/atoms/textual/Superscript'
import { Typography } from '../../components/atoms/textual/Typography'
import { Variable } from '../../components/atoms/textual/Variable'

const functionalComponents: Partial<
	Record<
		keyof typeof FunctionalComponentType,
		FunctionalComponent<ComponentProps>
	>
> = {
	Abbreviation,
	Anchor,
	Citation,
	Code,
	CodeBlock,
	DefinedTerm,
	Deletion,
	EmailAddress,
	Emphasize,
	FinePrint,
	ForeignTerm,
	FormattedDate,
	FormattedDateTime,
	FormattedTime,
	Heading,
	Insertion,
	ItemProp,
	ItemScope,
	Key,
	KeyboardInput,
	MarkRelevant,
	Paragraph,
	PhoneNumber,
	Quotation,
	Sample,
	SmallText,
	Subscript,
	Superscript,
	Typography,
	Variable,
}

export const ComponentRenderer: FunctionalComponent<ComponentRendererProps> = ({
	componentId,
	merge = {},
}) => {
	const { componentType: Tag, ...config }: ComponentProps =
		(state.config as PageProps).components[componentId] ||
		({} as ComponentProps)

	const Component = functionalComponents[Tag]

	if (Component) {
		return <Component {...config} state={state} />
	}

	return config && Tag ? (
		<Tag
			config={{
				...config,
				...merge,
			}}
		/>
	) : undefined
}
