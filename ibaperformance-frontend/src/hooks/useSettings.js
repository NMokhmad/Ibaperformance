import { useState, useEffect } from "react";
import { client } from "../lib/sanity";

export function useSettings() {
  const [settings, setSettings] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSettings = async () => {
      try {
        setLoading(true);
        const query = `*[_type == "settings"][0] {
          telephone,
          email,
          instagram
        }`;

        const data = await client.fetch(query);
        setSettings(data);
        setLoading(false);
      } catch (err) {
        console.error("Erreur lors du chargement des paramètres:", err);
        setError(err.message);
        setLoading(false);
      }
    };

    fetchSettings();
  }, []);

  return { settings, loading, error };
}