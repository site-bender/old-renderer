import { DurationParameters } from './../../types/dates'
import { Temporal } from '@js-temporal/polyfill'

export default function duration(
	d: Temporal.Duration | string | DurationParameters,
): Temporal.Duration {
	if (d instanceof Temporal.Duration) {
		return d
	}

	return Temporal.Duration.from(d)
}
