import { Component, Prop, h, JSX } from '@stencil/core'
import crossFetch from 'cross-fetch'
import { Helmet } from '@stencil/helmet'
import state from '../../store'
import { ComponentRenderer } from '../ComponentRenderer'
import { Typography } from '../../components/atoms/textual/Typography'
import { TypographyProps } from '../../types/props'

@Component({
	tag: 'site-bender',
})
export class SiteBender {
	/**
	 * The unique train-case page name
	 */
	@Prop() page: string

	componentWillLoad(): Promise<void> {
		const data = {
			query: `query GetView($name: String!) {
				Configuration(where: {name: {_eq: $name}}) {
					Site {
						head
						id
						title
						titleSeparator
						titleSiteFirst
					}
					components
					head
					id
					name
					rootId
					title
				}
			}`,
			variables: {
				name: this.page || window.location.pathname,
			},
			operationName: 'GetView',
		}

		return crossFetch('https://sitebender.hasura.app/v1/graphql', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'Accept': 'application/json',
				'x-hasura-admin-secret':
					'vxqJlZIraNka8T4wiefSd7fdQEsmN27xa7W5viCW7RYJ4R8OPFdo8JwNeD4QG2oc',
			},
			body: JSON.stringify(data),
		})
			.then(response => response.json())
			.then(data => {
				state.config = data?.data?.Configuration?.[0]
			})
	}

	render(): JSX.Element {
		const title = state.config.Site?.titleSiteFirst
			? [state.config.Site.title, state.config.title]
			: [state.config.title, state.config.Site.title]

		const meta = {
			...(state.config.Site.head?.meta || {}),
			...(state.config.head?.meta || {}),
		}

		const links = {
			...(state.config.Site.head?.link || {}),
			...(state.config.head?.link || {}),
		}

		const component = state.config.components[state.config.rootId]

		const example = {
			children: 'This is the cool numeric 0123456789 text!',
			componentId: '4j9dHZX6JQsy4TrP4nrp3',
			componentType: 'Typography',
			face: 'serif',
			fontVariantNumeric: [
				'oldstyle-nums',
				'proportional-nums',
				'slashed-zero',
			],
		} as TypographyProps

		return (
			<main>
				<Helmet>
					{state.config.Site?.head?.base ? (
						<base {...state.config.Site.head?.base} />
					) : undefined}
					{Object.keys(meta).map(key => (
						<meta {...meta[key]} />
					))}
					<title>{title.join(state.config.Site.titleSeparator || ' ~ ')}</title>
					{Object.keys(links).map(key => (
						<link {...links[key]} />
					))}
				</Helmet>
				<h1>sitebender</h1>
				<p>
					<Typography {...example}>This is the text!</Typography>
				</p>
				{component ? (
					<ComponentRenderer
						componentId={state.config.rootId}
					></ComponentRenderer>
				) : undefined}
			</main>
		)
	}
}
