import type { Temporal } from '@js-temporal/polyfill';
import { TimeOptions } from '../../types/dates';
export default function formatTime(time: Temporal.PlainTime | Date | string, options?: TimeOptions): string;
