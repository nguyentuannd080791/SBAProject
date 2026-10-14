import { z } from "zod";

const emailPattern = /^\S+@\S+\.\S+$/;
const phonePattern = /^0\d{9}$/;

export const registerSchema = z
  .object({
    fullName: z
      .string()
      .trim()
      .min(1, "Vui lòng nhập họ và tên."),
    email: z
      .string()
      .trim()
      .min(1, "Vui lòng nhập email.")
      .regex(emailPattern, "Email không hợp lệ."),
    phone: z
      .string()
      .trim()
      .min(1, "Vui lòng nhập số điện thoại.")
      .regex(phonePattern, "Số điện thoại phải gồm 10 chữ số và bắt đầu bằng 0."),
    password: z
      .string()
      .min(1, "Vui lòng nhập mật khẩu.")
      .min(8, "Mật khẩu phải có ít nhất 8 ký tự.")
      .refine(
        (val) => /[A-Za-z]/.test(val) && /\d/.test(val),
        "Mật khẩu phải gồm cả chữ và số."
      ),
    confirmPassword: z
      .string()
      .min(1, "Vui lòng nhập lại mật khẩu."),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Mật khẩu nhập lại không khớp.",
    path: ["confirmPassword"],
  });
