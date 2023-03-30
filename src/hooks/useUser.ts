import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios, { AxiosError } from "axios";

function useUser(endpoint: { users: string; posts?: string }) {
  const router = useRouter();
  const [response, setResponse] = useState<User | Posts>();
  const [error, setError] = useState<AxiosError>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchUserData(): Promise<void> {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_BASE_URL}${endpoint.users}/${
            router.query.id
          }${endpoint.posts ? `${endpoint.posts}` : ""}`
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
  }, [endpoint.users, endpoint.posts, router.query.id]);

  return { response, error, loading };
}

export default useUser;
