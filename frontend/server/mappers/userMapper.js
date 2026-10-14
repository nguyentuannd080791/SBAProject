export function toSessionUser(user) {
  return { id: user.id, fullName: user.fullName, email: user.email, role: user.role }
}

export function toProfile(user) {
  return { fullName: user.fullName, email: user.email, phone: user.phone }
}

export function toProfileChanges(body) {
  return { fullName: body.fullName.trim(), phone: body.phone.trim() }
}

export function toNewCustomer(body) {
  return {
    fullName: body.fullName.trim(),
    email: body.email.trim(),
    phone: body.phone.trim(),
    password: body.password,
    role: 'customer',
    status: 'active',
    emailVerified: false,
  }
}
