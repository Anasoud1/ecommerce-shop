import React, { Suspense } from 'react'
import Verify from './Verify'

export const metadata = {
  title: "Verify",
};

const VerifyPage = () => {
  return (
    <Suspense>
      <Verify />
    </Suspense>
  )
}

export default VerifyPage