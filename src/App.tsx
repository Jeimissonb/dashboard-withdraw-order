import { OrderProvider } from "./contexts/ordersMockData";
import { MainPage } from "./pages/main-page/MainPage";

export function App() {
  return (
    <OrderProvider>
      <MainPage />
    </OrderProvider>
  );
}