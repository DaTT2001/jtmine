import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import { Container } from '@mui/material'

const Layout = () => {
  return (
    <>
      <Header/>
        <Container maxWidth="lg">
          <Outlet />
        </Container>
      <Footer/>
    </>

  )
}

export default Layout