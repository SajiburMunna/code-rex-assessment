import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios, { AxiosError } from "axios";

function useUser(endpoint: string) {
  const router = useRouter();
  const [response, setResponse] = useState<User>();
  const [error, setError] = useState<AxiosError>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchUserData() {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_BASE_URL}${endpoint}/${router.query.id}`
        );
        setResponse(response.data);
      } catch (error: any) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }
    if (router.query.id) {
      fetchUserData();
    }
  }, [endpoint, router.query.id]);

  return { response, error, loading };
}

export default useUser;
