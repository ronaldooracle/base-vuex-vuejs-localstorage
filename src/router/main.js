import Main from "@/layouts/Main";

export default {
  path: "/",
  redirect: { name: "auth.login" },
  component: Main,
  children: [
    {
      path: "home",
      name: "main.home",
      component: () => import("@/views/Home.vue"),
      meta: { requiresLogin: true },
      props: {
        title: "Home",
        icon: "mdi-clipboard-clock",
        hide: false,
      },
    },
    {
      path: "about",
      name: "main.about",
      component: () => import("@/views/About.vue"),
      meta: { requiresLogin: true },
      props: {
        title: "About",
        icon: "mdi-home",
        hide: false,
      },
    },
  ],
};
