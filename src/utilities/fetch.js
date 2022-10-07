import { useQuery } from '@tanstack/react-query';

const fetchJson = async (url) => {
  const response = await fetch(url);
  if (!response.ok) throw response;
  return response.json();
};

const useJsonQuery = (url) => {
  const { data, isLoading, error } = useQuery(["schedule"], () => fetchJson(url));
  return [ data, isLoading, error ];
};

export default useJsonQuery;