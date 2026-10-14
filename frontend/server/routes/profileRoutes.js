import { requireRole } from '../middleware/requireRole.js'

export function registerProfileRoutes(app, { profile }, authenticate) {
  const customerOnly = [authenticate, requireRole('customer')]

  app.get('/profile', customerOnly, (request, response) => {
    response.json(profile.getProfile(request.user))
  })

  app.patch('/profile', customerOnly, (request, response) => {
    response.json(profile.updateProfile(request.user, request.body))
  })
}
