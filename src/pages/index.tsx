import type { NextPage } from 'next'
import { useMemo, useCallback } from 'react';
import { m } from 'framer-motion'
import { AnchorProvider, Program } from '@project-serum/anchor';
import { Connection } from '@solana/web3.js';
import { useAnchorWallet } from '@solana/wallet-adapter-react';

import { fade } from '../utils/transitions'
import { Ammv2 } from '../amm/ammv2'
import idl from '../amm/ammv2.json'
import { programId, RPC } from '../utils/constant';
import { initializeAmm, initializePool } from '../solana';

const Home: NextPage = () => {
  const wallet = useAnchorWallet();

  const provider = useMemo(() => {
    if (wallet) {
      const connection = new Connection(RPC);
      return new AnchorProvider(connection, wallet, {})
    }
    return null
  }, [wallet])

  const program = useMemo(() => {
    if (provider) {
      return new Program<Ammv2>(
        idl as unknown as Ammv2,
        programId,
        provider
      )
    }
    return null
  }, [provider])

  const handleClick = useCallback(async (fun: string) => {
    if (!provider || !program) return
    if (fun == 'initializeAmm') {
      const tx = await initializeAmm(provider, program).catch((error) => {
        console.log(error.logs.toString())
      })
    } else if (fun == 'initializePool') {
      const tx = await initializePool(provider, program).catch((error) => {
        console.log(error.logs.toString())
      })
    }
  }, [provider, program])

  return (
    <m.div variants={fade} className="flex">
      <button className="bg-blue-700 p-3 rounded-md" onClick={() => handleClick('initializeAmm')}>initializeAmm</button>
      <button className="bg-blue-700 p-3 rounded-md ml-2" onClick={() => handleClick('initializePool')}>initializePool</button>
    </m.div>
  )
}

export default Home
