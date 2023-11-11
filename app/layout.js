import { Inter } from 'next/font/google'
// import './globals.css'
import Navbar from './components/Navbar'
import { StoreProvider } from './storeProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'eShop',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StoreProvider>
          <Navbar/>{children}
          </StoreProvider>
          </body>
    </html>
  )
}
