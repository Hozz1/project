import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import styles from "./EnterPage.module.css";
import cn from "classnames";

function EnterPage() {
  const [formData, setFormData] = useState({
    login: "",      // может быть имя или email
    password: "",
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { placeholder, value } = e.target;
    if (placeholder === "Имя или Email") {
      setFormData((prev) => ({ ...prev, login: value }));
    } else if (placeholder === "Пароль") {
      setFormData((prev) => ({ ...prev, password: value }));
    }
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.login.trim()) {
      newErrors.login = "Пожалуйста, введите имя или email";
    }
    // Опционально: можно проверить, если введён email — проверить формат
    else if (formData.login.includes("@")) {
      const emailRegex = /\S+@\S+\.\S+/;
      if (!emailRegex.test(formData.login)) {
        newErrors.login = "Неверный формат email";
      }
    }

    if (!formData.password) {
      newErrors.password = "Пожалуйста, введите пароль";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      // TODO: Добавьте здесь логику авторизации (запрос к серверу)
      alert(`Авторизация успешна!\nЛогин: ${formData.login}`);
      navigate("/Courses"); // или куда нужно после входа
    }
  };

  return (
    <div className={cn("container", styles["enter-page"])}>
      <form className={styles["form"]} onSubmit={handleSubmit} noValidate>
        <h1 className={styles["title"]}>Авторизация</h1>

        <Input
          type="text"
          placeholder="Имя или Email"
          value={formData.login}
          onChange={handleChange}
          aria-invalid={errors.login ? "true" : "false"}
          aria-describedby="login-error"
          autoComplete="username"
        />
        {errors.login && (
          <span className={styles.error} id="login-error" style={{ color: "red", fontSize: "0.85rem" }}>
            {errors.login}
          </span>
        )}

        <Input
          type="password"
          placeholder="Пароль"
          value={formData.password}
          onChange={handleChange}
          aria-invalid={errors.password ? "true" : "false"}
          aria-describedby="password-error"
          autoComplete="current-password"
        />
        {errors.password && (
          <span className={styles.error} id="password-error" style={{ color: "red", fontSize: "0.85rem" }}>
            {errors.password}
          </span>
        )}

        <Button type="submit">Войти</Button>

        <p>
          Нет аккаунта? <Link to="/registration">Зарегистрироваться</Link>
        </p>
      </form>
    </div>
  );
}

export default EnterPage;


