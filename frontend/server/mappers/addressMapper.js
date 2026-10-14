export function toAddressChanges(body) {
  return {
    recipientName: body.recipientName.trim(),
    recipientPhone: body.recipientPhone.trim(),
    street: body.street.trim(),
    ward: body.ward.trim(),
    district: body.district.trim(),
    city: body.city.trim(),
  }
}

export function toNewAddress(userId, body, isDefault) {
  return { userId, ...toAddressChanges(body), isDefault }
}
