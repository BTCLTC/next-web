import { AnchorProvider, BN, Program } from "@project-serum/anchor"

import { get_amm_account_pda, get_mint0_ata, get_mint1_ata, get_pool_account_pda, get_pool_authority_pda, get_pool_fee_to_pda, get_pool_mint_ata, get_pool_mint_pda, get_vault_0_pda, get_vault_1_pda } from "../utils"
import { Ammv2 } from '../amm/ammv2'
import { auth } from "../utils/constant"
import { TOKEN_PROGRAM_ID } from "@solana/spl-token"

export const removeLiquidity = async (provider: AnchorProvider, program: Program<Ammv2>) => {
  const burn_amount = '10000000000000'

  const mint0_ata = await get_mint0_ata(provider)
  const mint1_ata = await get_mint1_ata(provider)

  const amm_account_pda = await get_amm_account_pda()
  const pool_account_pda = await get_pool_account_pda()
  const pool_authority_pda = await get_pool_authority_pda()
  const vault_0_pda = await get_vault_0_pda()
  const vault_1_pda = await get_vault_1_pda()
  const pool_mint_pda = await get_pool_mint_pda()
  const pool_fee_to_pda = await get_pool_fee_to_pda()
  const pool_mint_ata = await get_pool_mint_ata(provider)

  return await program.methods
    .removeLiquidity(new BN(burn_amount))
    .accounts({
      amm: amm_account_pda,
      pool: pool_account_pda,
      poolAuthority: pool_authority_pda,
      vault0: vault_0_pda,
      vault1: vault_1_pda,
      poolMint: pool_mint_pda,
      feeTo: pool_fee_to_pda,
      user0: mint0_ata,
      user1: mint1_ata,
      userPoolAta: pool_mint_ata,
      owner: auth.publicKey,
      tokenProgram: TOKEN_PROGRAM_ID,
    })
    .signers([auth])
    .rpc()
}
