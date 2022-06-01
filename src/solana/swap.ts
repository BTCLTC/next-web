import { AnchorProvider, BN, Program } from "@project-serum/anchor"

import { get_amm_account_pda, get_mint0_ata, get_mint1_ata, get_pool_account_pda, get_pool_authority_pda, get_vault_0_pda, get_vault_1_pda } from "../utils"
import { Ammv2 } from '../amm/ammv2'
import { auth } from "../utils/constant"
import { TOKEN_PROGRAM_ID } from "@solana/spl-token"

export const swap = async (provider: AnchorProvider, program: Program<Ammv2>) => {
  const swap_amount = '1000000000000'

  const amm_account_pda = await get_amm_account_pda()

  const mint0_ata = await get_mint0_ata(provider)
  const mint1_ata = await get_mint1_ata(provider)

  const pool_account_pda = await get_pool_account_pda()
  const pool_authority_pda = await get_pool_authority_pda()
  const vault_0_pda = await get_vault_0_pda()
  const vault_1_pda = await get_vault_1_pda()

  return await program.methods
    // (amount_in, min_amount_out, deadline)
    .swap(new BN(swap_amount), new BN('0'), new BN('1700000000'))
    .accounts({
      amm: amm_account_pda,
      pool: pool_account_pda,
      poolAuthority: pool_authority_pda,
      vaultSrc: vault_0_pda,
      vaultDst: vault_1_pda,
      userSrc: mint0_ata,
      userDst: mint1_ata,
      owner: auth.publicKey,
      tokenProgram: TOKEN_PROGRAM_ID,
    })
    .rpc()
}
