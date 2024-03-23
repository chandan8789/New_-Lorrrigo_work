import { Route, Routes } from "react-router-dom";
import Navbar from "./navbar/Navbar";
import CreateShipment from "./pages/create-shipment/CreateShipment";
import ManageAddresses from "./pages/manage-addresses/ManageAddresses";
import ViewShipment from "./pages/view-shipment/ViewShipment";
import PackageAndProductDetails from "./pages/create-shipment/PackageAndOrderDetails";
import SellerAndReturnDetails from "./pages/create-shipment/SellerAndReturnDetails";
import Login from "./pages/auth-page/login-signup/Login";
import Signup from "./pages/auth-page/login-signup/Signup";
import CreateAddress from "./pages/manage-addresses/CreateAddress";
import OrderStatus from "./pages/create-shipment/OrderStatus";
import NewCreateShipment from "./pages/create-shipment/NewCreateShipment";
import Setting_Page from "./pages/create-shipment/Setting_Page";
import SelectCourierPartner from "./pages/create-shipment/SelectCourierPartner";
import RemittanceTable from "./pages/create-shipment/RemittanceTable";
import RemittanceDetails from "./pages/create-shipment/RemittanceDetails";
import BillingPage from "./pages/create-shipment/BillingPage";
import ShippingPage from "./pages/create-shipment/ShippingPage";
import ShippingRateCal from "./pages/create-shipment/ShippingRateCal";
import CreateBulkOrder from "./pages/create-shipment/CreateBulkOrder";
import Overview from "./pages/dashboard/Overview";
import Order from "./pages/dashboard/Order";
import ShippingCharges from "./pages/create-shipment/ShippingCharges";
import DomesticWalletRefund from "./pages/wallets/DomesticWalletRefund";
import DomesticWalletSpend from "./pages/wallets/DomesticWalletSpend";
import DomesticRecharge from "./pages/wallets/DomesticRecharge";
import Shipment from "./pages/dashboard/Shipment";
import RTO from "./pages/dashboard/RTO";
import Courier from "./pages/dashboard/Courier";
import Delay from "./pages/dashboard/Delay";
import Tracking from "./pages/dashboard/Tracking";
import { createContext, useEffect, useState } from "react";
import Forgot from "./pages/auth-page/login-signup/Forgot";
import Reverse from "./pages/create-shipment/Reverse";
import BusinessType from "./pages/kyc/BuinessType";
import B2B from "./pages/dashboard/B2B";
import B2C from "./pages/dashboard/B2C";
import Invoice from "./pages/create-shipment/Invoice";
import Support from "./pages/create-shipment/Support";

export const navbarOpenContext = createContext(null);

function App() {
  const [userDetails, setUserDetails] = useState(null);

  useEffect(() => {
    setUserDetails(JSON.parse(localStorage.getItem("user")));
  }, []);

  const Layout = ({ children }) => {
    const [isNavbarOpen, setIsNavbarOpen] = useState(false);

    if (!userDetails) {
      return <Login />;
    }
    return (
      <navbarOpenContext.Provider value={{ isNavbarOpen, setIsNavbarOpen }}>
        <Navbar />
        {children}
      </navbarOpenContext.Provider>
    );
  };

  return (
    <>
      {/* <Navbar /> */}
      <Routes>
        <Route
          path="/"
          element={
            userDetails ? (
              <Layout>
                {" "}
                <Overview />
              </Layout>
            ) : (
              <Signup />
            )
          }
        />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot" element={<Forgot />} />
        <Route
          path="/overview"
          element={
            <Layout>
              <Overview />
            </Layout>
          }
        />
        <Route
          path="/shipment"
          element={
            <Layout>
              <Shipment />
            </Layout>
          }
        />

        {/* <Route path="/create-shipment" element={<CreateShipment />} /> */}
        {/* <Route path="/manage-address" element={<ManageAddresses />} /> */}
        {/* <Route path="/view-shipment" element={<ViewShipment />} /> */}
        {/* <Route path="/package-product-details" element={<PackageAndProductDetails />}/> */}
        {/* <Route path="/seller-and-return-details" element={<SellerAndReturnDetails />}/> */}
        {/* <Route path="/create-address" element={<CreateAddress />} /> */}

        <Route
          path="/new-create-shipment"
          element={
            <Layout>
              <NewCreateShipment />
            </Layout>
          }
        />
        <Route
          path="/order-status"
          element={
            <Layout>
              <OrderStatus />
            </Layout>
          }
        />
        <Route
          path="/setting-page"
          element={
            <Layout>
              <Setting_Page />
            </Layout>
          }
        />
        <Route
          path="/select-courier-partner/:productId"
          element={
            <Layout>
              <SelectCourierPartner />
            </Layout>
          }
        />
        <Route
          path="/remittance"
          element={
            <Layout>
              <RemittanceTable />
            </Layout>
          }
        />
        <Route
          path="/remittance-details"
          element={
            <Layout>
              <RemittanceDetails />
            </Layout>
          }
        />
        <Route
          path="/billing-page"
          element={
            <Layout>
              <BillingPage />
            </Layout>
          }
        />
        <Route
          path="/shipping-page"
          element={
            <Layout>
              <ShippingPage />
            </Layout>
          }
        />
        <Route
          path="/shipping-rate-cal"
          element={
            <Layout>
              <ShippingRateCal />
            </Layout>
          }
        />
        <Route
          path="/reverse"
          element={
            <Layout>
              <Reverse />
            </Layout>
          }
        />
        <Route
          path="/bulk-order"
          element={
            <Layout>
              <CreateBulkOrder />
            </Layout>
          }
        />
        <Route
          path="/order"
          element={
            <Layout>
              <Order />
            </Layout>
          }
        />
        <Route
          path="/shipping-charges"
          element={
            <Layout>
              <ShippingCharges />
            </Layout>
          }
        />
        <Route
          path="/domestic-wallet-refund"
          element={
            <Layout>
              <DomesticWalletRefund />
            </Layout>
          }
        />
        <Route
          path="/domestic-wallet-spends"
          element={
            <Layout>
              <DomesticWalletSpend />
            </Layout>
          }
        />
        <Route
          path="/domestic-reacharge"
          element={
            <Layout>
              <DomesticRecharge />
            </Layout>
          }
        />
        <Route
          path="/rto"
          element={
            <Layout>
              <RTO />
            </Layout>
          }
        />
        <Route
          path="/courier"
          element={
            <Layout>
              <Courier />
            </Layout>
          }
        />
        <Route
          path="/delay"
          element={
            <Layout>
              <Delay />
            </Layout>
          }
        />
        <Route
          path="/tracking"
          element={
            <Layout>
              <Tracking />
            </Layout>
          }
        />
        <Route
          path="/b2b"
          element={
            <Layout>
              <B2B />
            </Layout>
          }
        />
        <Route
          path="/b2c"
          element={
            <Layout>
              <B2C />
            </Layout>
          }
        />

        {/* Kyc Update pages */}
        <Route
          path="/kyc"
          element={
            <Layout>
              <BusinessType />
            </Layout>
          }
        />
        <Route
          path="/invoice"
          element={
            <Layout>
              <Invoice />
            </Layout>
          }
        />
        <Route
          path="/supports"
          element={
            <Layout>
              <Support />
            </Layout>
          }
        />
      </Routes>
    </>
  );
}

export default App;
