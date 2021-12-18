import type { Temporal } from '@js-temporal/polyfill'
import { TimeOptions } from '../../types/dates'
import plainTime from '../plainTime'

export default function formatTime(
	time: Temporal.PlainTime | Date | string,
	options: TimeOptions = {},
): string {
	const {
		locale = 'en-NZ',
		hour = 'numeric',
		minute = '2-digit',
		second = '2-digit',
	} = options

	return plainTime(time)?.toLocaleString(locale, {
		hour,
		minute,
		second,
	})
}
