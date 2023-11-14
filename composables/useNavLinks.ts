export default async function () {
  const { useAuthUser } = await useAuth();
  const user = (useAuthUser() || "") as any;

  const links = ref([
    {
      name: "Home",
      url: "/",
      icon: "pixelarticons:home",
      isActive: false,
    },
    {
      name: "Explore",
      url: "/?new",
      icon: "pixelarticons:map",
      isActive: false,
    },
    {
      name: "Profile",
      url: `/minitalker/${user.value.username}`,
      icon: "pixelarticons:user",
      isActive: false,
    },
  ]) as any;

  const url = computed(() => {
    return useRoute().fullPath;
  });

  function isActiveLink(link: string) {
    if (url.value === link) return true;

    return false;
  }

  return { links, url, isActiveLink };
}
