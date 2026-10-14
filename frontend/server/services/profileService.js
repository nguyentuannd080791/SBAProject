import { toProfile, toProfileChanges } from '../mappers/userMapper.js'
import { validateProfileBody } from '../validation/requestValidators.js'

export function createProfileService({ users }) {
  function getProfile(user) {
    return toProfile(user)
  }

  function updateProfile(user, body) {
    validateProfileBody(body)
    return toProfile(users.update(user.id, toProfileChanges(body)))
  }

  return { getProfile, updateProfile }
}
