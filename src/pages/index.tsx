import type { NextPage } from 'next'
import { useEffect, useMemo, useCallback } from 'react'
import { m } from 'framer-motion'
import { AnchorProvider, Program } from '@project-serum/anchor'
import { Connection } from '@solana/web3.js'
import { useAnchorWallet } from '@solana/wallet-adapter-react'

import { fade } from '../utils/transitions'
import { Ammv2 } from '../amm/ammv2'
import idl from '../amm/ammv2.json'
import { programId, RPC } from '../utils/constant'
import {
  initializeAmm,
  setAmmFeeRate,
  setAmmFeeTo,
  initializePool,
  addLiquidity,
  removeLiquidity,
  swap,
  get_amm,
} from '../solana'

const Home: NextPage = () => {
  const wallet = useAnchorWallet()

  const provider = useMemo(() => {
    if (wallet) {
      const connection = new Connection(RPC)
      return new AnchorProvider(connection, wallet, {})
    }
    return null
  }, [wallet])

  const program = useMemo(() => {
    if (provider) {
      return new Program<Ammv2>(idl as unknown as Ammv2, programId, provider)
    }
    return null
  }, [provider])

  useEffect(() => {
    if (program) {
      get_amm(program).then((amm) => {
        console.log('amm owner: ', amm.owner.toBase58())
        console.log('amm feeTo: ', amm.feeTo.toBase58())
        console.log('amm feeNumerator: ', amm.feeNumerator.toString())
        console.log('amm feeDenominator: ', amm.feeDenominator.toString())
      })
    }
  }, [program])

  const handleClick = useCallback(
    async (fun: string) => {
      if (!provider || !program) {
        alert('请先连接钱包，并切换到devnet网络')
        return
      }
      if (fun == 'initializeAmm') {
        const tx = await initializeAmm(provider, program).catch((error) => {
          console.log(error.logs)
        })
        console.log(tx)
      } else if (fun == 'initializePool') {
        const tx = await initializePool(provider, program).catch((error) => {
          console.log(error.logs)
        })
        console.log(tx)
      } else if (fun == 'addLiquidity') {
        const tx = await addLiquidity(provider, program).catch((error) => {
          console.log(error.logs)
        })
        console.log(tx)
      } else if (fun == 'removeLiquidity') {
        const tx = await removeLiquidity(provider, program).catch((error) => {
          console.log(error.logs)
        })
        console.log(tx)
      } else if (fun == 'swap') {
        const tx = await swap(provider, program).catch((error) => {
          console.log(error.logs)
        })
        console.log(tx)
      } else if (fun == 'setAmmFeeRate') {
        const tx = await setAmmFeeRate(provider, program).catch((error) => {
          console.log(error.logs)
        })
        console.log(tx)
      } else if (fun == 'setAmmFeeTo') {
        const tx = await setAmmFeeTo(provider, program).catch((error) => {
          console.log(error.logs)
        })
        console.log(tx)
      }
    },
    [provider, program]
  )

  return (
    <m.div variants={fade}>
      <div>
        <button
          className="bg-blue-700 p-3 rounded-md"
          onClick={() => handleClick('initializeAmm')}
        >
          initializeAmm
        </button>
        <button
          className="bg-blue-700 p-3 rounded-md ml-2"
          onClick={() => handleClick('setAmmFeeRate')}
        >
          setAmmFeeRate
        </button>
        <button
          disabled={true}
          className="bg-blue-200 cursor-not-allowed p-3 rounded-md ml-2"
          onClick={() => handleClick('setAmmFeeTo')}
        >
          setAmmFeeTo（慎点，点了后，就没权限了）
        </button>
      </div>
      <div className="mt-4">
        <button
          className="bg-blue-700 p-3 rounded-md"
          onClick={() => handleClick('initializePool')}
        >
          initializePool
        </button>
        <button
          className="bg-blue-700 p-3 rounded-md ml-2"
          onClick={() => handleClick('addLiquidity')}
        >
          addLiquidity
        </button>
        <button
          className="bg-blue-700 p-3 rounded-md ml-2"
          onClick={() => handleClick('removeLiquidity')}
        >
          removeLiquidity
        </button>
      </div>
      <div className="mt-4">
        <button
          className="bg-blue-700 p-3 rounded-md"
          onClick={() => handleClick('swap')}
        >
          swap
        </button>
      </div>
    </m.div>
  )
}

export default Home
