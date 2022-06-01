import { Keypair, PublicKey } from "@solana/web3.js";
import bs58 from "bs58";

export const RPC = 'https://api.devnet.solana.com'

export const programId = new PublicKey('5aMgTvyCsE3SUwTJMjbsAGzNfVoJ4NL4Z8bWqRnAxgox')

export const manager = new PublicKey('7tm3grTbsBAchMfk1bpPDM8vvJA8N33BGMv4ay7NucFr')

export const mint = 'DvD2cEAEaCc2LTCUexritwTQiwFkrbJDhZULZ1NE2YDC'

export const mint0 = new PublicKey("GhG2KFT2kBmDf1gG6wVK5npKa4mQv4dBJJ54MVN78Uqo")

export const mint1 = new PublicKey("5gzuQMhDQnGqyR9eNNYZgLsMEK388vjQRbJN4zY5HHvw")

const secretKeyAuth = Uint8Array.from(bs58.decode('5VLjbVSRTP3XXqwJvBcNCnxh8SKwYDgwBJmsT1K14t6e6HmZs9bDbLPp1V32NQGSCDtVBzeuEGhzuP1H3cwyXNae'));

export const auth = Keypair.fromSecretKey(secretKeyAuth);
