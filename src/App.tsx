import { useEffect } from "react";
import "./App.css";
import AppBar from "./components/app-bar";
import { useDispatch, useSelector } from "react-redux";
import { loadProducts } from "./redux-store/actions";
import { LoadingIndicator } from "./components/LoadingIndicator/LoadingIndicator.component";
import { ProductResultsComponent } from "./components/product/product-results.component";

function App() {
  const loading: Boolean = useSelector<any, Boolean>(
    (state) => state.global.loadingIndicator
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadProducts({ dispatch }));
  }, [dispatch]);

  return (
    <div className="App">
      {loading && <LoadingIndicator />}
      <AppBar />
      <ProductResultsComponent />
    </div>
  );
}

export default App;
