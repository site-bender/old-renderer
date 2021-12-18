import { JSX } from '../../stencil-public-runtime';
export declare class SiteBender {
  /**
   * The unique train-case page name
   */
  page: string;
  componentWillLoad(): Promise<void>;
  render(): JSX.Element;
}
