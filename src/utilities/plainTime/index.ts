import { Temporal } from '@js-temporal/polyfill'

export default function plainTime(
	t: Temporal.PlainTime | string | Date,
): Temporal.PlainTime {
	if (t instanceof Temporal.PlainTime) {
		return t
	}

	if (typeof t === 'undefined') {
		return undefined
	}

	const dateTime =
		(t instanceof Date && Temporal.PlainTime.from(t.toISOString())) ||
		Temporal.PlainTime.from(t as string)

	return dateTime
}
