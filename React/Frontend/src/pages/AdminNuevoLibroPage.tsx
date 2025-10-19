import { useEffect, useMemo, useState } from "react";
import { useAuth } from "../context/AuthContext";

type Autor = {
  id: number;
  nombre: string;
};

type LibroFormState = {
  titulo: string;
  genero: string;
  autorId: string;
  descripcion: string;
  imagen: string;
};

type FormErrors = Partial<Record<keyof LibroFormState, string>>;

type Feedback =
  | { type: "success" | "error"; message: string }
  | { type: null; message: "" };

const GENEROS = [
  { value: "Fantasia", label: "Fantasia" },
  { value: "Ciencia Ficcion", label: "Ciencia Ficcion" },
  { value: "Romance Juvenil", label: "Romance Juvenil" },
  { value: "Psicologia", label: "Psicologia" },
];

const initialState: LibroFormState = {
  titulo: "",
  genero: GENEROS[0]?.value ?? "",
  autorId: "",
  descripcion: "",
  imagen: "",
};

const AdminNuevoLibroPage = () => {
  const { token, user } = useAuth();
  const [formData, setFormData] = useState<LibroFormState>(initialState);
  const [errors, setErrors] = useState<FormErrors>({});
  const [autores, setAutores] = useState<Array<Autor>>([]);
  const [isLoadingAutores, setIsLoadingAutores] = useState(true);
  const [autoresError, setAutoresError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [feedback, setFeedback] = useState<Feedback>({ type: null, message: "" });

  const apiBaseUrl = useMemo(
    () => import.meta.env.VITE_API_URL || "http://localhost:3000/api",
    [],
  );

  useEffect(() => {
    const fetchAutores = async () => {
      if (!token) {
        setAutoresError("No encontramos tus credenciales.");
        setIsLoadingAutores(false);
        return;
      }

      try {
        setIsLoadingAutores(true);
        setAutoresError(null);
        const response = await fetch(`${apiBaseUrl}/autores`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!response.ok) {
          throw new Error("No pudimos obtener la lista de autores.");
        }

        const data = await response.json();
        const autoresOrdenados = Array.isArray(data?.autores)
          ? [...data.autores].sort((a: Autor, b: Autor) =>
              a.nombre.localeCompare(b.nombre),
            )
          : [];

        setAutores(autoresOrdenados);
      } catch (error) {
        const message =
          error instanceof Error
            ? error.message
            : "No pudimos cargar los autores disponibles.";
        setAutoresError(message);
      } finally {
        setIsLoadingAutores(false);
      }
    };

    fetchAutores();
  }, [apiBaseUrl, token]);

  const handleChange = (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
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

  const validate = (values: LibroFormState): FormErrors => {
    const validationErrors: FormErrors = {};

    if (!values.titulo.trim()) {
      validationErrors.titulo = "Ingresar un titulo es obligatorio.";
    }

    if (!values.genero.trim()) {
      validationErrors.genero = "Selecciona un genero.";
    }

    if (!values.autorId) {
      validationErrors.autorId = "Selecciona un autor.";
    }

    if (values.imagen && !/^https?:\/\/.+/i.test(values.imagen.trim())) {
      validationErrors.imagen = "La imagen debe ser una URL valida.";
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
        message: "Revisa los campos marcados antes de guardar.",
      });
      return;
    }

    if (!token || !user?.id) {
      setFeedback({
        type: "error",
        message: "No pudimos validar tu sesion. Ingresa nuevamente.",
      });
      return;
    }

    const payload = {
      titulo: formData.titulo.trim(),
      genero: formData.genero.trim(),
      descripcion: formData.descripcion.trim(),
      imagen: formData.imagen.trim(),
      autorId: Number(formData.autorId),
      userId: Number(user.id),
    };

    setIsSubmitting(true);
    setFeedback({ type: null, message: "" });

    try {
      const response = await fetch(`${apiBaseUrl}/libros`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const errorBody = await response.json().catch(() => null);
        throw new Error(
          errorBody?.message ?? "No pudimos guardar el libro. Intenta mas tarde.",
        );
      }

      setFormData(initialState);
      setErrors({});
      setFeedback({
        type: "success",
        message: "Libro creado correctamente.",
      });
    } catch (error) {
      const message =
        error instanceof Error
          ? error.message
          : "Ocurrio un problema al guardar el libro.";
      setFeedback({ type: "error", message });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="container admin-libro-page">
      <header className="admin-libro-header">
        <h1>Registrar nuevo libro</h1>
        <p>
          Completa la informacion y publicala en el catalogo en segundos. Todos los
          campos marcados con * son obligatorios.
        </p>
      </header>

      <section className="admin-libro-card">
        <form className="admin-libro-form" onSubmit={handleSubmit} noValidate>
          {feedback.type && (
            <div
              className={`admin-feedback ${
                feedback.type === "success" ? "is-success" : "is-error"
              }`}
              role={feedback.type === "error" ? "alert" : "status"}
            >
              {feedback.message}
            </div>
          )}

          <div className="admin-form-grid">
            <div className="form-group">
              <label htmlFor="titulo">
                Titulo <span aria-hidden="true">*</span>
              </label>
              <input
                id="titulo"
                name="titulo"
                type="text"
                value={formData.titulo}
                onChange={handleChange}
                aria-invalid={Boolean(errors.titulo)}
                aria-describedby={errors.titulo ? "titulo-error" : undefined}
                placeholder="Ej: El nombre del viento"
                required
              />
              {errors.titulo && (
                <span className="field-error" id="titulo-error">
                  {errors.titulo}
                </span>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="genero">
                Genero <span aria-hidden="true">*</span>
              </label>
              <select
                id="genero"
                name="genero"
                value={formData.genero}
                onChange={handleChange}
                aria-invalid={Boolean(errors.genero)}
                aria-describedby={errors.genero ? "genero-error" : undefined}
                required
              >
                {GENEROS.map((genero) => (
                  <option key={genero.value} value={genero.value}>
                    {genero.label}
                  </option>
                ))}
              </select>
              {errors.genero && (
                <span className="field-error" id="genero-error">
                  {errors.genero}
                </span>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="autorId">
                Autor <span aria-hidden="true">*</span>
              </label>
              {isLoadingAutores ? (
                <p className="form-helper">Cargando autores...</p>
              ) : autoresError ? (
                <p className="field-error" role="alert">
                  {autoresError}
                </p>
              ) : (
                <select
                  id="autorId"
                  name="autorId"
                  value={formData.autorId}
                  onChange={handleChange}
                  aria-invalid={Boolean(errors.autorId)}
                  aria-describedby={errors.autorId ? "autor-error" : undefined}
                  required
                >
                  <option value="">Selecciona un autor</option>
                  {autores.map((autor) => (
                    <option key={autor.id} value={autor.id}>
                      {autor.nombre}
                    </option>
                  ))}
                </select>
              )}
              {errors.autorId && (
                <span className="field-error" id="autor-error">
                  {errors.autorId}
                </span>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="imagen">Portada (URL)</label>
              <input
                id="imagen"
                name="imagen"
                type="url"
                value={formData.imagen}
                onChange={handleChange}
                aria-invalid={Boolean(errors.imagen)}
                aria-describedby={errors.imagen ? "imagen-error" : undefined}
                placeholder="https://..."
              />
              {errors.imagen && (
                <span className="field-error" id="imagen-error">
                  {errors.imagen}
                </span>
              )}
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="descripcion">Descripcion</label>
            <textarea
              id="descripcion"
              name="descripcion"
              rows={5}
              value={formData.descripcion}
              onChange={handleChange}
              placeholder="Escribe una sinopsis breve del libro."
            />
          </div>

          <div className="admin-form-actions">
            <button
              type="button"
              className="btn-secondary"
              onClick={() => {
                setFormData(initialState);
                setErrors({});
                setFeedback({ type: null, message: "" });
              }}
              disabled={isSubmitting}
            >
              Limpiar
            </button>
            <button
              type="submit"
              className="submit-btn"
              disabled={isSubmitting || isLoadingAutores || Boolean(autoresError)}
            >
              {isSubmitting ? "Guardando..." : "Publicar libro"}
            </button>
          </div>
        </form>
      </section>
    </main>
  );
};

export default AdminNuevoLibroPage;
