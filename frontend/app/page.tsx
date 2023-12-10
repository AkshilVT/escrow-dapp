"use client"
import { useRouter } from 'next/navigation'

import React from 'react'

function page() {
const router = useRouter()
router.push('Explore')
  return (
    <div>Loading...</div>
  )
}

export default page