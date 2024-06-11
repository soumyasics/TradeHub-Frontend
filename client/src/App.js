import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/common/home";
import UserSignup from "./pages/user/userSignup/userSignup";
import UserLogin from "./pages/user/userLogin/userLogin";
import ModLogin from "./pages/moderator/modLogin/modLogin";
import DeliveryLogin from "./pages/delivery/deliveryLogin/deliveryLogin";
import ModSignup from "./pages/moderator/modSignup/modSignup";
import DelSignup from "./pages/delivery/deliverySignup/delSignup";
import { UserProfile } from "./components/user/userProile/userProfile";
import { UserProfileEdit } from "./components/user/userProfileEdit/userProfileEdit";
import Landingpage from "./components/LandingPage/Landingpage";
import Adminlogin from "./components/Admin/Adminlogin";
import MainNav from "./components/homeComponents/Navbar/MainNav";
import Footer from "./components/Footer/Footer";
import Userlogin from "./components/user/Userlogin";
import Userforget from "./components/user/Userforget";
import UserRegister from "./components/user/UserRegister";
import AdminSidebar from "./components/Admin/AdminSidebar";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* common  */}
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="/" element={[<MainNav/>,<Landingpage/>]} />
          {/* users  */}
          <Route path="/user/signup" element={<UserSignup />} />
          <Route path="/user/login" element={[<MainNav/>,<Userlogin />,<Footer/>]} />
          <Route path="/user/profile" element={<UserProfile />} />
          <Route path="/user/profile-edit" element={<UserProfileEdit />} />
          <Route path="/user/forgetpswd" element={[<MainNav/>,<Userforget/>,<Footer/>]}/>
          <Route path="/user/register" element={[<MainNav/>,<UserRegister/>,<Footer/>]}/>
          {/* moderators  */}
          <Route path="/mod/login" element={<ModLogin />} />
          <Route path="/mod/signup" element={<ModSignup />} />

          {/* delivery  */}
          <Route path="/delivery/signup" element={<DelSignup />} />
          <Route path="/delivery/login" element={<DeliveryLogin />} />

          {/* Admin */}
          <Route path="/adminlogin" element={[<MainNav/>,<Adminlogin/>,<Footer/>]}/>
          <Route path="/admin/sidebar" element={<AdminSidebar/>}/>
          <Route path="/*" element={<h1> 404 </h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
