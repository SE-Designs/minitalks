export default async function (url: string, options: any = {}) {
  const { useAuthToken } = await useAuth();
  const token = useAuthToken();

  console.log(`> making fetch: ${token.value}`);

  return $fetch(url, {
    ...options,
    headers: {
      ...options?.headers,
      Authorization: `Bearer ${token.value}`,
    },
  });
}
