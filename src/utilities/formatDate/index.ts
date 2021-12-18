import { DateOptions } from '../../types/dates'
import type { Temporal } from '@js-temporal/polyfill'
import plainDate from '../plainDate'

export default function formatDate(
	date: Temporal.PlainDate | Date | string,
	options: DateOptions = {},
): string {
	const {
		locale = 'en-NZ',
		day = 'numeric',
		month = 'short',
		year = 'numeric',
		...format
	} = options

	return plainDate(date)?.toLocaleString(locale, {
		day,
		month,
		year,
		...format,
	})
}
