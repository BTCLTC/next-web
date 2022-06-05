import { Program } from '@project-serum/anchor'

import { get_amm_account_pda } from '../utils'
import { Ammv2 } from '../amm/ammv2'

export const get_amm = async (program: Program<Ammv2>) => {
  const amm_account_pda = await get_amm_account_pda()
  return await program.account.swapState.fetch(amm_account_pda)
}
