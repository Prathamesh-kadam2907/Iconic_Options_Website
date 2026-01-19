import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import DummyUsers from "../../utils/DummyUser";
import { FaUser, FaLock, FaPhone, FaEye, FaEyeSlash } from "react-icons/fa";

const SignIn = () => {
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = () => {
    setIsLoading(true);

    setTimeout(() => {
      const user = DummyUsers.find(
        (u) => u.mobile === mobile && u.password === password
      );

      if (!user) {
        alert("Invalid Mobile Number or Password");
        setIsLoading(false);
        return;
      }

      localStorage.setItem(
        "user",
        JSON.stringify({ name: user.name, photo: user.photo })
      );

      window.dispatchEvent(new Event("userLogin"));
      navigate("/buyer");
      setIsLoading(false);
    }, 1500);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleLogin();
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center p-4"
      style={{
        backgroundColor: "#E0F2F2",
        backgroundImage: "radial-gradient(#479490 0.5px, transparent 0.5px)",
        backgroundSize: "20px 20px",
      }}
    >
      <div className="flex flex-col md:flex-row w-full max-w-5xl shadow-2xl rounded-2xl overflow-hidden">
       
        <div
          className="hidden md:flex md:w-2/5 flex-col justify-center items-center p-8 text-white"
          style={{
            background: "linear-gradient(135deg, #479490 0%, #2d6d69 100%)",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div className="absolute top-0 left-0 w-full h-full opacity-10">
            {[...Array(15)].map((_, i) => (
              <div
                key={i}
                className="absolute rounded-full"
                style={{
                  width: `${Math.random() * 80 + 40}px`,
                  height: `${Math.random() * 80 + 40}px`,
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  backgroundColor: "#FFFFFF",
                }}
              />
            ))}
          </div>

          <div className="relative z-10 text-center">
            <div className="mb-6">
              <div className="text-5xl mb-3">👋</div>
              <h1 className="text-2xl font-bold mb-3">Welcome Back!</h1>
              <p className="text-teal-100">
                Sign in to access your account and continue your journey with
                us.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl mt-6">
              <h3 className="text-lg font-semibold mb-3">Why Sign In?</h3>
              <ul className="space-y-2 text-sm text-left">
                <li className="flex items-center">
                  <div className="w-5 h-5 rounded-full bg-teal-300 flex items-center justify-center mr-2">
                    <span className="text-teal-900 text-xs">✓</span>
                  </div>
                  <span>Access exclusive features</span>
                </li>
                <li className="flex items-center">
                  <div className="w-5 h-5 rounded-full bg-teal-300 flex items-center justify-center mr-2">
                    <span className="text-teal-900 text-xs">✓</span>
                  </div>
                  <span>Track your orders</span>
                </li>
                <li className="flex items-center">
                  <div className="w-5 h-5 rounded-full bg-teal-300 flex items-center justify-center mr-2">
                    <span className="text-teal-900 text-xs">✓</span>
                  </div>
                  <span>Personalized recommendations</span>
                </li>
                <li className="flex items-center">
                  <div className="w-5 h-5 rounded-full bg-teal-300 flex items-center justify-center mr-2">
                    <span className="text-teal-900 text-xs">✓</span>
                  </div>
                  <span>Fast checkout experience</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

       
        <div className="md:w-3/5 bg-white p-6 md:p-8">
          <div className="mb-6 text-center md:text-left">
            <div className="flex justify-center md:justify-start items-center mb-3">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center mr-2"
                style={{ backgroundColor: "#E0F2F2" }}
              >
                <FaUser className="text-teal-600 text-lg" />
              </div>
              <h2 className="text-2xl font-bold" style={{ color: "#0D9488" }}>
                Sign In
              </h2>
            </div>
            <p className="text-gray-600 text-sm">
              Enter your credentials to access your account
            </p>
          </div>

          <div className="space-y-4">
           
            <div>
              <label className="block text-sm font-semibold mb-1 text-gray-700">
                Mobile Number
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaPhone className="text-gray-400 text-sm" />
                </div>
                <input
                  type="tel"
                  placeholder="Enter your 10-digit mobile number"
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value)}
                  onKeyPress={handleKeyPress}
                  className="w-full pl-9 pr-3 py-2.5 text-sm border-2 rounded-lg outline-none transition-all duration-200 focus:border-teal-500 hover:border-teal-400"
                  style={{ borderColor: "#6AE4DE" }}
                />
              </div>
            </div>

           
            <div>
              <label className="block text-sm font-semibold mb-1 text-gray-700">
                Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaLock className="text-gray-400 text-sm" />
                </div>
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  onKeyPress={handleKeyPress}
                  className="w-full pl-9 pr-10 py-2.5 text-sm border-2 rounded-lg outline-none transition-all duration-200 focus:border-teal-500 hover:border-teal-400"
                  style={{ borderColor: "#6AE4DE" }}
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <FaEyeSlash className="text-gray-400 hover:text-teal-600 text-sm" />
                  ) : (
                    <FaEye className="text-gray-400 hover:text-teal-600 text-sm" />
                  )}
                </button>
              </div>
            </div>

          
            <div className="text-right">
              <Link to="/forgotpassword">
                <span
                  className="text-xs font-medium cursor-pointer hover:underline transition-all duration-200"
                  style={{ color: "#479490" }}
                >
                  Forgot Password?
                </span>
              </Link>
            </div>

           
            <button
              onClick={handleLogin}
              disabled={isLoading}
              className="w-full py-2.5 rounded-lg font-semibold text-sm text-white transition-all duration-300 hover:scale-[1.01] hover:shadow disabled:opacity-70 disabled:cursor-not-allowed"
              style={{
                backgroundColor: "#479490",
                background: "linear-gradient(135deg, #479490 0%, #2d6d69 100%)",
              }}
            >
              {isLoading ? (
                <div className="flex items-center justify-center">
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                  Signing In...
                </div>
              ) : (
                "Sign In"
              )}
            </button>

            
            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-xs">
                <span className="px-3 bg-white text-gray-500">Or</span>
              </div>
            </div>

           
            <div className="text-center pt-0">
              <p className="text-gray-600 text-sm mb-3">
                Don't have an account yet?
              </p>
              <Link to="/signup">
                <button
                  className="w-full py-2.5 rounded-lg font-semibold text-sm transition-all duration-300 hover:scale-[1.01] border-2 hover:shadow-sm"
                  style={{
                    color: "#479490",
                    borderColor: "#479490",
                    backgroundColor: "transparent",
                  }}
                >
                  Create New Account
                </button>
              </Link>
            </div>
          </div>

         
          <div className="mt-6 text-center">
            <p className="text-xs text-gray-500">
              By signing in, you agree to our{" "}
              <Link to="/terms" className="text-teal-600 hover:underline">
                Terms
              </Link>{" "}
              and{" "}
              <Link to="/privacy" className="text-teal-600 hover:underline">
                Privacy Policy
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
