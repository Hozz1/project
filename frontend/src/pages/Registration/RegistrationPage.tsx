import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import styles from "./RegistrationPage.module.css";
import cn from "classnames";

function RegistrationPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    repeatPassword: "",
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const placeholderToKey = {
    имя: "name",
    email: "email",
    пароль: "password",
    "повторите пароль": "repeatPassword",
  };

  const handleChange = (e) => {
    const placeholder = e.target.placeholder.toLowerCase();
    const key = placeholderToKey[placeholder];
    if (!key) return;

    setFormData((prev) => ({ ...prev, [key]: e.target.value }));
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = "Пожалуйста, введите имя";
    if (!formData.email.trim()) {
      newErrors.email = "Пожалуйста, введите email";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Неверный формат email";
    }
    if (!formData.password) {
      newErrors.password = "Пожалуйста, введите пароль";
    } else if (formData.password.length < 6) {
      newErrors.password = "Пароль должен быть не менее 6 символов";
    }
    if (formData.repeatPassword !== formData.password) {
      newErrors.repeatPassword = "Пароли не совпадают";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      // Здесь можно добавить логику регистрации, например, запрос к API
      alert("Регистрация прошла успешно!");
      navigate("/enter"); // Переход на страницу входа после успешной регистрации
    }
  };

  return (
    <div className={cn("container", styles["enter-page"])}>
      <form className={styles["form"]} onSubmit={handleSubmit} noValidate>
        <h1 className={styles["title"]}>Регистрация</h1>

        <Input
          type="text"
          placeholder="Имя"
          value={formData.name}
          onChange={handleChange}
          aria-invalid={errors.name ? "true" : "false"}
          aria-describedby="name-error"
        />
        {errors.name && (
          <span className={styles.error} id="name-error" style={{ color: "red", fontSize: "0.85rem" }}>
            {errors.name}
          </span>
        )}

        <Input
          type="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          aria-invalid={errors.email ? "true" : "false"}
          aria-describedby="email-error"
        />
        {errors.email && (
          <span className={styles.error} id="email-error" style={{ color: "red", fontSize: "0.85rem" }}>
            {errors.email}
          </span>
        )}

        <Input
          type="password"
          placeholder="Пароль"
          value={formData.password}
          onChange={handleChange}
          aria-invalid={errors.password ? "true" : "false"}
          aria-describedby="password-error"
        />
        {errors.password && (
          <span className={styles.error} id="password-error" style={{ color: "red", fontSize: "0.85rem" }}>
            {errors.password}
          </span>
        )}

        <Input
          type="password"
          placeholder="Повторите пароль"
          value={formData.repeatPassword}
          onChange={handleChange}
          aria-invalid={errors.repeatPassword ? "true" : "false"}
          aria-describedby="repeatPassword-error"
        />
        {errors.repeatPassword && (
          <span className={styles.error} id="repeatPassword-error" style={{ color: "red", fontSize: "0.85rem" }}>
            {errors.repeatPassword}
          </span>
        )}

        <Button type="submit">Зарегистрироваться</Button>

        <p>
          Уже есть аккаунт? <Link to="/enter">Войти</Link>
        </p>
      </form>
    </div>
  );
}

export default RegistrationPage;



