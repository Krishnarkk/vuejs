// import App from "@/App.vue";
// import LifeCycle from "@/components/LifeCycle.vue";
// import Parent from "@/components/ParentChildCommunication/Parent.vue";
// import UserComponent from "@/components/User-component.vue";
// import { createRouter, createWebHistory } from "vue-router";

// const router = createRouter({
//   history: createWebHistory(import.meta.env.BASE_URL),
//   routes: [
//     // {
//     //   path: "/",
//     //   component: App
//     // },
//     {
//       path: "/parent",
//       component: Parent,
//     },
//     {
//       path: "/lifecycle",
//       component: LifeCycle,
//     },
//     {
//       path: "/user/:id",
//       name: UserComponent,
//       props: true,
//     },
//   ],
// });

// export default router;

import { createRouter, createWebHistory } from "vue-router";
import App from "@/App.vue"; // Importing the main App.vue component
import LifeCycle from "@/components/LifeCycle.vue"; // Import LifeCycle component
import Parent from "@/components/ParentChildCommunication/Parent.vue"; // Parent component
import UserComponent from "@/components/User-component.vue"; // UserComponent for dynamic route

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // Root Route -> Home Page (App.vue)
    // Parent Component Route
    {
      path: "/parent",
      component: Parent,
    },
    // LifeCycle Component Route
    {
      path: "/lifecycle",
      component: LifeCycle,
    },
    // Dynamic Route for User Component
    {
      path: "/user/:id",
      name: "user",
      component: UserComponent,
      props: true,
    },
  ],
});

export default router;
