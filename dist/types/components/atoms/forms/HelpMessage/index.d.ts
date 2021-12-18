import { JSX } from '../../../../stencil-public-runtime';
import type { LabelPosition } from '../../../../types/props';
export declare class HelpMessage {
  /**
   * A help message for a form field
   */
  labelledBy: string;
  message: string;
  variant: LabelPosition;
  render(): JSX.Element;
}
