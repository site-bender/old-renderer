import { JSX } from '../../../../stencil-public-runtime';
import type { LabelPosition } from '../../../../types/props';
export declare class Label {
  /**
   * A label for an element
   */
  labelledId: string;
  label: string;
  variant: LabelPosition;
  render(): JSX.Element;
}
