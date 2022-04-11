import Image from 'next/image'
import React from 'react'

import twitter from '../images/twitter.png'
import telegram from '../images/telegram.png'
import medium from '../images/medium.png'
import email from '../images/email.png'

const Footer: React.FC = () => {
  return (
    <footer className="footer-wrap flex flex-col flex-shrink-0 w-full">
      <div className="footer-icons flex justify-center items-center">
        <a
          href="https://twitter.com/xxxxx"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image src={twitter} width="28" height="28" alt="Twitter" />
        </a>
        <a href="https://t.me/xxxx" target="_blank" rel="noopener noreferrer">
          <Image src={telegram} width="28" height="28" alt="Telegram" />
        </a>
        <a
          href="https://medium.com/@xxx"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image src={medium} width="28" height="28" alt="Medium" />
        </a>
        <a href="mailto:bd@metadex.xyz">
          <Image src={email} width="28" height="28" alt="Email" />
        </a>
      </div>
      <div className="footer-micro flex flex-1 flex-col justify-center items-center">
        <div className="color-text mb-3">MetaDex</div>
        <div>© 2022 MetaDex</div>
      </div>
    </footer>
  )
}

export default Footer
