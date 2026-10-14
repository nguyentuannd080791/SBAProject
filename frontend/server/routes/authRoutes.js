export function registerAuthRoutes(app, { registration, session, passwords }, authenticate) {
  app.post('/auth/register', (request, response) => {
    response.status(201).json(registration.register(request.body))
  })

  app.post('/auth/verify-email', (request, response) => {
    registration.verifyEmail(request.body)
    response.json({})
  })

  app.post('/auth/resend-verification', (request, response) => {
    registration.resendVerification(request.body)
    response.json({})
  })

  app.post('/auth/login', (request, response) => {
    response.json(session.login(request.body))
  })

  app.post('/auth/logout', authenticate, (request, response) => {
    session.logout(request.token)
    response.status(204).end()
  })

  app.post('/auth/forgot-password', (request, response) => {
    passwords.forgotPassword(request.body)
    response.json({})
  })

  app.post('/auth/reset-password', (request, response) => {
    passwords.resetPassword(request.body)
    response.json({})
  })

  app.post('/auth/change-password', authenticate, (request, response) => {
    passwords.changePassword(request.user, request.body)
    response.json({})
  })
}
