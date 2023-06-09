import { useEffect, useState } from "react";
import axios, { AxiosError } from "axios";

function useUsers(endpoint: string) {
  const [response, setResponse] = useState<Users>();
  const [error, setError] = useState<AxiosError>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchUserData() {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_BASE_URL}${endpoint}`
        );
        setResponse(response.data);
      } catch (error: any) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }
    if (endpoint) {
      fetchUserData();
    }
  }, [endpoint]);

  return { response, error, loading };
}

export default useUsers;
