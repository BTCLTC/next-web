import { AnchorProvider, BN, Program } from "@project-serum/anchor"

import { get_amm_account_pda } from "../utils"
import { Ammv2 } from '../amm/ammv2'

export const setAmmFeeRate = async (provider: AnchorProvider, program: Program<Ammv2>) => {
  const amm_account_pda = await get_amm_account_pda()
  return await program.methods
    // 分子， 分母
    .setAmmFeeRate(new BN('5'), new BN('10000'))
    .accounts({
      amm: amm_account_pda,
      // TODO: 这个是管理员地址
      owner: provider.wallet.publicKey,
    })
    .rpc()
}
