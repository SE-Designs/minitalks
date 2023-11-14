export default async function () {
  const search = ref();

  function startSearch() {
    useRouter().push({
      path: `/search`,
      query: {
        q: search.value,
      },
    });
  }

  function getSearch(): string {
    return search.value;
  }

  return { search, startSearch, getSearch };
}
