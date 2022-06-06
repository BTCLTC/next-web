import { AnchorProvider, utils } from '@project-serum/anchor'
import { createAssociatedTokenAccount } from '@solana/spl-token'
import { PublicKey } from '@solana/web3.js'

import { auth, mint0, mint1, programId } from './constant'

export const get_amm_account_pda = async () => {
  const [amm_account_pda, _] = await PublicKey.findProgramAddress(
    [Buffer.from(utils.bytes.utf8.encode('amm_state'))],
    programId
  )
  return amm_account_pda
}

export const get_pool_account_pda = async () => {
  const [pool_account_pda, _] = await PublicKey.findProgramAddress(
    [
      Buffer.from(utils.bytes.utf8.encode('pool')),
      mint0.toBuffer(),
      mint1.toBuffer(),
    ],
    programId
  )

  return pool_account_pda
}

export const get_pool_authority_pda = async () => {
  const pool_account_pda = await get_pool_account_pda()
  const [pool_authority_pda, _] = await PublicKey.findProgramAddress(
    [
      Buffer.from(utils.bytes.utf8.encode('authority')),
      pool_account_pda.toBuffer(),
    ],
    programId
  )

  return pool_authority_pda
}

export const get_vault_0_pda = async () => {
  const pool_account_pda = await get_pool_account_pda()
  const [vault_0_pda, _] = await PublicKey.findProgramAddress(
    [
      Buffer.from(utils.bytes.utf8.encode('vault0')),
      pool_account_pda.toBuffer(),
    ],
    programId
  )

  return vault_0_pda
}

export const get_vault_1_pda = async () => {
  const pool_account_pda = await get_pool_account_pda()
  const [vault_1_pda, _] = await PublicKey.findProgramAddress(
    [
      Buffer.from(utils.bytes.utf8.encode('vault1')),
      pool_account_pda.toBuffer(),
    ],
    programId
  )

  return vault_1_pda
}

export const get_pool_mint_pda = async () => {
  const pool_account_pda = await get_pool_account_pda()
  const [pool_mint_pda, _] = await PublicKey.findProgramAddress(
    [
      Buffer.from(utils.bytes.utf8.encode('pool_mint')),
      pool_account_pda.toBuffer(),
    ],
    programId
  )

  return pool_mint_pda
}

export const get_liquidity_locker_pda = async () => {
  const pool_account_pda = await get_pool_account_pda()
  const [liquidity_locker_pda, _] = await PublicKey.findProgramAddress(
    [
      Buffer.from(utils.bytes.utf8.encode('liquidity_locker')),
      pool_account_pda.toBuffer(),
    ],
    programId
  )

  return liquidity_locker_pda
}

export const get_pool_fee_to_pda = async () => {
  const pool_account_pda = await get_pool_account_pda()
  const [pool_fee_to_pda, _] = await PublicKey.findProgramAddress(
    [
      Buffer.from(utils.bytes.utf8.encode('fee_to')),
      pool_account_pda.toBuffer(),
    ],
    programId
  )

  return pool_fee_to_pda
}

export const get_mint0_ata = async (provider: AnchorProvider) => {
  return await createAssociatedTokenAccount(
    provider.connection,
    auth,
    mint0,
    provider.publicKey
  )
}

export const get_mint1_ata = async (provider: AnchorProvider) => {
  return await createAssociatedTokenAccount(
    provider.connection,
    auth,
    mint1,
    provider.publicKey
  )
}

export const get_pool_mint_ata = async (provider: AnchorProvider) => {
  const pool_mint_pda = await get_pool_mint_pda()

  return await createAssociatedTokenAccount(
    provider.connection,
    auth,
    pool_mint_pda,
    provider.publicKey
  )
}
