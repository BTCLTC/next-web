import { AnchorProvider, Program, web3 } from '@project-serum/anchor'

import { get_amm_account_pda } from '../utils'
import { Ammv2 } from '../amm/ammv2'

export const setAmmFeeTo = async (
  provider: AnchorProvider,
  program: Program<Ammv2>
) => {
  const amm_account_pda = await get_amm_account_pda()

  return await program.methods
    .setAmmFeeTo()
    .accounts({
      amm: amm_account_pda,
      // TODO: 新的手续费接收地址
      feeTo: provider.wallet.publicKey,
      // TODO: 这个是管理员地址
      owner: provider.wallet.publicKey,
    })
    .rpc()
}
