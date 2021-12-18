import { Temporal } from '@js-temporal/polyfill'

export default function plainDateTime(
	d: Temporal.PlainDateTime | string | Date,
): Temporal.PlainDateTime {
	if (d instanceof Temporal.PlainDateTime) {
		return d
	}

	if (typeof d === 'undefined') {
		return undefined
	}

	const dateTime =
		(d instanceof Date && Temporal.PlainDateTime.from(d.toISOString())) ||
		Temporal.PlainDateTime.from(d as string)

	return dateTime
}
