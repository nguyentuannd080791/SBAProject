import { HttpError } from '../errors/HttpError.js'
import { requireRole } from '../middleware/requireRole.js'

function readAddressId(request) {
  const addressId = Number(request.params.id)
  if (!Number.isInteger(addressId)) throw new HttpError(404, 'Không tìm thấy địa chỉ.')
  return addressId
}

export function registerAddressRoutes(app, { addresses }, authenticate) {
  const customerOnly = [authenticate, requireRole('customer')]

  app.get('/addresses', customerOnly, (request, response) => {
    response.json(addresses.list(request.user))
  })

  app.post('/addresses', customerOnly, (request, response) => {
    response.status(201).json(addresses.add(request.user, request.body))
  })

  app.patch('/addresses/:id', customerOnly, (request, response) => {
    response.json(addresses.update(request.user, readAddressId(request), request.body))
  })

  app.delete('/addresses/:id', customerOnly, (request, response) => {
    addresses.remove(request.user, readAddressId(request))
    response.status(204).end()
  })

  app.post('/addresses/:id/default', customerOnly, (request, response) => {
    addresses.setDefault(request.user, readAddressId(request))
    response.json({})
  })
}
