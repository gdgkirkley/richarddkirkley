import { useEffect, useState } from "react";

const useComments = (slug) => {
  const [comments, setComments] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        `${process.env.GATSBY_API_ENDPOINT}/comment?slug=${slug}`,
        {
          method: "get",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        const error = await response.json();
        console.error(error);
        setError(error.message);
      }

      setComments(await response.json());
    }

    fetchData();
  }, [slug]);

  return { comments, error };
};

export default useComments;
