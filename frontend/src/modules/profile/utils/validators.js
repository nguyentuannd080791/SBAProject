import { collectErrors } from "../../../shared/utils/collectErrors";
import {
  validateFullName,
  validatePhone,
} from "../../../shared/utils/fieldValidators";

export function validateProfileValues(values) {
  return collectErrors({
    fullName: validateFullName(values.fullName),
    phone: validatePhone(values.phone),
  });
}
