export function collectErrors(messagesByField) {
  const errors = {};
  for (const [field, message] of Object.entries(messagesByField)) {
    if (message) errors[field] = message;
  }
  return errors;
}
