import { FlyoverPeginState, LiquidityProvider2WP, SatoshiBig } from '@/common/types';
import { MutationTree } from 'vuex';
import * as constants from '@/common/store/constants';

export const mutations: MutationTree<FlyoverPeginState> = {
  [constants.FLYOVER_PEGIN_SET_AMOUNT]: (state, amount: SatoshiBig) => {
    state.amountToTransfer = amount;
  },
  [constants.FLYOVER_PEGIN_SET_ROOTSTOCK_ADDRESS]: (state, address: string) => {
    state.rootstockRecipientAddress = address;
  },
  [constants.FLYOVER_PEGIN_SET_PROVIDERS]: (state, providers: Array<LiquidityProvider2WP>) => {
    state.liquidityProviders = providers;
  },
};