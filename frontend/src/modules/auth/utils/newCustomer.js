export function toNewCustomer(values) {
  return {
    fullName: values.fullName.trim(),
    email: values.email.trim(),
    phone: values.phone.trim(),
    password: values.password,
    role: "customer",
    status: "active",
    emailVerified: false,
  };
}
