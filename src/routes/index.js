
import AdminPage from "../pages/AdminPage/AdminPage";
import DetailsOrderPage from "../pages/DetailsOrderPage/DetailsOrderPage";
import HomePage from "../pages/HomePage/HomePage";
import About from "../pages/About/About";
import MyOrderPage from "../pages/MyOrder/MyOrder";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import OrderPage from "../pages/OrderPage/OrderPage";
import OrderSucess from "../pages/OrderSuccess/OrderSuccess";
import PaymentPage from "../pages/PaymentPage/PaymentPage";
import ProductDetailsPage from "../pages/ProductDetailsPage/ProductDetailsPage";
import ProductsPage from "../pages/ProductsPage/ProductsPage";
import ProfilePage from "../pages/Profile/ProfilePage";
import SignInPage from "../pages/SignInPage/SignInPage";
import SignUpPage from "../pages/SignUpPage/SignUpPage";
import TypeProductPage from "../pages/TypeProductPage/TypeProductPage";
import CategoryList from "../pages/AdminPage/Category/CategoryList";
import CategoryDetail from "../pages/AdminPage/Category/Detail/CategoryDetail";
import RevenueByWeek from "../pages/AdminPage/components/RevenueByWeek";
import hatxaykhoProducts from "../pages/hatxaykhoProducts/hatxaykhoProducts";
import hattuoiProducts from "../pages/hattuoiProducts/hattuoiProducts";
import hatnhieubeoProducts from "../pages/hatnhieubeoProducts/hatnhieubeoProducts";
import hatitbeoProducts from "../pages/hatitbeoProducts/hatitbeoProducts";

export const routes = [
    {
        path: '/',
        page: HomePage,
        isShowHeader: true,
    },
    {
        path: '/about',
        page: About,
        isShowHeader: true
    },
    {
        path: '/order',
        page: OrderPage,
        isShowHeader: true
    },
    {
        path: '/my-order',
        page: MyOrderPage,
        isShowHeader: true
    },
    {
        path: '/details-order/:id',
        page: DetailsOrderPage,
        isShowHeader: true
    },
    {
        path: '/payment',
        page: PaymentPage,
        isShowHeader: true
    },
    {
        path: '/orderSuccess',
        page: OrderSucess,
        isShowHeader: true
    },
    {
        path: '/allProducts',
        page: ProductsPage,
        isShowHeader: true
    },
    {
        path: '/hat-xay-kho',
        page: hatxaykhoProducts,
        isShowHeader: true
    },
    {
        path: '/hat-tuoi',
        page: hattuoiProducts,
        isShowHeader: true
    },
    {
        path: '/hat-it-beo',
        page: hatitbeoProducts,
        isShowHeader: true
    },
    {
        path: '/hat-nhieu-beo',
        page: hatnhieubeoProducts,
        isShowHeader: true
    },
    {
        path: '/product/:type',
        page: TypeProductPage,
        isShowHeader: true
    },
    {
        path: '/sign-in',
        page: SignInPage,
        isShowHeader: false
    },
    {
        path: '/sign-up',
        page: SignUpPage,
        isShowHeader: false
    },
    {
        path: '/product-details/:id',
        page: ProductDetailsPage,
        isShowHeader: true
    },
    {
        path: '/profile-user',
        page: ProfilePage,
        isShowHeader: true
    },
    {
        path: '/system/admin',
        page: AdminPage,
        isShowHeader: false,
        isPrivated: true
    },
    {
        path: '/system/admin/category',
        page: CategoryList,
        isShowHeader: false,
        isPrivated: true
    },
    {
        path: '/system/admin/category/new',
        page: CategoryDetail,
        isShowHeader: false,
        isPrivated: true
    },
    {
        path: '/system/admin/category/:id',
        page: CategoryDetail,
        isShowHeader: false,
        isPrivated: true
    },
    {
        path: '/system/admin/order/revenue',
        page: RevenueByWeek,
        isShowHeader: false,
        isPrivated: true
    },
    {
        path: '*',
        page: NotFoundPage
    },
]