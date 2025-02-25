import React from 'react'
import Footer from '@/components/common/Footer';
import Header from '@/components/common/Header';
import BottomNavbar from '@/components/common/BottomNavbar';

const PublicLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      {/* <main className="pb-24"> */}
        {children}
      {/* </main> */}
      <Footer />
      <BottomNavbar />
    </>
  )
}

export default PublicLayout;