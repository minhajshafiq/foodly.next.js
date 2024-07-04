export type SignupData = {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
};

export type ValidationResult = {
  isValid: boolean;
  errors: { [key: string]: string };
};

const validationRules = [
  {
    field: "firstname",
    method: (name: string) => /^[A-Z][a-zA-Z]*$/.test(name),
    message: "Le prénom doit commencer par une majuscule et ne doit pas contenir de chiffres.",
  },
  {
    field: "lastname",
    method: (name: string) => /^[A-Z][a-zA-Z]*$/.test(name),
    message: "Le nom doit commencer par une majuscule et ne doit pas contenir de chiffres.",
  },
  {
    field: "email",
    method: (email: string) => /^[_a-z0-9-]+(.[_a-z0-9-]+)*@[a-z0-9-]+(.[_a-z0-9-]+)*(.[a-z]{2,4})$/.test(email),
    message: "L'adresse email est invalide.",
  },
  {
    field: "password",
    method: (password: string) => /^(?=.*[A-Z]).{6,}$/.test(password),
    message: "Le mot de passe doit contenir au moins une majuscule et minimum 6 caractères.",
  },
];

export const validateSignupData = (data: SignupData): ValidationResult => {
  const errors: { [key: string]: string } = {};
  let isValid = true;

  validationRules.forEach(({ field, method, message }) => {
    if (!method(data[field as keyof SignupData])) {
      errors[field] = message;
      isValid = false;
    }
  });

  return {
    isValid,
    errors,
  };
};
