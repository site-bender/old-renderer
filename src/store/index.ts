import { PageProps } from './../types/props'
import { createStore } from '@stencil/store'

const { state } = createStore<{ config: Partial<PageProps> }>({
	config: {},
})

export default state
