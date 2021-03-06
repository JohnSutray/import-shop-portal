import { freezeAndSeal } from '../utils/object.utils';

export class ProductFilter {
  constructor(
    readonly category: string,
    readonly type: string,
  ) {
    freezeAndSeal(this);
  }
}
