import { AnchorProvider, BN, Program } from "@project-serum/anchor"
import { SystemProgram, SYSVAR_RENT_PUBKEY } from "@solana/web3.js"

import { get_amm_account_pda, get_liquidity_locker_pda, get_pool_account_pda, get_pool_authority_pda, get_pool_fee_to_pda, get_pool_mint_pda, get_vault_0_pda, get_vault_1_pda } from "../utils"
import { Ammv2 } from '../amm/ammv2'
import { mint0, mint1 } from "utils/constant"
import { TOKEN_PROGRAM_ID, ASSOCIATED_TOKEN_PROGRAM_ID } from "@solana/spl-token"

export const initializePool = async (provider: AnchorProvider, program: Program<Ammv2>) => {
  const amm_account_pda = await get_amm_account_pda()
  const pool_account_pda = await get_pool_account_pda()
  const pool_authority_pda = await get_pool_authority_pda()
  const vault_0_pda = await get_vault_0_pda()
  const vault_1_pda = await get_vault_1_pda()
  const pool_mint_pda = await get_pool_mint_pda()
  const liquidity_locker_pda = await get_liquidity_locker_pda()
  const pool_fee_to_pda = await get_pool_fee_to_pda()

  return await program.methods
    .initializePool(new BN('3'), new BN('1000'))
    .accounts({
      mint0: mint0,
      mint1: mint1,
      amm: amm_account_pda,
      ammFeeTo: provider.wallet.publicKey,
      pool: pool_account_pda,
      poolAuthority: pool_authority_pda,
      vault0: vault_0_pda,
      vault1: vault_1_pda,
      poolMint: pool_mint_pda,
      liquidityLocker: liquidity_locker_pda,
      poolFeeTo: pool_fee_to_pda,
      payer: provider.wallet.publicKey,
      systemProgram: SystemProgram.programId,
      tokenProgram: TOKEN_PROGRAM_ID,
      associatedTokenProgram: ASSOCIATED_TOKEN_PROGRAM_ID,
      rent: SYSVAR_RENT_PUBKEY,
    })
    .rpc()
}
