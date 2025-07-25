import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { RiArrowDropRightFill } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { signupUser } from "../api/auth";
import { FiEye } from "react-icons/fi";
import { FaRegEyeSlash } from "react-icons/fa6";
import { loginSuccess } from "../redux/slices/authSlice";
import { routes } from "../routes/routes";
import { loading } from "../redux/slices/loaderSlice";
import { LoaderData } from "../utils/common-components";
import Squares from "../utils/Squares";
import { images } from "../assets/images";

export const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({});
  const [passwordStrength, setPasswordStrength] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.loader.loading);

  useEffect(() => {
    if (isAuthenticated) {
      navigate(routes.home);
    }
  }, [isAuthenticated, navigate]);

  const validateEmail = (email) =>
    /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);

  const validatePassword = (password) => {
    if (password.length < 8) return "Too short";
    if (!/(?=.*[A-Z])/.test(password)) return "Add uppercase letter";
    if (!/(?=.*\d)/.test(password)) return "Add a number";
    if (!/(?=.*[@$!%*?&])/.test(password)) return "Add special character";
    return "Strong";
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({ ...formData, [name]: type === "checkbox" ? checked : value });
    if (name === "password") setPasswordStrength(validatePassword(value));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(loading(true));
    let newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!validateEmail(formData.email))
      newErrors.email = "Invalid email format";
    if (passwordStrength !== "Strong") newErrors.password = passwordStrength;
    if (formData.password !== formData.confirmPassword)
      newErrors.confirmPassword = "Passwords do not match";

    setErrors(newErrors);
    if (Object.keys(newErrors).length) {
      dispatch(loading(false));
      return;
    }

    if (!Object.keys(newErrors).length) {
      try {
        const result = await signupUser({
          name: formData.name,
          email: formData.email,
          password: formData.password,
        });
        if (result.success) {
          console.log("Account created");
          dispatch(loading(false));
          dispatch(loginSuccess({ user: result.data }));
          navigate(routes.home);
        }
      } catch (error) {
        if (error.message) {
          dispatch(loading(false));
          setErrors((prevErrors) => ({
            ...prevErrors,
            email: error.message,
          }));
        }
      }
    }
  };
  return (
    <div className="relative w-screen h-screen bg-[#1d1e2c] overflow-hidden">
      <Squares
        speed={0.5}
        squareSize={50}
        direction="diagonal"
        borderColor="#3b3c51"
        hoverFillColor="#02a9f7"
        className="absolute inset-0 w-full h-full z-0"
      />

      <div className="absolute inset-0 flex items-center justify-center z-10 px-4 pointer-events-none">
        <div className="w-full max-w-lg py-8 px-10 bg-[#23213c]/60 backdrop-blur rounded-xl border border-[#5b4e89] shadow-xl text-[#b084f7]">
          <div className="flex flex-row items-center gap-4 mb-8">
            <img src={images.logo} className="w-16 sm:mx-0" alt="Logo" />
            <h1 className="font-anta text-4xl sm:text-5xl text-center sm:text-left">
              GAiget
            </h1>
          </div>

          <form
            className="flex flex-col gap-y-4  my-2 text-white pointer-events-auto"
            onSubmit={handleSubmit}
          >
            {/* Name */}
            <div className="flex flex-col gap-y-1">
              <label className="block font-bold">Your name</label>
              <input
                type="text"
                name="name"
                className="w-full p-2 rounded-xl border-2 border-[#b084f7]/50 focus:ring-2 focus:ring-[#b084f7] focus:outline-none "
                required
                value={formData.name}
                onChange={handleChange}
              />
              {errors.name && (
                <p className="text-red-500 text-sm">{errors.name}</p>
              )}
            </div>

            {/* Email */}
            <div className="flex flex-col gap-y-1">
              <label className="font-bold">Email</label>
              <input
                type="email"
                name="email"
                className="w-full p-2 rounded-xl border-2 border-[#b084f7]/50 focus:ring-2 focus:ring-[#b084f7] focus:outline-none"
                required
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email}</p>
              )}
            </div>

            {/* Password */}
            <div className="flex flex-col gap-y-1">
              <label className="block font-bold">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  className="w-full p-2 rounded-xl border-2 border-[#b084f7]/50 focus:ring-2 focus:ring-[#b084f7] focus:outline-none"
                  required
                  value={formData.password}
                  onChange={handleChange}
                />
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#b084f7] font-bold"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? <FaRegEyeSlash /> : <FiEye />}
                </button>
              </div>
              {passwordStrength && (
                <p
                  className={`text-sm ${
                    passwordStrength === "Strong"
                      ? "text-green-500"
                      : "text-red-500"
                  }`}
                >
                  {passwordStrength}
                </p>
              )}
            </div>

            {/* Confirm Password */}
            <div className="flex flex-col gap-y-1">
              <label className="font-bold block">Confirm Password</label>
              <input
                type="password"
                name="confirmPassword"
                className="w-full p-2 rounded-xl border-2 border-[#b084f7]/50 focus:ring-2 focus:ring-[#b084f7] focus:outline-none"
                required
                value={formData.confirmPassword}
                onChange={handleChange}
              />
              {errors.confirmPassword && (
                <p className="text-red-500 text-sm">{errors.confirmPassword}</p>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full px-4 py-2 rounded-lg border border-[#b084f7] text-[#b084f7] bg-transparent hover:bg-[#b084f7] hover:text-white transition focus:outline-none focus:ring-2 focus:ring-[#b084f7]"
            >
              Create Account
            </button>
          </form>

          {/* Sign In Link */}
          <div className="mt-4 flex items-center justify-center sm:justify-start cursor-auto ">
            Already have an account?
            <Link
              to={routes.loginEmail}
              className="text-[#b084f7] ml-2 flex items-center gap-1 hover:underline  pointer-events-auto cursor-pointer"
            >
              Sign in
            </Link>
          </div>
        </div>
      </div>

      {/* Global Loader */}
      <LoaderData isLoading={isLoading} />
    </div>
  );
};
