import { useEffect } from 'react'
import { useNavigate } from 'react-router'
import { isSignerSet } from 'src/blockchain/signer'
import { Box } from 'src/components/layout/Box'
import { ScreenContentFrame } from 'src/components/layout/ScreenContentFrame'
import { RegisterForm } from 'src/features/login/registerForm'
import { Font } from 'src/styles/fonts'

export function RegisterScreen() {
  // @ts-ignore
  const navigate = useNavigate()
  useEffect(() => {
    // Wallet must have been created or imported before reaching here
    if (!isSignerSet()) {
      navigate('/setup', { replace: true })
    }
  }, [])

  const onClickBack = () => {
    navigate(-1)
  }
  return (
    <ScreenContentFrame onClose={onClickBack}>
      <Box direction="column" align='center'>
      <h1 css={Font.h1}>Register as Seller</h1>
      <RegisterForm />
      </Box>
    </ScreenContentFrame>
  )
}