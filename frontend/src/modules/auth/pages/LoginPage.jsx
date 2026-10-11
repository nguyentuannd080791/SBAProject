import { useState } from 'react'
import { useNavigate } from 'react-router'
import { Card } from 'react-bootstrap'
import { useAuth } from '../../../app/provider/useAuth'
import { LoginForm } from '../components/LoginForm'
import { loginUser } from '../services/loginUser'

export function LoginPage() {
  const { login } = useAuth()
  const navigate = useNavigate()
  const [submitError, setSubmitError] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  async function handleSubmit({ email, password }) {
    setSubmitError('')
    setIsSubmitting(true)
    const result = await loginUser(email, password)
    setIsSubmitting(false)
    if (result.error) return setSubmitError(result.error)
    login(result.user)
    navigate('/', { replace: true })
  }

  return (
    <Card body>
      <h2 className="h5 mb-3">Đăng nhập</h2>
      <LoginForm
        onSubmit={handleSubmit}
        submitError={submitError}
        isSubmitting={isSubmitting}
      />
    </Card>
  )
}
