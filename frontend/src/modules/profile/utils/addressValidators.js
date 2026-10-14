import { collectErrors } from "../../../shared/utils/collectErrors";
import {
  validateFullName,
  validatePhone,
} from "../../../shared/utils/fieldValidators";

function validateRequired(value, message) {
  return value.trim() ? "" : message;
}

export function validateAddressValues(values) {
  return collectErrors({
    recipientName: validateFullName(values.recipientName),
    recipientPhone: validatePhone(values.recipientPhone),
    street: validateRequired(values.street, "Vui lòng nhập số nhà, tên đường."),
    ward: validateRequired(values.ward, "Vui lòng nhập phường/xã."),
    district: validateRequired(values.district, "Vui lòng nhập quận/huyện."),
    city: validateRequired(values.city, "Vui lòng nhập tỉnh/thành phố."),
  });
}
