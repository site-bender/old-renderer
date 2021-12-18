import { DurationParameters } from './../../types/dates';
import { Temporal } from '@js-temporal/polyfill';
export default function duration(d: Temporal.Duration | string | DurationParameters): Temporal.Duration;
