import { createBrowserRouter, Navigate } from "react-router-dom"

type GuestGuardProps = {
    children: ReactElement
  }
  
  function GuestGuard({ children }: GuestGuardProps) {
    const isAuthorized = useAppSelector(selectIsAuthorized)
  
    if (!isAuthorized) return <Navigate to="/login" />
  
    return children
  }
  
  type AuthGuardProps = {
    children: ReactElement
  }
  
  function AuthGuard({ children }: AuthGuardProps) {
    const isAuthorized = useAppSelector(selectIsAuthorized)
  
    if (isAuthorized) return <Navigate to="/" />
  
    return children
  }
  
  export const appRouter = () =>
    createBrowserRouter([
      {
        element: baseLayout,
        errorElement: <div>error</div>,
        loader: async () => {
          return await featureToggleLoader(appStore.dispatch)
        },
        children: [
          {
            path: '/login',
            element: (
              <AuthGuard>
                <LoginPage />
              </AuthGuard>
            ),
          },
          {
            path: '/user/wishlist',
            element: (
              <GuestGuard>
                <WishlistPage />
              </GuestGuard>
            ),
          },
          {
            path: '/user/cart',
            element: (
              <GuestGuard>
                <CartPage />
              </GuestGuard>
            ),
          },
          {
            path: '/category/:categoryId',
            element: <CategoryPage />,
          },
          {
            path: '/product/:productId',
            element: <ProductPage />,
          },
        ],
      },
      {
        element: layoutWithSidebar,
        errorElement: <div>error</div>,
        loader: async () => {
          return await featureToggleLoader(appStore.dispatch)
        },
        children: [
          {
            path: '/',
            element: <MainPage />,
          },
        ],
      },
    ])