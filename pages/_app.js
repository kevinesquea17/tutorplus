import '../styles/globals.css'
import { Montserrat } from '@next/font/google'

const pacifico = Montserrat({
  weight: ['100','200','300','400','500','600','700','800','900'],
  subsets: ['latin'],
})


export default function MyApp({ Component, pageProps }) {
  return (
    <main className={pacifico.className}>
      <Component {...pageProps} />
    </main>
  )
}
