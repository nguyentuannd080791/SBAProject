import { HttpError } from '../errors/HttpError.js'

function readBearerToken(request) {
  const header = request.headers.authorization ?? ''
  return header.startsWith('Bearer ') ? header.slice(7) : ''
}

export function createAuthenticate(sessionService) {
  return function authenticate(request, response, next) {
    const token = readBearerToken(request)
    const user = sessionService.authenticate(token)
    if (!user) return next(new HttpError(401, 'Vui lòng đăng nhập.'))
    request.user = user
    request.token = token
    return next()
  }
}
