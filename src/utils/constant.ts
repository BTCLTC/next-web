import { Keypair, PublicKey } from '@solana/web3.js'
import bs58 from 'bs58'

export const RPC = 'https://api.devnet.solana.com'

export const programId = new PublicKey(
  '39k3mg3NHTHZ2Jn4XyW2DddBymrgWK3mnEcpUnZCKFsN'
)

export const mint0 = new PublicKey(
  '9bmd6eQsew8sefgbrFbte12AmCnb88biQ8CBUNQw9ceA'
)

export const mint1 = new PublicKey(
  '8w37ioXyNNFDVmVLu18HsYS3LY6EYxNWm24wtrQMfav1'
)

const secretKeyAuth = Uint8Array.from(
  bs58.decode(
    '4SvNKqdrFm1wSMyZVjxKXWYqrSPuKGu5CVuSorK6yDkJsjEdMZwxjHCAdDkgZyBpeusPeqLyEQV4LzDA9cKSFzfQ'
  )
)

export const auth = Keypair.fromSecretKey(secretKeyAuth)
