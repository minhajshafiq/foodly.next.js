"use client"
import { useState } from "react";
import Link from "next/link";
import bcrypt from "bcryptjs";
import mainBanner from "@/../public/mainBanner.jpg";
import styles from "@/styles/signup/signup.module.scss";
import { validateSignupData, SignupData, ValidationResult } from "@/lib/dataValidation/dataValidation";

const SignUp: React.FC = () => {
  const [isRegistered, setIsRegistered] = useState(false);
  const [signupData, setSignupData] = useState<SignupData>({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState<Partial<SignupData>>({});

  const handleSignupInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSignupData({
      ...signupData,
      [name]: value,
    });
    setErrors({
      ...errors,
      [name]: "",
    });
  };

  const handleSignupSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const validationResult: ValidationResult = validateSignupData(signupData);

    if (!validationResult.isValid) {
      setErrors(validationResult.errors);
      return;
    }

    // Si la validation est réussi on continue avec l'inscription
    const hashedPassword = await bcrypt.hash(signupData.password, 10);
    const dataToStore = { ...signupData, password: hashedPassword };

    try {
      console.log("Submitting data:", dataToStore);

      setIsRegistered(true);
    } catch (error) {
      console.error("Error during registration:", error);
    }
  };

  return (
    <main className={styles.inscription}>
      <section className={styles.inscription_mainBanner}>
        <img src={mainBanner.src} alt="Main Banner" className={styles.img} />
      </section>
      <section className={styles.inscription_signup}>
        <h2 className={styles.inscription_title}>Inscription / Sign up</h2>
        <form className={styles.form} onSubmit={handleSignupSubmit}>
          <div className={styles.form_row}>
            <label htmlFor="firstname">Prénom</label>
            <input
              type="text"
              id="firstname"
              name="firstname"
              className={errors.firstname ? styles.input_error : ""}
              placeholder="Doe"
              value={signupData.firstname}
              onChange={handleSignupInputChange}
            />
            {errors.firstname && (
              <span className={styles.error_message}>{errors.firstname}</span>
            )}
          </div>
          <div className={styles.form_row}>
            <label htmlFor="lastname">Nom</label>
            <input
              type="text"
              id="lastname"
              name="lastname"
              className={errors.lastname ? styles.input_error : ""}
              placeholder="John"
              value={signupData.lastname}
              onChange={handleSignupInputChange}
            />
            {errors.lastname && (
              <span className={styles.error_message}>{errors.lastname}</span>
            )}
          </div>
          <div className={styles.form_row}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              className={errors.email ? styles.input_error : ""}
              placeholder="john.doe@example.com"
              value={signupData.email}
              onChange={handleSignupInputChange}
            />
            {errors.email && (
              <span className={styles.error_message}>{errors.email}</span>
            )}
          </div>
          <div className={styles.form_row}>
            <label htmlFor="password">Mot de passe</label>
            <input
              type="password"
              id="password"
              name="password"
              className={errors.password ? styles.input_error : ""}
              placeholder="password"
              value={signupData.password}
              onChange={handleSignupInputChange}
            />
            {errors.password && (
              <span className={styles.error_message}>{errors.password}</span>
            )}
          </div>
          <button role="inscriptioncheckout" className={styles.form_button} type="submit">
            S&apos;inscrire
          </button>
        </form>
        <p className={styles.login_message}>
          Vous avez déjà un compte ?{" "}
          <Link href="/login" className={styles.login_message_link}>
            Connectez-vous
          </Link>
        </p>
      </section>
    </main>
  );
};

export default SignUp;
