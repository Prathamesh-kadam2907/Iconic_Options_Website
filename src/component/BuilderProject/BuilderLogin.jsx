import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import DummyBuilders from "../../utils/DummyBuilders";
import { FaUser, FaLock, FaBuilding, FaEye, FaEyeSlash, FaIdCard } from "react-icons/fa";

const BuilderLogin = () => {
  const [builderId, setBuilderId] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = () => {
    setIsLoading(true);

    setTimeout(() => {
      const builder = DummyBuilders.find(
        (b) => b.builderId === builderId && b.password === password
      );

      if (!builder) {
        alert("Invalid Builder ID or Password");
        setIsLoading(false);
        return;
      }

      localStorage.setItem(
        "builder",
        JSON.stringify({ 
          name: builder.name, 
          company: builder.company,
          builderId: builder.builderId,
          photo: builder.photo 
        })
      );

      window.dispatchEvent(new Event("builderLogin"));
      navigate("/builder/dashboard");
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
        backgroundColor: "#F5F3FF",
        backgroundImage: "radial-gradient(#7C3AED 0.5px, transparent 0.5px)",
        backgroundSize: "20px 20px",
      }}
    >
      <div className="flex flex-col md:flex-row w-full max-w-5xl shadow-2xl rounded-2xl overflow-hidden">
       
        <div
          className="hidden md:flex md:w-2/5 flex-col justify-center items-center p-8 text-white"
          style={{
            background: "linear-gradient(135deg, #7C3AED 0%, #5B21B6 100%)",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div className="absolute top-0 left-0 w-full h-full opacity-10">
            {[...Array(15)].map((_, i) => (
              <div
                key={i}
                className="absolute rounded-lg"
                style={{
                  width: `${Math.random() * 80 + 40}px`,
                  height: `${Math.random() * 80 + 40}px`,
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  backgroundColor: "#FFFFFF",
                  transform: `rotate(${Math.random() * 360}deg)`,
                }}
              />
            ))}
          </div>

          <div className="relative z-10 text-center">
            <div className="mb-6">
              <div className="text-5xl mb-3">🏗️</div>
              <h1 className="text-2xl font-bold mb-3">Builder Portal</h1>
              <p className="text-purple-100">
                Access your builder dashboard to manage projects, inventory, and client relationships.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl mt-6">
              <h3 className="text-lg font-semibold mb-3">Builder Benefits</h3>
              <ul className="space-y-2 text-sm text-left">
                <li className="flex items-center">
                  <div className="w-5 h-5 rounded-full bg-purple-300 flex items-center justify-center mr-2">
                    <span className="text-purple-900 text-xs">✓</span>
                  </div>
                  <span>Manage construction projects</span>
                </li>
                <li className="flex items-center">
                  <div className="w-5 h-5 rounded-full bg-purple-300 flex items-center justify-center mr-2">
                    <span className="text-purple-900 text-xs">✓</span>
                  </div>
                  <span>Track material inventory</span>
                </li>
                <li className="flex items-center">
                  <div className="w-5 h-5 rounded-full bg-purple-300 flex items-center justify-center mr-2">
                    <span className="text-purple-900 text-xs">✓</span>
                  </div>
                  <span>Connect with suppliers</span>
                </li>
                <li className="flex items-center">
                  <div className="w-5 h-5 rounded-full bg-purple-300 flex items-center justify-center mr-2">
                    <span className="text-purple-900 text-xs">✓</span>
                  </div>
                  <span>Analytics & reports</span>
                </li>
                <li className="flex items-center">
                  <div className="w-5 h-5 rounded-full bg-purple-300 flex items-center justify-center mr-2">
                    <span className="text-purple-900 text-xs">✓</span>
                  </div>
                  <span>Client management tools</span>
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
                style={{ backgroundColor: "#F5F3FF" }}
              >
                <FaBuilding className="text-purple-600 text-lg" />
              </div>
              <h2 className="text-2xl font-bold" style={{ color: "#7C3AED" }}>
                Builder Login
              </h2>
            </div>
            <p className="text-gray-600 text-sm">
              Enter your builder credentials to access the dashboard
            </p>
          </div>

          <div className="space-y-4">
           
            <div>
              <label className="block text-sm font-semibold mb-1 text-gray-700">
                Builder ID
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaIdCard className="text-gray-400 text-sm" />
                </div>
                <input
                  type="text"
                  placeholder="Enter your builder ID"
                  value={builderId}
                  onChange={(e) => setBuilderId(e.target.value)}
                  onKeyPress={handleKeyPress}
                  className="w-full pl-9 pr-3 py-2.5 text-sm border-2 rounded-lg outline-none transition-all duration-200 focus:border-purple-500 hover:border-purple-400"
                  style={{ borderColor: "#A78BFA" }}
                />
              </div>
              <p className="text-xs text-gray-500 mt-1">
                Your unique builder identification number
              </p>
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
                  className="w-full pl-9 pr-10 py-2.5 text-sm border-2 rounded-lg outline-none transition-all duration-200 focus:border-purple-500 hover:border-purple-400"
                  style={{ borderColor: "#A78BFA" }}
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <FaEyeSlash className="text-gray-400 hover:text-purple-600 text-sm" />
                  ) : (
                    <FaEye className="text-gray-400 hover:text-purple-600 text-sm" />
                  )}
                </button>
              </div>
            </div>

           
            <div className="text-right">
              <Link to="/builder/forgotpassword">
                <span
                  className="text-xs font-medium cursor-pointer hover:underline transition-all duration-200"
                  style={{ color: "#7C3AED" }}
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
                background: "linear-gradient(135deg, #7C3AED 0%, #5B21B6 100%)",
              }}
            >
              {isLoading ? (
                <div className="flex items-center justify-center">
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                  Accessing Dashboard...
                </div>
              ) : (
                "Login to Dashboard"
              )}
            </button>

            {/* Divider */}
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
                New to our builder network?
              </p>
              <Link to="/builderregister">
                <button
                  className="w-full py-2.5 rounded-lg font-semibold text-sm transition-all duration-300 hover:scale-[1.01] border-2 hover:shadow-sm"
                  style={{
                    color: "#7C3AED",
                    borderColor: "#7C3AED",
                    backgroundColor: "transparent",
                  }}
                >
                  Register as Builder
                </button>
              </Link>
            </div>

           
            <div className="text-center mt-4">
              <Link to="/signin">
                <button
                  className="text-sm transition-all duration-200 hover:underline"
                  style={{ color: "#6B7280" }}
                >
                  ← Back to User Login
                </button>
              </Link>
            </div>
          </div>

         
          <div className="mt-6 text-center">
            <p className="text-xs text-gray-500">
              By logging in, you agree to our{" "}
              <Link to="/builder/terms" className="text-purple-600 hover:underline">
                Builder Terms
              </Link>{" "}
              and{" "}
              <Link to="/privacy" className="text-purple-600 hover:underline">
                Privacy Policy
              </Link>
            </p>
            <p className="text-xs text-gray-500 mt-1">
              For builder support, contact:{" "}
              <a href="mailto:support@builders.com" className="text-purple-600 hover:underline">
                builders@support.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuilderLogin;