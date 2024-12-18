import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import SearchBar from '@/components/SearchBar'
import { Flex } from '@chakra-ui/react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <Flex justifyContent="center" alignItems="center" height="100vh">
      {/* Logo Image here */}
      <SearchBar />
    </Flex>
  )
}
