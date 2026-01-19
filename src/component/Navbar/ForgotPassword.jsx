import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


const ForgotPassword = () => {
  const [step, setStep] = useState(1);
  const [mobile, setMobile] = useState("");
  const [otp, setOtp] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [error, setError] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const navigate = useNavigate();

  const verifyOtp = () => {
    if (otp === "1234") {
      setStep(2);
      setError("");
    } else {
      setError("Invalid OTP");
    }
  };

  const changePassword = () => {
    if (password !== confirm) {
      setError("Password and Confirm Password must match");
      setSuccessMsg("");
    } else {
      setError("");
      setSuccessMsg(
        "Password Changed Successfully. Log in with Mobile Number and New Password"
      );

    
      setTimeout(() => {
        navigate("/signin");
      }, 5000);
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center"
      style={{ backgroundColor: "#E0F2F2" }}
    >
      <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md">
        <h2
          className="text-2xl font-bold text-center mb-3"
          style={{ color: "#000" }}
        >
          Forgot Password
        </h2>

        {successMsg && (
          <div className="mb-4 p-3 rounded-md text-sm text-green-700 bg-green-100 border border-green-300">
            {successMsg}
          </div>
        )}

    
        {step === 1 && (
          <>
            <div className="mb-4">
              <label className="block text-sm mb-1" style={{ color: "#000" }}>
                Mobile Number
              </label>
              <input
                type="tel"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg outline-none"
                style={{ borderColor: "#6AE4DE" }}
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm mb-1" style={{ color: "#000" }}>
                Enter OTP
              </label>
              <input
                type="text"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg outline-none"
                style={{ borderColor: "#6AE4DE" }}
              />
            </div>

            {error && <p className="text-red-500 text-sm mb-3">{error}</p>}

            <button
              onClick={verifyOtp}
              className="w-full py-2 rounded-lg font-semibold text-white"
              style={{ backgroundColor: "#479490" }}
            >
              Verify OTP
            </button>
          </>
        )}

       
        {step === 2 && (
          <>
            <div className="mb-3">
              <label className="block text-sm mb-1" style={{ color: "#000" }}>
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg outline-none"
                style={{ borderColor: "#6AE4DE" }}
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm mb-1" style={{ color: "#000" }}>
                Confirm Password
              </label>
              <input
                type="password"
                value={confirm}
                onChange={(e) => setConfirm(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg outline-none"
                style={{ borderColor: "#6AE4DE" }}
              />
            </div>

            {error && <p className="text-red-500 text-sm mb-3">{error}</p>}

            <button
              onClick={changePassword}
              className="w-full py-2 rounded-lg font-semibold text-white"
              style={{ backgroundColor: "#479490" }}
            >
              Change Password
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default ForgotPassword;
