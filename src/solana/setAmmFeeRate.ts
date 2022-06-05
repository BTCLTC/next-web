import { AnchorProvider, BN, Program } from '@project-serum/anchor'

import { get_amm_account_pda } from '../utils'
import { Ammv2 } from '../amm/ammv2'

export const setAmmFeeRate = async (
  provider: AnchorProvider,
  program: Program<Ammv2>
) => {
  const amm_account_pda = await get_amm_account_pda()
  console.log('amm_account_pda: ', amm_account_pda.toBase58())
  console.log(
    'provider.wallet.publicKey: ',
    provider.wallet.publicKey.toBase58()
  )
  return await program.methods
    // 分子， 分母
    .setAmmFeeRate(new BN('3'), new BN('10000'))
    .accounts({
      amm: amm_account_pda,
      // TODO: 这个是管理员地址
      owner: provider.wallet.publicKey,
    })
    .rpc()
}
