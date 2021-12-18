import makeArray from '../makeArray'

export default function makeRange(from = 0, to = 1, step = 1): Array<number> {
	const len = Math.floor((to - from) / step) + 1

	return makeArray((_, i) => from + i * step, len)
}
