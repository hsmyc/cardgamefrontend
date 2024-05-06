export function validatePassword(pass: string) {
  const specialcharregex = /[!@#$%^&*]/;
  const uppercaseregex = /[A-Z]/;
  const lowercaseregex = /[a-z]/;
  if (pass.length < 8) {
    return {
      status: false,
      message: "Password must be at least 8 characters long",
    };
  }
  if (!specialcharregex.test(pass)) {
    return {
      status: false,
      message: "Password must contain at least one special character",
    };
  }
  if (!uppercaseregex.test(pass)) {
    return {
      status: false,
      message: "Password must contain at least one uppercase letter",
    };
  }
  if (!lowercaseregex.test(pass)) {
    return {
      status: false,
      message: "Password must contain at least one lowercase letter",
    };
  }
  return {
    status: true,
    message: "",
  };
}
