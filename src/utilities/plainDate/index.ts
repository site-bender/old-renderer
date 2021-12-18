import { Temporal } from '@js-temporal/polyfill'

export default function plainDate(
	d: Temporal.PlainDate | string | Date,
): Temporal.PlainDate {
	if (d instanceof Temporal.PlainDate) {
		return d
	}

	if (typeof d === 'undefined') {
		return undefined
	}

	const date =
		(d instanceof Date && Temporal.PlainDate.from(d.toISOString())) ||
		Temporal.PlainDate.from(d as string)

	return date
}
