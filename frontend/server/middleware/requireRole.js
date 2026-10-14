import { HttpError } from '../errors/HttpError.js'

export function requireRole(...roles) {
  return function checkRole(request, response, next) {
    if (roles.includes(request.user.role)) return next()
    return next(new HttpError(403, 'Bạn không có quyền thực hiện thao tác này.'))
  }
}
