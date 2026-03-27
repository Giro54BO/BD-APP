import { createHashRouter, Navigate } from "react-router";
import { RootLayout } from "./layouts/RootLayout";
import { ProfileLayout } from "./layouts/ProfileLayout";
import { HomePage } from "./pages/HomePage";
import { ProductDetailPage } from "./pages/ProductDetailPage";
import { SearchPage } from "./pages/SearchPage";
import { FilterPage } from "./pages/FilterPage";
import { CartPage } from "./pages/CartPage";
import { CheckoutPage } from "./pages/CheckoutPage";
import { LoginPage } from "./pages/LoginPage";
import { RegisterPage } from "./pages/RegisterPage";
import { ForgotPasswordPage } from "./pages/ForgotPasswordPage";
import { AboutPage } from "./pages/AboutPage";
import { BlogPage } from "./pages/BlogPage";
import { BlogPostPage } from "./pages/BlogPostPage";
import { ProfileMenuPage } from "./components/profile/ProfileMenuPage";
import { ProfilePage } from "./pages/ProfilePage";
import { ProfileEditPage } from "./pages/ProfileEditPage";
import { ProfileSavedPage } from "./pages/ProfileSavedPage";
import { OrdersPage } from "./pages/OrdersPage";
import { OrderDetailsPage } from "./pages/OrderDetailsPage";
import { GaragePage } from "./pages/GaragePage";
import { LogoutPage } from "./pages/LogoutPage";
import { HelpCenterPage } from "./pages/HelpCenterPage";
import { CategoryPage } from "./pages/CategoryPage";
import { CategoriasPage } from "./pages/CategoriasPage";
import { NotFoundPage } from "./pages/NotFoundPage";
import { NoResultsPage } from "./pages/NoResultsPage";

const LegacyOfertasRedirect = () => <Navigate to="/categorias" replace />;

export const router = createHashRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: HomePage,
      },
      {
        path: "search",
        Component: SearchPage,
      },
      {
        path: "filters",
        Component: FilterPage,
      },
      {
        path: "product/:id",
        Component: ProductDetailPage,
      },
      {
        path: "cart",
        Component: CartPage,
      },
      {
        path: "checkout",
        Component: CheckoutPage,
      },
      {
        path: "login",
        Component: LoginPage,
      },
      {
        path: "register",
        Component: RegisterPage,
      },
      {
        path: "forgot-password",
        Component: ForgotPasswordPage,
      },
      {
        path: "nosotros",
        Component: AboutPage,
      },
      {
        path: "blog",
        Component: BlogPage,
      },
      {
        path: "blog/:id",
        Component: BlogPostPage,
      },
      {
        path: "profile",
        Component: ProfileLayout,
        children: [
          {
            index: true,
            Component: ProfileMenuPage,
          },
          {
            path: "personal",
            Component: ProfilePage,
          },
          {
            path: "edit",
            Component: ProfileEditPage,
          },
          {
            path: "saved",
            Component: ProfileSavedPage,
          },
          {
            path: "orders",
            Component: OrdersPage,
          },
          {
            path: "orders/:orderId",
            Component: OrderDetailsPage,
          },
          {
            path: "garage",
            Component: GaragePage,
          },
        ],
      },
      {
        path: "logout",
        Component: LogoutPage,
      },
      {
        path: "help-center",
        Component: HelpCenterPage,
      },
      {
        path: "categorias",
        Component: CategoriasPage,
      },
      {
        path: "ofertas",
        Component: LegacyOfertasRedirect,
      },
      {
        path: "category/:categoryName",
        Component: CategoryPage,
      },
      {
        path: "no-results",
        Component: NoResultsPage,
      },
      {
        path: "*",
        Component: NotFoundPage,
      },
    ],
  },
]);
