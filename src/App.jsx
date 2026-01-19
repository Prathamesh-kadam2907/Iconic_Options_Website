import React from "react";
import { Routes, Route } from "react-router-dom";
import Nav from "./component/Navbar/Nav";
import SignIn from "./component/Navbar/SignIn";
import SignUp from "./component/Navbar/SignUp";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Services from "./Pages/Services";
import Property from "./Pages/Property";
import Contact from "./Pages/Contact";
import PostProperty from "./component/Property/PostProperty";
import ForgotPassword from "./component/Navbar/ForgotPassword";
import Profile from "./component/Navbar/Profile";
import BuyerFilter from "./PropertyFilters/BuyerFilter";
import BuyerProperty from "./component/Property/BuyerProperty";
import RentProperty from "./component/Property/RentProperty";
import CommericalProperty from "./component/CommericalPropertyDetails/CommericalProperty";
import PostProperty1 from "./component/Property/PostProperty1";
import PostProperty3 from "./component/Property/PostProperty3";
import PostProperty2 from "./component/Property/PostProperty2";
import PostProperty4 from "./component/Property/PostProperty4";
import PostProperty5 from "./component/Property/PostProperty5";
import PostProperty6 from "./component/Property/PostProperty6";
import BuyPropertyOverview from "./component/BuyPropertyDetails/BuyPropertyOverview";
import RentPropertyOverview from "./component/RentPropertyDetails/RentPropertyOverview";
import SubscriptionPlans from "./component/Subscriptions/SubscriptionPlans";
import RentPropertyOwnerContact from "./component/RentPropertyDetails/RentPropertyOwnerContact";
import BuyPropertyOwnerContact from "./component/BuyPropertyDetails/BuyPropertyOwnerContact";
import QuickLink from "./component/QuickLinks/QuickLinks";
import BuyerNav from "./component/Navbar/BuyerNav";
import TenantsNav from "./component/Navbar/TenantsNav";
import PgHostel from "./component/Navbar/PgHostel";
import PaymentCheckout from "./component/Subscriptions/PaymentCheckout";
import LoginPopUp from "./component/Navbar/LoginPopUp";
import BuilderDashboard from "./component/BuilderProject/BuilderDashboard";
import BuilderLogin from "./component/BuilderProject/BuilderLogin";
import BuilderRegister from "./component/BuilderProject/BuilderRegister";

const App = () => {
  return (
    <>
      <Nav />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/property" element={<Property />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/profile" element={<Profile></Profile>} />
        <Route path="/postproperty" element={<PostProperty />} />
        <Route path="/postproperty1" element={<PostProperty1 />} />
        <Route path="/postproperty2" element={<PostProperty2 />} />
        {/* <Route path="/location-details" element={<LocationDetails />} /> */}
        <Route path="/postproperty3" element={<PostProperty3 />} />
        <Route path="/postproperty4" element={<PostProperty4 />} />
        <Route path="/postproperty5" element={<PostProperty5 />} />
        <Route path="/postproperty6" element={<PostProperty6 />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path="/buyer" element={<BuyerProperty></BuyerProperty>} />
        <Route path="/rent" element={<RentProperty></RentProperty>} />
        <Route
          path="/buypropertyoverview"
          element={<BuyPropertyOverview></BuyPropertyOverview>}
        />
        <Route
          path="/rentpropertyoverview"
          element={<RentPropertyOverview />}
        />
        <Route path="/commerical" element={<CommericalProperty />} />
        <Route path="/subscription" element={<SubscriptionPlans />} />
        <Route
          path="/rentownercontact"
          element={<RentPropertyOwnerContact />}
        />
        <Route path="/buyownercontact" element={<BuyPropertyOwnerContact />} />
        <Route path="/payment" element={<PaymentCheckout></PaymentCheckout>} />
        <Route path="/buyernav" element={<BuyerNav />} />
        <Route path="/tenantnav" element={<TenantsNav />} />
        <Route path="/pghostel" element={<PgHostel />} />
      </Routes>
    </>
  );
};

export default App;
