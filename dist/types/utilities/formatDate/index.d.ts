import { DateOptions } from '../../types/dates';
import type { Temporal } from '@js-temporal/polyfill';
export default function formatDate(date: Temporal.PlainDate | Date | string, options?: DateOptions): string;
