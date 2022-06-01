import { AnchorProvider, BN, Program } from "@project-serum/anchor"
import { SystemProgram } from "@solana/web3.js"

import { get_amm_account_pda } from "../utils"
import { Ammv2 } from '../amm/ammv2'

export const initializeAmm = async (provider: AnchorProvider, program: Program<Ammv2>) => {
  const amm_account_pda = await get_amm_account_pda()
  return await program.methods
    .initializeAmm(new BN('5'), new BN('10000'))
    .accounts({
      amm: amm_account_pda,
      // TODO: 这个是管理员地址
      owner: provider.wallet.publicKey,
      // TODO: 这个是手续费收取地址
      feeTo: provider.wallet.publicKey,
      payer: provider.wallet.publicKey,
      systemProgram: SystemProgram.programId,
    })
    .rpc()
}
