import dynamic from 'next/dynamic'
import React from 'react'

const ClientComponent = dynamic(() => import('../Client/ClientComponent'), 
  {  ssr: false 
})


export default function HomePage() {
  return (
    <ClientComponent />
  )
}
