import Image from 'next/image'
import { Poppins } from '@next/font/google'


const poppins = Poppins({ 
    subsets: ['latin'],
    weight: '400'
    })

export default function Home() {
  return (
    <main className={`${poppins.className}`}>
      <p>helloo</p>
    </main>
  )
}
