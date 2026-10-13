import {
  validateFullName,
  validatePhone,
} from "../../../shared/utils/fieldValidators";

export function validateProfileValues(values) {
  const errors = {};
  const fullNameError = validateFullName(values.fullName);
  const phoneError = validatePhone(values.phone);
  if (fullNameError) errors.fullName = fullNameError;
  if (phoneError) errors.phone = phoneError;
  return errors;
}
