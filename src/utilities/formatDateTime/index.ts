import { DateTimeOptions } from '../../types/dates'
import type { Temporal } from '@js-temporal/polyfill'
import plainDateTime from '../plainDateTime'

export default function formatDateTime(
	dateTime: Temporal.PlainDateTime | Date | string,
	options: DateTimeOptions = {},
): string {
	const {
		locale = 'en-NZ',
		day = 'numeric',
		month = 'long',
		year = 'numeric',
		hour = 'numeric',
		minute = '2-digit',
		...format
	} = options

	return plainDateTime(dateTime)?.toLocaleString(locale, {
		day,
		month,
		year,
		hour,
		minute,
		...format,
	})
}
