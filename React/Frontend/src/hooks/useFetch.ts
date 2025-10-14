import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getToken, clearToken } from 'src/helpers/auth';

interface FetchResponse<T> {
  data: T | null;
  loading: boolean;
  error: Error | null;
}

export function useFetch<T>(url: string, options: RequestInit = {}, requireAuth: boolean = false): FetchResponse<T> {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const controller = new AbortController();

    const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
        const token = getToken();
        
        if (requireAuth && !token) {
          navigate("/auth");
          return;
        }
        
        const headers: Record<string, string> = { 
          'Content-Type': 'application/json',
          ...(options.headers as Record<string, string>) 
        };

        if (requireAuth && token) {
          headers['Authorization'] = `Bearer ${token}`;
        }

        const res = await fetch(url, { ...options, headers, signal: controller.signal });

        if (res.status === 401 && requireAuth) {
          clearToken();
          navigate("/auth");
          return;
        }

        if (!res.ok) {
          const errorBody = await res.json().catch(() => ({ message: `Error en la petición: ${res.status}` }));
          throw new Error(errorBody.message || `Error: ${res.status}`);
        }

        const json = await res.json();
        setData(json);

      } catch (err: any) {
        if (err.name !== "AbortError") {
          setError(err);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();

    return () => controller.abort();
  }, [url, navigate, requireAuth]); 

  return { data, loading, error };
}
