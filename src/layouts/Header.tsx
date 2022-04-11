import { FC } from 'react'
import Image from 'next/image'

import Link from '../components/ActiveLink'

import logo from 'images/logo.png'

const Header: FC = () => {
  return (
    <header className="header-wrap flex-shrink-0">
      <div className="container mx-auto h-full flex items-center justify-between">
        <Link href="/" activeClassName="active">
          <a className="logo flex-shrink-0">
            <Image width={204} height={36} src={logo} alt="logo" />
          </a>
        </Link>

        <div className="header-menu flex-shrink-0">
          <a
            href="https://metadex.xyz"
            target="_blank"
            rel="noopener noreferrer"
          >
            Home
          </a>
        </div>
      </div>
    </header>
  )
}

export default Header
