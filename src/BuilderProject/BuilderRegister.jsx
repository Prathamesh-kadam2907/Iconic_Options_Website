import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  FaUser,
  FaBuilding,
  FaLock,
  FaEye,
  FaEyeSlash,
  FaPhone,
  FaEnvelope,
  FaIdCard,
  FaAddressCard,
  FaCheck,
} from "react-icons/fa";

const BuilderRegister = () => {
  const navigate = useNavigate();

  // Form states
  const [formData, setFormData] = useState({
    companyName: "",
    builderName: "",
    email: "",
    phone: "",
    builderId: "",
    licenseNumber: "",
    address: "",
    specialization: "",
    password: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [errors, setErrors] = useState({});

  // Specialization options
  const specializationOptions = [
    "Residential",
    "Commercial",
    "Industrial",
    "Luxury Homes",
    "Green Building",
    "Infrastructure",
    "Renovation",
    "All of the above",
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.companyName.trim())
      newErrors.companyName = "Company name is required";
    if (!formData.builderName.trim())
      newErrors.builderName = "Builder name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Email is invalid";

    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
    else if (!/^\d{10}$/.test(formData.phone))
      newErrors.phone = "Phone must be 10 digits";

    if (!formData.builderId.trim())
      newErrors.builderId = "Builder ID is required";
    if (!formData.licenseNumber.trim())
      newErrors.licenseNumber = "License number is required";
    if (!formData.address.trim()) newErrors.address = "Address is required";
    if (!formData.specialization)
      newErrors.specialization = "Please select specialization";

    if (!formData.password) newErrors.password = "Password is required";
    else if (formData.password.length < 6)
      newErrors.password = "Password must be at least 6 characters";

    if (!formData.confirmPassword)
      newErrors.confirmPassword = "Please confirm password";
    else if (formData.password !== formData.confirmPassword)
      newErrors.confirmPassword = "Passwords do not match";

    if (!acceptTerms)
      newErrors.terms = "You must accept the terms and conditions";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsLoading(true);

    setTimeout(() => {
      const builderData = {
        ...formData,
        id: Date.now(),
        registrationDate: new Date().toISOString(),
        status: "pending",
        rating: 0,
        projectsCompleted: 0,
      };

      const existingBuilders = JSON.parse(
        localStorage.getItem("builders") || "[]",
      );
      existingBuilders.push(builderData);
      localStorage.setItem("builders", JSON.stringify(existingBuilders));

      localStorage.setItem(
        "currentBuilder",
        JSON.stringify({
          name: builderData.builderName,
          company: builderData.companyName,
          builderId: builderData.builderId,
          email: builderData.email,
        }),
      );

      setIsLoading(false);
      alert("Registration successful! Your account is pending verification.");
      navigate("/builder/login");
    }, 2000);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSubmit(e);
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-purple-50 to-indigo-50"
      onKeyPress={handleKeyPress}
    >
      <div className="w-full max-w-5xl">
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            Join Our Builder Network
          </h1>
          <p className="text-gray-600">
            Register your construction business and access exclusive builder
            benefits
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-6">
          <div className="lg:w-2/5">
            <div className="bg-white rounded-2xl shadow-xl p-6 h-full">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mr-4">
                  <FaBuilding className="text-purple-600 text-xl" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-gray-800">
                    Builder Benefits
                  </h2>
                  <p className="text-sm text-gray-600">Why join our platform</p>
                </div>
              </div>

              <div className="space-y-4">
                {[
                  {
                    icon: "📈",
                    title: "Grow Your Business",
                    desc: "Access thousands of potential clients and projects",
                  },
                  {
                    icon: "🤝",
                    title: "Trust & Credibility",
                    desc: "Verified builder badge increases client confidence",
                  },
                  {
                    icon: "💰",
                    title: "Better Margins",
                    desc: "Direct access to suppliers with bulk discounts",
                  },
                  {
                    icon: "⚡",
                    title: "Efficient Management",
                    desc: "All-in-one dashboard for project tracking",
                  },
                  {
                    icon: "📊",
                    title: "Analytics & Insights",
                    desc: "Data-driven decisions with detailed reports",
                  },
                  {
                    icon: "🛡️",
                    title: "Insurance & Support",
                    desc: "Partner benefits including insurance coverage",
                  },
                ].map((benefit, index) => (
                  <div
                    key={index}
                    className="flex items-start p-3 rounded-lg hover:bg-purple-50 transition-colors"
                  >
                    <div className="text-2xl mr-3">{benefit.icon}</div>
                    <div>
                      <h3 className="font-semibold text-gray-800">
                        {benefit.title}
                      </h3>
                      <p className="text-sm text-gray-600">{benefit.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-4 bg-purple-50 rounded-xl">
                <h3 className="font-semibold text-gray-800 mb-3">
                  Verification Process
                </h3>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center">
                    <div className="w-6 h-6 rounded-full bg-purple-100 flex items-center justify-center mr-2">
                      <span className="text-purple-600 text-xs">1</span>
                    </div>
                    <span>Submit registration form</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-6 h-6 rounded-full bg-purple-100 flex items-center justify-center mr-2">
                      <span className="text-purple-600 text-xs">2</span>
                    </div>
                    <span>Document verification (24-48 hours)</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-6 h-6 rounded-full bg-purple-100 flex items-center justify-center mr-2">
                      <span className="text-purple-600 text-xs">3</span>
                    </div>
                    <span>Account activation & onboarding</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-3/5">
            <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                Builder Registration Form
              </h2>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold mb-1 text-gray-700">
                      Company Name *
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <FaBuilding className="text-gray-400 text-sm" />
                      </div>
                      <input
                        type="text"
                        name="companyName"
                        value={formData.companyName}
                        onChange={handleChange}
                        placeholder="Enter company name"
                        className={`w-full pl-9 pr-3 py-2.5 text-sm border rounded-lg outline-none transition-all duration-200 ${
                          errors.companyName
                            ? "border-red-500 focus:border-red-500"
                            : "border-gray-300 focus:border-purple-500 hover:border-purple-400"
                        }`}
                      />
                    </div>
                    {errors.companyName && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.companyName}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-1 text-gray-700">
                      Builder Name *
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <FaUser className="text-gray-400 text-sm" />
                      </div>
                      <input
                        type="text"
                        name="builderName"
                        value={formData.builderName}
                        onChange={handleChange}
                        placeholder="Enter builder/contact person name"
                        className={`w-full pl-9 pr-3 py-2.5 text-sm border rounded-lg outline-none transition-all duration-200 ${
                          errors.builderName
                            ? "border-red-500 focus:border-red-500"
                            : "border-gray-300 focus:border-purple-500 hover:border-purple-400"
                        }`}
                      />
                    </div>
                    {errors.builderName && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.builderName}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold mb-1 text-gray-700">
                      Email Address *
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <FaEnvelope className="text-gray-400 text-sm" />
                      </div>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter business email"
                        className={`w-full pl-9 pr-3 py-2.5 text-sm border rounded-lg outline-none transition-all duration-200 ${
                          errors.email
                            ? "border-red-500 focus:border-red-500"
                            : "border-gray-300 focus:border-purple-500 hover:border-purple-400"
                        }`}
                      />
                    </div>
                    {errors.email && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.email}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-1 text-gray-700">
                      Phone Number *
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <FaPhone className="text-gray-400 text-sm" />
                      </div>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="10-digit mobile number"
                        className={`w-full pl-9 pr-3 py-2.5 text-sm border rounded-lg outline-none transition-all duration-200 ${
                          errors.phone
                            ? "border-red-500 focus:border-red-500"
                            : "border-gray-300 focus:border-purple-500 hover:border-purple-400"
                        }`}
                      />
                    </div>
                    {errors.phone && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.phone}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold mb-1 text-gray-700">
                      Builder ID *
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <FaIdCard className="text-gray-400 text-sm" />
                      </div>
                      <input
                        type="text"
                        name="builderId"
                        value={formData.builderId}
                        onChange={handleChange}
                        placeholder="Create your builder ID"
                        className={`w-full pl-9 pr-3 py-2.5 text-sm border rounded-lg outline-none transition-all duration-200 ${
                          errors.builderId
                            ? "border-red-500 focus:border-red-500"
                            : "border-gray-300 focus:border-purple-500 hover:border-purple-400"
                        }`}
                      />
                    </div>
                    <p className="text-xs text-gray-500 mt-1">
                      This will be your username
                    </p>
                    {errors.builderId && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.builderId}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-1 text-gray-700">
                      License Number *
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <FaAddressCard className="text-gray-400 text-sm" />
                      </div>
                      <input
                        type="text"
                        name="licenseNumber"
                        value={formData.licenseNumber}
                        onChange={handleChange}
                        placeholder="Enter construction license number"
                        className={`w-full pl-9 pr-3 py-2.5 text-sm border rounded-lg outline-none transition-all duration-200 ${
                          errors.licenseNumber
                            ? "border-red-500 focus:border-red-500"
                            : "border-gray-300 focus:border-purple-500 hover:border-purple-400"
                        }`}
                      />
                    </div>
                    {errors.licenseNumber && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.licenseNumber}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-1 text-gray-700">
                    Business Address *
                  </label>
                  <textarea
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    placeholder="Enter complete business address"
                    rows="2"
                    className={`w-full px-3 py-2.5 text-sm border rounded-lg outline-none transition-all duration-200 ${
                      errors.address
                        ? "border-red-500 focus:border-red-500"
                        : "border-gray-300 focus:border-purple-500 hover:border-purple-400"
                    }`}
                  />
                  {errors.address && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.address}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-1 text-gray-700">
                    Specialization *
                  </label>
                  <select
                    name="specialization"
                    value={formData.specialization}
                    onChange={handleChange}
                    className={`w-full px-3 py-2.5 text-sm border rounded-lg outline-none transition-all duration-200 ${
                      errors.specialization
                        ? "border-red-500 focus:border-red-500"
                        : "border-gray-300 focus:border-purple-500 hover:border-purple-400"
                    }`}
                  >
                    <option value="">Select specialization</option>
                    {specializationOptions.map((option, index) => (
                      <option key={index} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                  {errors.specialization && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.specialization}
                    </p>
                  )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold mb-1 text-gray-700">
                      Password *
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <FaLock className="text-gray-400 text-sm" />
                      </div>
                      <input
                        type={showPassword ? "text" : "password"}
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        placeholder="Create a strong password"
                        className={`w-full pl-9 pr-10 py-2.5 text-sm border rounded-lg outline-none transition-all duration-200 ${
                          errors.password
                            ? "border-red-500 focus:border-red-500"
                            : "border-gray-300 focus:border-purple-500 hover:border-purple-400"
                        }`}
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
                    {errors.password && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.password}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-1 text-gray-700">
                      Confirm Password *
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <FaLock className="text-gray-400 text-sm" />
                      </div>
                      <input
                        type={showConfirmPassword ? "text" : "password"}
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        placeholder="Confirm your password"
                        className={`w-full pl-9 pr-10 py-2.5 text-sm border rounded-lg outline-none transition-all duration-200 ${
                          errors.confirmPassword
                            ? "border-red-500 focus:border-red-500"
                            : "border-gray-300 focus:border-purple-500 hover:border-purple-400"
                        }`}
                      />
                      <button
                        type="button"
                        className="absolute inset-y-0 right-0 pr-3 flex items-center"
                        onClick={() =>
                          setShowConfirmPassword(!showConfirmPassword)
                        }
                      >
                        {showConfirmPassword ? (
                          <FaEyeSlash className="text-gray-400 hover:text-purple-600 text-sm" />
                        ) : (
                          <FaEye className="text-gray-400 hover:text-purple-600 text-sm" />
                        )}
                      </button>
                    </div>
                    {errors.confirmPassword && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.confirmPassword}
                      </p>
                    )}
                  </div>
                </div>

                <div className="pt-2">
                  <label className="flex items-start">
                    <input
                      type="checkbox"
                      checked={acceptTerms}
                      onChange={(e) => setAcceptTerms(e.target.checked)}
                      className="mt-1 mr-2"
                    />
                    <span className="text-sm text-gray-700">
                      I agree to the{" "}
                      <Link
                        to="/builder/terms"
                        className="text-purple-600 hover:underline font-medium"
                      >
                        Terms & Conditions
                      </Link>{" "}
                      and{" "}
                      <Link
                        to="/privacy"
                        className="text-purple-600 hover:underline font-medium"
                      >
                        Privacy Policy
                      </Link>
                    </span>
                  </label>
                  {errors.terms && (
                    <p className="text-red-500 text-xs mt-1">{errors.terms}</p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full py-3 rounded-lg font-semibold text-white transition-all duration-300 hover:scale-[1.01] hover:shadow-lg disabled:opacity-70 disabled:cursor-not-allowed mt-4"
                  style={{
                    background:
                      "linear-gradient(135deg, #7C3AED 0%, #5B21B6 100%)",
                  }}
                >
                  {isLoading ? (
                    <div className="flex items-center justify-center">
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                      Processing Registration...
                    </div>
                  ) : (
                    "Register as Builder"
                  )}
                </button>

                <div className="text-center pt-4">
                  <p className="text-gray-600 text-sm">
                    Already have a builder account?{" "}
                    <Link
                      to="/builder/login"
                      className="text-purple-600 font-medium hover:underline"
                    >
                      Login here
                    </Link>
                  </p>
                  <Link
                    to="/builderlogin"
                    className="inline-block mt-2 text-sm text-gray-500 hover:text-gray-700 hover:underline"
                  >
                    ← Back to User Login
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuilderRegister;
