export default function (url: string, options: any = {}) {
  const { useAuthToken } = useAuth();

  return $fetch(url, {
    ...options,
    headers: {
      ...options?.headers,
      Authorization: `Bearer ${useAuthToken().value}`,
    },
  });
}
