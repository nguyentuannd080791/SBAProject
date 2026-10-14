import { Button, Form } from "react-bootstrap";
import { FormField } from "../../../shared/components/FormField";
import { useForm } from "../../../shared/hooks/useForm";
import { validateAddressValues } from "../utils/addressValidators";

const emptyValues = {
  recipientName: "",
  recipientPhone: "",
  street: "",
  ward: "",
  district: "",
  city: "",
};

export function AddressForm({ address, onSubmit, onCancel, isSubmitting }) {
  const initialValues = address ? pickFields(address) : emptyValues;
  const form = useForm(initialValues, validateAddressValues);

  return (
    <Form noValidate onSubmit={form.handleSubmit(onSubmit)}>
      <FormField
        label="Tên người nhận"
        name="recipientName"
        autoComplete="name"
        value={form.values.recipientName}
        error={form.errors.recipientName}
        onChange={form.handleChange}
        onBlur={form.handleBlur}
      />
      <FormField
        label="Số điện thoại người nhận"
        name="recipientPhone"
        type="tel"
        autoComplete="tel"
        value={form.values.recipientPhone}
        error={form.errors.recipientPhone}
        onChange={form.handleChange}
        onBlur={form.handleBlur}
      />
      <FormField
        label="Số nhà, tên đường"
        name="street"
        autoComplete="address-line1"
        value={form.values.street}
        error={form.errors.street}
        onChange={form.handleChange}
        onBlur={form.handleBlur}
      />
      <FormField
        label="Phường/Xã"
        name="ward"
        value={form.values.ward}
        error={form.errors.ward}
        onChange={form.handleChange}
        onBlur={form.handleBlur}
      />
      <FormField
        label="Quận/Huyện"
        name="district"
        value={form.values.district}
        error={form.errors.district}
        onChange={form.handleChange}
        onBlur={form.handleBlur}
      />
      <FormField
        label="Tỉnh/Thành phố"
        name="city"
        autoComplete="address-level1"
        value={form.values.city}
        error={form.errors.city}
        onChange={form.handleChange}
        onBlur={form.handleBlur}
      />

      <div className="d-flex gap-2 mt-2">
        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Đang lưu..." : "Lưu địa chỉ"}
        </Button>
        <Button
          type="button"
          variant="outline-secondary"
          disabled={isSubmitting}
          onClick={onCancel}
        >
          Hủy
        </Button>
      </div>
    </Form>
  );
}

function pickFields(address) {
  return {
    recipientName: address.recipientName,
    recipientPhone: address.recipientPhone,
    street: address.street,
    ward: address.ward,
    district: address.district,
    city: address.city,
  };
}
