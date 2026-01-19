import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  FaUser,
  FaPhone,
  FaLock,
  FaEnvelope,
  FaShieldAlt,
  FaEye,
  FaEyeSlash,
} from "react-icons/fa";

const SignUp = () => {
  const navigate = useNavigate();
  const [showSuccess, setShowSuccess] = useState(false);
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    otp: "",
    mobile: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [otpVerified, setOtpVerified] = useState(false);
  const [timer, setTimer] = useState(0);
  const [digilockerVerified, setDigilockerVerified] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleGetOTP = () => {
    if (!form.mobile || form.mobile.length !== 10) {
      alert("Please enter a valid 10-digit mobile number");
      return;
    }

    setIsLoading(true);
    setTimeout(() => {
      alert("OTP sent successfully to " + form.mobile);
      setOtpSent(true);
      setTimer(60);
      setIsLoading(false);
    }, 1000);
  };

  const handleVerifyOTP = () => {
    if (!form.otp) {
      alert("Please enter OTP");
      return;
    }

    setIsLoading(true);
    setTimeout(() => {
      if (form.otp === "123456") {
        alert("OTP Verified Successfully");
        setOtpVerified(true);
        setTimer(0);
      } else {
        alert("Invalid OTP");
      }
      setIsLoading(false);
    }, 1000);
  };

  const handleDigiLockerVerification = () => {
    window.open("https://digilocker.gov.in", "_blank");
    alert("Redirecting to DigiLocker. Complete verification there.");

    setTimeout(() => {
      const verified = window.confirm(
        "Have you completed DigiLocker verification?"
      );
      if (verified) {
        setDigilockerVerified(true);
        alert("DigiLocker verification successful!");
      }
    }, 2000);
  };

  const handleSubmit = () => {
    if (
      !form.fullName ||
      !form.email ||
      !form.password ||
      !form.confirmPassword ||
      !form.mobile
    ) {
      setError("All fields are required");
      return;
    }

    if (form.password !== form.confirmPassword) {
      setError("Password and Confirm Password must be same");
      return;
    }

    if (!otpVerified) {
      setError("Please verify OTP");
      return;
    }

    setError("");
    setIsLoading(true);

    setTimeout(() => {
      setShowSuccess(true);
      setIsLoading(false);

      setTimeout(() => {
        navigate("/signin");
      }, 3000);
    }, 1500);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };

  useEffect(() => {
    if (timer === 0) return;

    const interval = setInterval(() => {
      setTimer((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [timer]);

  return (
    <div
      className="min-h-screen flex items-start justify-center pb-2
             pt-16 sm:pt-24 md:pt-26 lg:pt-32 xl:pt-[68px]
             px-10"
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
              <div className="text-5xl mb-3">🚀</div>
              <h1 className="text-2xl font-bold mb-3">Join Us Today!</h1>
              <p className="text-teal-100">
                Create an account to unlock amazing features and start your
                journey with us.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl mt-6">
              <h3 className="text-lg font-semibold mb-3">
                Benefits of Joining
              </h3>
              <ul className="space-y-2 text-sm text-left">
                <li className="flex items-center">
                  <div className="w-5 h-5 rounded-full bg-teal-300 flex items-center justify-center mr-2">
                    <span className="text-teal-900 text-xs">✓</span>
                  </div>
                  <span>Secure DigiLocker verification</span>
                </li>
                <li className="flex items-center">
                  <div className="w-5 h-5 rounded-full bg-teal-300 flex items-center justify-center mr-2">
                    <span className="text-teal-900 text-xs">✓</span>
                  </div>
                  <span>Instant OTP verification</span>
                </li>
                <li className="flex items-center">
                  <div className="w-5 h-5 rounded-full bg-teal-300 flex items-center justify-center mr-2">
                    <span className="text-teal-900 text-xs">✓</span>
                  </div>
                  <span>Priority customer support</span>
                </li>
                <li className="flex items-center">
                  <div className="w-5 h-5 rounded-full bg-teal-300 flex items-center justify-center mr-2">
                    <span className="text-teal-900 text-xs">✓</span>
                  </div>
                  <span>Exclusive member discounts</span>
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
                Create Account
              </h2>
            </div>
            <p className="text-gray-600 text-sm">
              Fill in your details to create your account
            </p>
          </div>

          <div className="space-y-4">
            
            <div>
              <label className="block text-sm font-semibold mb-1 text-gray-700">
                Full Name
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaUser className="text-gray-400 text-sm" />
                </div>
                <input
                  type="text"
                  name="fullName"
                  placeholder="Enter your full name"
                  value={form.fullName}
                  onChange={handleChange}
                  className="w-full pl-9 pr-3 py-2.5 text-sm border-2 rounded-lg outline-none transition-all duration-200 focus:border-teal-500 hover:border-teal-400"
                  style={{ borderColor: "#6AE4DE" }}
                />
              </div>
            </div>

       
            <div>
              <label className="block text-sm font-semibold mb-1 text-gray-700">
                Email Address
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaEnvelope className="text-gray-400 text-sm" />
                </div>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email address"
                  value={form.email}
                  onChange={handleChange}
                  className="w-full pl-9 pr-3 py-2.5 text-sm border-2 rounded-lg outline-none transition-all duration-200 focus:border-teal-500 hover:border-teal-400"
                  style={{ borderColor: "#6AE4DE" }}
                />
              </div>
            </div>

           
            <div>
              <label className="block text-sm font-semibold mb-1 text-gray-700">
                Mobile Number
              </label>
              <div className="flex flex-col sm:flex-row gap-2">
                <div className="relative flex-1">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FaPhone className="text-gray-400 text-sm" />
                  </div>
                  <input
                    type="tel"
                    name="mobile"
                    placeholder="Enter 10-digit mobile number"
                    value={form.mobile}
                    onChange={handleChange}
                    className="w-full pl-9 pr-3 py-2.5 text-sm border-2 rounded-lg outline-none transition-all duration-200 focus:border-teal-500 hover:border-teal-400"
                    style={{ borderColor: "#6AE4DE" }}
                  />
                </div>
                {otpVerified ? (
                  <button
                    type="button"
                    disabled
                    className="px-4 py-2.5 text-sm rounded-lg bg-green-500 text-white cursor-default whitespace-nowrap"
                  >
                    ✓ Verified
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={handleGetOTP}
                    disabled={timer > 0 || isLoading}
                    className={`px-4 py-2.5 text-sm rounded-lg transition whitespace-nowrap ${
                      timer > 0 || isLoading
                        ? "bg-gray-400 cursor-not-allowed"
                        : "bg-teal-500 hover:bg-teal-600 text-white"
                    }`}
                  >
                    {isLoading
                      ? "Sending..."
                      : timer > 0
                      ? `Resend in ${timer}s`
                      : "Get OTP"}
                  </button>
                )}
              </div>
            </div>

           
            {otpSent && !otpVerified && (
              <div>
                <label className="block text-sm font-semibold mb-1 text-gray-700">
                  Enter OTP
                </label>
                <div className="flex flex-col sm:flex-row gap-2">
                  <div className="relative flex-1">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FaShieldAlt className="text-gray-400 text-sm" />
                    </div>
                    <input
                      type="text"
                      name="otp"
                      placeholder="Enter 6-digit OTP"
                      value={form.otp}
                      onChange={handleChange}
                      className="w-full pl-9 pr-3 py-2.5 text-sm border-2 rounded-lg outline-none transition-all duration-200 focus:border-teal-500 hover:border-teal-400"
                      style={{ borderColor: "#6AE4DE" }}
                    />
                  </div>
                  <button
                    type="button"
                    onClick={handleVerifyOTP}
                    disabled={isLoading}
                    className="px-4 py-2.5 text-sm bg-green-500 hover:bg-green-600 text-white rounded-lg transition whitespace-nowrap"
                  >
                    {isLoading ? "Verifying..." : "Verify OTP"}
                  </button>
                </div>
              </div>
            )}

            
            <div>
              <label className="block text-sm font-semibold mb-1 text-gray-700">
                Identity Verification
              </label>
              <button
                type="button"
                onClick={handleDigiLockerVerification}
                className={`w-full py-2.5 rounded-lg font-medium flex items-center justify-center gap-2 transition-all ${
                  digilockerVerified
                    ? "bg-blue-100 text-blue-700 border-2 border-blue-300"
                    : "bg-blue-600 hover:bg-blue-700 text-white border-2 border-blue-600"
                }`}
              >
                <FaShieldAlt className="text-sm" />
                {digilockerVerified
                  ? "✓ DigiLocker Verified"
                  : "Verify with DigiLocker"}
              </button>
              <p className="text-xs text-gray-500 mt-1 text-center">
                Secure identity verification using Government of India's
                DigiLocker
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
                  name="password"
                  placeholder="Create a strong password"
                  value={form.password}
                  onChange={handleChange}
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

           
            <div>
              <label className="block text-sm font-semibold mb-1 text-gray-700">
                Confirm Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaLock className="text-gray-400 text-sm" />
                </div>
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  name="confirmPassword"
                  placeholder="Confirm your password"
                  value={form.confirmPassword}
                  onChange={handleChange}
                  onKeyPress={handleKeyPress}
                  className="w-full pl-9 pr-10 py-2.5 text-sm border-2 rounded-lg outline-none transition-all duration-200 focus:border-teal-500 hover:border-teal-400"
                  style={{ borderColor: "#6AE4DE" }}
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  {showConfirmPassword ? (
                    <FaEyeSlash className="text-gray-400 hover:text-teal-600 text-sm" />
                  ) : (
                    <FaEye className="text-gray-400 hover:text-teal-600 text-sm" />
                  )}
                </button>
              </div>
            </div>

            {error && (
              <div className="text-red-500 text-sm text-center bg-red-50 py-2 rounded-lg">
                {error}
              </div>
            )}

            
            <button
              onClick={handleSubmit}
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
                  Creating Account...
                </div>
              ) : (
                "Create Account"
              )}
            </button>

           
            <div className="text-center pt-4">
              <p className="text-gray-600 text-sm mb-3">
                Already have an account?
              </p>
              <Link to="/signin">
                <button
                  className="w-full py-2.5 rounded-lg font-semibold text-sm transition-all duration-300 hover:scale-[1.01] border-2 hover:shadow-sm"
                  style={{
                    color: "#479490",
                    borderColor: "#479490",
                    backgroundColor: "transparent",
                  }}
                >
                  Sign In to Your Account
                </button>
              </Link>
            </div>
          </div>

         
          <div className="mt-6 text-center">
            <p className="text-xs text-gray-500">
              By registering, you agree to our{" "}
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

   
      {showSuccess && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl p-6 w-full max-w-md text-center shadow-2xl">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-green-100 flex items-center justify-center">
              <span className="text-green-600 text-3xl">✓</span>
            </div>
            <h2 className="text-xl font-bold text-gray-800 mb-2">
              Registration Successful!
            </h2>
            <p className="text-sm text-gray-500 mb-4">
              Welcome to Iconic Options 🚀 Redirecting to Sign In page...
            </p>
            <div className="w-full bg-gray-200 rounded-full h-1.5">
              <div className="bg-green-500 h-1.5 rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SignUp;
