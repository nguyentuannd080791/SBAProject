export function toProfile(user) {
  return { fullName: user.fullName, email: user.email, phone: user.phone };
}

export function toProfileChanges(values) {
  return { fullName: values.fullName.trim(), phone: values.phone.trim() };
}
