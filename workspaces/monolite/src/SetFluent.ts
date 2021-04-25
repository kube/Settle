
      /*#######.
     ########",#:
   #########',##".
  ##'##'## .##',##.
   ## ## ## # ##",#.
    ## ## ## ## ##'
     ## ## ## :##
      ## ## ##*/

import { AccessorChain, AccessorFunction } from 'axcessor'
import { set, Accessor, ValueTransformer } from './set'

export class SetFluent<R> {
  constructor(private value: R) {}

  /**
   * Set subproperty value using accessor function
   */
  set<T, A extends AccessorFunction.Safe<R>>(
    accessor: A,
    value: ValueTransformer<R, A>
  ): this

  /**
   * Set subproperty value using accessor chain
   */
  set<T, A extends AccessorChain.Safe<R>>(
    accessor: A,
    value: ValueTransformer<R, A>
  ): this

  /**
   * Set subproperty value
   */
  set<T, A extends Accessor<R>>(
    accessor: A,
    value: ValueTransformer<R, A>
  ) {
    this.value = set(this.value, accessor, value)
    return this
  }

  /**
   * Unwrap value
   */
  end() {
    return this.value
  }
}
