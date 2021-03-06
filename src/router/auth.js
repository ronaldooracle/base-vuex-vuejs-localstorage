import Auth from "@/layouts/Auth";

export default {
  path: "/auth",
  redirect: { name: "auth.login" },
  component: Auth,
  children: [
    {
      path: "login",
      name: "auth.login",
      component: () => import("@/views/auth/Login.vue"),
      meta: { requiresLogin: false },
      props: {
        title: "Login",
      },
    },
    {
      path: "forgot-password",
      name: "auth.forgotPassword",
      component: () => import("@/views/auth/Logout.vue"),
      meta: { requiresLogin: false },
      props: {
        title: "Esqueci minha senha",
      },
    },
  ],
};
