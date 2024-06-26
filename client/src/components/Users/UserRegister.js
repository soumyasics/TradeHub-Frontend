import React, { useEffect, useState } from "react";
import userreg from "../../assets/images/userreg.jpg";
import MainNav from "../homeComponents/Navbar/MainNav";
import Footer from "../Footer/Footer";
import { axiosMultipartInstance } from "../../apis/axiosMultipartInstance";
import { Navigate, useNavigate } from "react-router-dom";
import { BiImageAdd } from "react-icons/bi";
import { FiEdit2 } from "react-icons/fi";
import { toast } from "react-hot-toast";

function UserRegister() {
  const navigate = useNavigate();

  const [data, setData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    contact: "",
    password: "",
    gender: "",
    profile: null,
    repassword: "",
    checkbox: false,
  });

  const [profileImage, setProfileImage] = useState(null);

  const handleChange = (e) => {
    const { name, value, files, type } = e.target;
    if (type === "file") {
      const file = files[0];
      setData((prevData) => ({
        ...prevData,
        [name]: file,
      }));
    } else if (type === "checkbox") {
      setData((prevData) => ({
        ...prevData,
        [name]: e.target.checked,
      }));
    } else {
      setData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  useEffect(() => {
    console.log("data => ", data);
  }, [data]);

  const handleChangeChecked = (e) => {
    data.checkbox = e.target.checked;

    validateCheckbox(data);
  };
  const handleImageUpload = (e) => {
    setProfileImage(URL.createObjectURL(e.target.files[0]));
  };

  function validateCheckbox(value) {
    return true;
  }

  const checkValidity = () => {
    const {
      firstname,
      lastname,
      email,
      contact,
      password,
      gender,
      profile,
      checkbox,
      repassword,
    } = data;

    if (!firstname) {
      toast.error("Firstname is required");
      return false;
    }
    if (!lastname) {
      toast.error("Lastname is required");
      return false;
    }

    if (!gender) {
      toast.error("Gender is required");
      return false;
    }
    if (!email) {
      toast.error("Email is required");
      return false;
    }
    if (!contact) {
      toast.error("Phone number is required");
      return false;
    }

    if (contact.length !== 10) {
      toast.error("Phone number must be 10 digits");
      return false;
    }

    if (!password) {
      toast.error("Password is required");
      return false;
    }
    const passwordRegex = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[A-Z]).{6,}$/;
    if (!passwordRegex.test(password)) {
      toast.error(
        "Password must contain at least one number, one special character, and one capital letter"
      );
      return false;
    }

    if (!repassword) {
      toast.error("Confirm Password is required");
      return false;
    }

    if (password !== repassword) {
      toast.error("Passwords do not match");
      return false;
    }

    if (!password.trim()) {
      toast.error("Password is required");
      return false;
    }

    console.log("pass", passwordRegex.test(password));

    if (!checkbox) {
      toast.error("You must agree to the terms and conditions.");
      return false;
    }

    if (!data.repassword.trim()) {
      toast.error("Confirm Password is required");
      return false;
    } else if (data.repassword !== data.password) {
      toast.error("Passwords do not match");
      return false;
    }

    if (!profile) {
      toast.error("Profile photo is required");
      return false;
    }
    return true;
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!checkValidity()) {
      return;
    }

    const formData = new FormData();
    formData.append("firstname", data.firstname);
    formData.append("lastname", data.lastname);
    formData.append("email", data.email);
    formData.append("contact", data.contact);
    formData.append("file", data.profile);
    formData.append("password", data.password);
    formData.append("gender", data.gender);

    try {
      const res = await axiosMultipartInstance.post("/registerUser", data);
      console.log("user regsit", res);
      if (res.data.status === 200) {
        toast.success("Registration Successfull");
        navigate("/user/login");
      } else {
        toast.error(`Registeration is failed : ${res.data.msg}`);
      }
    } catch (error) {
      console.error("There was an error!", error);
      alert("Error");
    }
  };

  const handleFileChange = (e) => {
    handleChange(e);
    handleImageUpload(e);
  };

  return (
    <div>
      <MainNav />
      <div className="user-register-box container mb-5 mt-4 pb-5">
        <div className="row">
          <div className="col-5">
            <img className="user-register-img" src={userreg} alt="img"></img>
          </div>
          <div className="col-7">
            <form onSubmit={handleSubmit}>
              <div className="row">
                <div className="col container ">
                  <div>
                    <label className="user-register-label mt-3">Name</label>
                    <input
                      type="text"
                      placeholder="First Name"
                      className="user-register-textbox mt-2"
                      value={data.firstname}
                      name="firstname"
                      onChange={handleChange}
                    />

                    <input
                      type="text"
                      placeholder="Last Name"
                      className="user-register-textbox mt-5"
                      value={data.lastname}
                      name="lastname"
                      onChange={handleChange}
                    />
                  </div>
                  <div></div>
                  <div>
                    <label className="user-register-label mt-5">Gender</label>
                    <input
                      type="radio"
                      className="ms-3"
                      id="user-register-radio"
                      name="gender"
                      onChange={handleChange}
                      value="male"
                      checked={data.gender === "male"}
                    />
                    <label className="user-register-label ms-2">Male</label>
                    <input
                      type="radio"
                      className="ms-3"
                      id="user-register-radio"
                      name="gender"
                      onChange={handleChange}
                      value="female"
                      checked={data.gender === "female"}
                    />
                    <label className="user-register-label ms-2">Female</label>
                  </div>
                  <br></br>
                  <div>
                    <label className="user-register-label mt-4">Email</label>
                    <input
                      type="email"
                      placeholder="Email"
                      className="user-register-textbox mt-2"
                      value={data.email}
                      name="email"
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <label className="user-register-label mt-4">
                      Phone number
                    </label>
                    <input
                      type="text"
                      placeholder="Phone number"
                      className="user-register-textbox mt-2"
                      value={data.contact}
                      name="contact"
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="col">
                  <div className="user-register-icon">
                    {profileImage ? (
                      <img
                        src={profileImage}
                        alt="profile"
                        className="rounded-circle"
                        width="200"
                        height="200"
                      />
                    ) : (
                      <BiImageAdd
                        size={190}
                        color="grey"
                        className="rounded-circle p-3"
                      />
                    )}
                    <label className="upload-icon">
                      <FiEdit2 className="" color="grey" />
                      <input
                        type="file"
                        style={{ display: "none" }}
                        name="profile"
                        onChange={handleFileChange}
                      />
                    </label>
                  </div>
                  <div className="mt-4">
                    <label className="user-register-label mt-3">Password</label>
                    <input
                      type="password"
                      placeholder="Password"
                      className="user-register-textbox mt-2"
                      value={data.password}
                      name="password"
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <label className="user-register-label mt-4">
                      Re-enter Password
                    </label>
                    <input
                      type="password"
                      placeholder="Re-enter Password"
                      className="user-register-textbox mt-2"
                      value={data.repassword}
                      name="repassword"
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div
                  style={{ height: "50px" }}
                  className="mt-4  form-check d-flex shadow justify-content-between align-items-center"
                >
                  <div className="ms-3">
                    <input
                      className="form-check-input "
                      type="checkbox"
                      value={data.checkbox}
                      name="checkbox"
                      onChange={handleChangeChecked}
                      id="flexCheckChecked"
                    />
                    <label
                      className="form-check-label label-user-register"
                      for="flexCheckChecked"
                    >
                      Agree to Terms and Condition
                    </label>
                  </div>
                  <div>
                    <p className="mb-0">
                      already have an account?
                      <span
                        onClick={() => navigate("/user/login")}
                        className="text-primary fw-bold"
                        style={{ cursor: "pointer" }}
                      >
                        {" "}
                        Login
                      </span>
                    </p>
                  </div>
                </div>

                <div className="text-center">
                  <button type="submit" className="user-register-btn mt-4">
                    Register
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default UserRegister;
