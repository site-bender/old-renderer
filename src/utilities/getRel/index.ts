import not from '../not'

export default function getRel(rel?: string | Array<string>): string {
	if (not(rel) || not(rel.length)) {
		return undefined
	}

	return Array.isArray(rel) ? rel.join(' ') : rel
}
