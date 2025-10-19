import { useMemo, useState } from "react";

type FormState = {
  nombre: string;
  email: string;
  asunto: string;
  mensaje: string;
};

type FormErrors = Partial<Record<keyof FormState, string>>;
type FeedbackState =
  | {
      type: "success" | "error";
      message: string;
    }
  | { type: null; message: "" };

const initialFormState: FormState = {
  nombre: "",
  email: "",
  asunto: "",
  mensaje: "",
};

function ContactoPage() {
  const [formData, setFormData] = useState<FormState>(initialFormState);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [feedback, setFeedback] = useState<FeedbackState>({
    type: null,
    message: "",
  });

  const apiBaseUrl = useMemo(
    () => import.meta.env.VITE_API_URL || "http://localhost:3000/api",
    [],
  );

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
    if (feedback.type) {
      setFeedback({ type: null, message: "" });
    }
  };

  const validate = (values: FormState): FormErrors => {
    const validationErrors: FormErrors = {};

    if (!values.nombre.trim()) {
      validationErrors.nombre = "Ingresa tu nombre.";
    }

    if (!values.email.trim()) {
      validationErrors.email = "Ingresa un email de contacto.";
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim().toLowerCase())
    ) {
      validationErrors.email = "El email no tiene un formato valido.";
    }

    if (!values.asunto.trim()) {
      validationErrors.asunto = "Contanos el motivo del mensaje.";
    } else if (values.asunto.trim().length < 3) {
      validationErrors.asunto = "El asunto debe tener al menos 3 caracteres.";
    }

    if (!values.mensaje.trim()) {
      validationErrors.mensaje = "Escribi tu mensaje.";
    } else if (values.mensaje.trim().length < 10) {
      validationErrors.mensaje = "El mensaje debe tener al menos 10 caracteres.";
    }

    return validationErrors;
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const validationErrors = validate(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setFeedback({
        type: "error",
        message: "Revisa los campos marcados e intenta nuevamente.",
      });
      return;
    }

    setIsSubmitting(true);
    setFeedback({ type: null, message: "" });

    try {
      const response = await fetch(`${apiBaseUrl}/contacto`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nombre: formData.nombre.trim(),
          email: formData.email.trim().toLowerCase(),
          asunto: formData.asunto.trim(),
          mensaje: formData.mensaje.trim(),
        } satisfies FormState),
      });

      if (!response.ok) {
        const errorBody = await response.json().catch(() => null);
        throw new Error(
          errorBody?.message ?? "No se pudo enviar el mensaje. Proba mas tarde.",
        );
      }

      setFormData(initialFormState);
      setErrors({});
      setFeedback({
        type: "success",
        message: "Gracias por escribirnos. Te responderemos muy pronto.",
      });
    } catch (error) {
      const message =
        error instanceof Error
          ? error.message
          : "Tuvimos un problema para enviar tu mensaje.";
      setFeedback({ type: "error", message });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="container contact-page">
      <header className="contact-header">
        <h1>Contacto</h1>
        <p>
          Tenes alguna duda, queres recomendar un libro o simplemente charlar
          sobre lecturas? Estamos para ayudarte.
        </p>
      </header>

      <div className="contact-layout">
        <section className="contact-card contact-info">
          <h2>Nuestra Libreria</h2>
          <p>
            <strong>Dirección</strong>
            <br />
            Avenida Siempreviva 742
            <br />
            La Plata, Buenos Aires, Argentina
          </p>
          <p>
            <strong>Telefono</strong>
            <br />
            (0221) 456-7890
          </p>
          <p>
            <strong>Email</strong>
            <br />
            hola@elrincondellector.com
          </p>
          <p>
            <strong>Horarios</strong>
            <br />
            Lunes a sabados de 9:00 a 20:00 hs.
          </p>
          <div className="contact-highlight">
            <h3>Preferis visitarnos?</h3>
            <p>
              Organizamos clubes de lectura todos los viernes a las 18:00 hs.
              !Sumate!
            </p>
          </div>
        </section>

        <section className="contact-card contact-form-wrapper">
          <h2>Envianos un mensaje</h2>
          <p className="contact-subtitle">
            Completa el formulario y un librero se pondra en contacto con vos en
            menos de 24 horas.
          </p>

          {feedback.type && (
            <div
              className={`form-feedback ${
                feedback.type === "success" ? "is-success" : "is-error"
              }`}
              role={feedback.type === "error" ? "alert" : "status"}
            >
              {feedback.message}
            </div>
          )}

          <form className="contact-form" onSubmit={handleSubmit} noValidate>
            <div className="form-group">
              <label htmlFor="nombre">Nombre y apellido</label>
              <input
                id="nombre"
                name="nombre"
                type="text"
                value={formData.nombre}
                onChange={handleChange}
                aria-invalid={Boolean(errors.nombre)}
                aria-describedby={errors.nombre ? "nombre-error" : undefined}
                placeholder="Ej: Ana Gomez"
                autoComplete="name"
                required
              />
              {errors.nombre && (
                <span className="field-error" id="nombre-error">
                  {errors.nombre}
                </span>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                aria-invalid={Boolean(errors.email)}
                aria-describedby={errors.email ? "email-error" : undefined}
                placeholder="tuemail@ejemplo.com"
                autoComplete="email"
                required
              />
              {errors.email && (
                <span className="field-error" id="email-error">
                  {errors.email}
                </span>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="asunto">Asunto</label>
              <input
                id="asunto"
                name="asunto"
                type="text"
                value={formData.asunto}
                onChange={handleChange}
                aria-invalid={Boolean(errors.asunto)}
                aria-describedby={errors.asunto ? "asunto-error" : undefined}
                placeholder="Reservar un libro, sugerir un titulo..."
                required
              />
              {errors.asunto && (
                <span className="field-error" id="asunto-error">
                  {errors.asunto}
                </span>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="mensaje">Mensaje</label>
              <textarea
                id="mensaje"
                name="mensaje"
                rows={6}
                value={formData.mensaje}
                onChange={handleChange}
                aria-invalid={Boolean(errors.mensaje)}
                aria-describedby={errors.mensaje ? "mensaje-error" : undefined}
                placeholder="Contanos en que podemos ayudarte"
                required
              />
              {errors.mensaje && (
                <span className="field-error" id="mensaje-error">
                  {errors.mensaje}
                </span>
              )}
            </div>

            <button
              type="submit"
              className="submit-btn contact-submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Enviando..." : "Enviar mensaje"}
            </button>
          </form>
        </section>
      </div>
    </main>
  );
}

export default ContactoPage;
