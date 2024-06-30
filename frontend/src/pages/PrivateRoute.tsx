import { useSelector, TypedUseSelectorHook } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

// Create a typed version of useSelector
const useTypedSelector: TypedUseSelectorHook<any> = useSelector;

function PrivateRoute() {
  const isLoggedIn = useTypedSelector((state) => state.user.isLoggedIn);
  return isLoggedIn ? <Outlet /> : <Navigate to="/" />;
}

export default PrivateRoute;
