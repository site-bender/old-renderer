import { DateTimeOptions } from '../../types/dates';
import type { Temporal } from '@js-temporal/polyfill';
export default function formatDateTime(dateTime: Temporal.PlainDateTime | Date | string, options?: DateTimeOptions): string;
