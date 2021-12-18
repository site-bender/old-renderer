import { JSX } from '../../../stencil-public-runtime';
import type { LabelPosition } from '../../../types/props';
export declare class FieldWrapper {
  /**
   * A wrapper around a form field
   */
  helpVariant: LabelPosition;
  componentId: string;
  labelId: string;
  label: string;
  message: string;
  variant: LabelPosition;
  render(): JSX.Element;
}
