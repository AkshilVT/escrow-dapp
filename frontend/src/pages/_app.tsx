import WalletProvider from '@/components/providers/wallet'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className='bg-gradient-to-b from-blue-200 to-indigo-600'>
      <WalletProvider>
      <Component {...pageProps} />
    </WalletProvider>
    
      </div>
    
  )
}
