export function createReloadDatabase(db) {
  return function reloadDatabase(request, response, next) {
    db.read()
    next()
  }
}
