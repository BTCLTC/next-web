import type { NextPage } from 'next'
import { m } from 'framer-motion'

import { fade } from '../utils/transitions'

const Home: NextPage = () => {
  return (
    <m.div variants={fade} className="flex">
      home
    </m.div>
  )
}

export default Home
