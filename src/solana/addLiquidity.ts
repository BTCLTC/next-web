import { AnchorProvider, BN, Program } from '@project-serum/anchor'

import {
  get_amm_account_pda,
  get_liquidity_locker_pda,
  get_mint0_ata,
  get_mint1_ata,
  get_pool_account_pda,
  get_pool_authority_pda,
  get_pool_fee_to_pda,
  get_pool_mint_ata,
  get_pool_mint_pda,
  get_vault_0_pda,
  get_vault_1_pda,
} from '../utils'
import { Ammv2 } from '../amm/ammv2'
import { auth, mint0, mint1 } from '../utils/constant'
import { mintTo, TOKEN_PROGRAM_ID } from '@solana/spl-token'

export const addLiquidity = async (
  provider: AnchorProvider,
  program: Program<Ammv2>
) => {
  const token_decimals = 9
  let liquidity0 = 10000 * 10 ** token_decimals
  let liquidity1 = 40000 * 10 ** token_decimals
  const mint0_ata = await get_mint0_ata(provider)
  const mint1_ata = await get_mint1_ata(provider)

  await mintTo(provider.connection, auth, mint0, mint0_ata, auth, liquidity0)
  await mintTo(provider.connection, auth, mint1, mint1_ata, auth, liquidity1)

  const amm_account_pda = await get_amm_account_pda()
  const pool_account_pda = await get_pool_account_pda()
  const pool_authority_pda = await get_pool_authority_pda()
  const vault_0_pda = await get_vault_0_pda()
  const vault_1_pda = await get_vault_1_pda()
  const pool_mint_pda = await get_pool_mint_pda()
  const liquidity_locker_pda = await get_liquidity_locker_pda()
  const pool_fee_to_pda = await get_pool_fee_to_pda()
  const pool_mint_ata = await get_pool_mint_ata(provider)

  console.log('amm_account_pda: ', amm_account_pda.toBase58())
  console.log('pool_account_pda: ', pool_account_pda.toBase58())
  console.log('pool_authority_pda: ', pool_authority_pda.toBase58())
  console.log('vault_0_pda: ', vault_0_pda.toBase58())
  console.log('vault_1_pda: ', vault_1_pda.toBase58())
  console.log('pool_mint_pda: ', pool_mint_pda.toBase58())
  console.log('liquidity_locker_pda: ', liquidity_locker_pda.toBase58())
  console.log('pool_fee_to_pda: ', pool_fee_to_pda.toBase58())
  console.log('mint0_ata: ', mint0_ata.toBase58())
  console.log('mint1_ata: ', mint1_ata.toBase58())
  console.log('pool_mint_ata: ', pool_mint_ata.toBase58())
  console.log('auth: ', auth.publicKey.toBase58())
  return await program.methods
    .addLiquidity(new BN(liquidity0), new BN(liquidity1))
    .accounts({
      amm: amm_account_pda,
      pool: pool_account_pda,
      poolAuthority: pool_authority_pda,
      vault0: vault_0_pda,
      vault1: vault_1_pda,
      poolMint: pool_mint_pda,
      liquidityLocker: liquidity_locker_pda,
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
