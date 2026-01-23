'use client';

import React, { useState, ChangeEvent, FormEvent } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faUser,
    faBuilding,
    faPhone,
    faEnvelope,
    faIdCard,
    faMapMarkerAlt,
    faBriefcase,
    faFileContract,
    faCheckCircle,
    faArrowLeft,
    faArrowRight,
    faEye,
    faEyeSlash,
} from '@fortawesome/free-solid-svg-icons';

// Step definitions
enum FormSteps {
    LOGIN = 1,
    COMPANY = 2,
    LEGAL = 3,
    BUSINESS = 4,
    LOCATIONS = 5,
    CONSENT = 6,
    REVIEW = 7,
}

interface FormData {
    // Login Step
    email: string;
    mobile: string;
    password: string;
    confirmPassword: string;
    otp: string;
    otpVerified: boolean;

    // Company Step
    companyName: string;
    companyType: string;
    companyAddress: string;

    // Legal Step
    panNumber: string;
    reraNumber: string;
    gstNumber: string;

    // Business Step
    businessCategory: string;
    specialization: string[];

    // Locations Step
    cities: string[];
    areas: string[];

    // Consent Step
    acceptTerms: boolean;
    acceptPrivacy: boolean;
}

interface Errors {
    [key: string]: string;
}

interface StepConfig {
    id: FormSteps;
    title: string;
    description: string;
    icon: React.ReactNode;
}

const BuilderRegister: React.FC = () => {
    const router = useRouter();
    const [currentStep, setCurrentStep] = useState<FormSteps>(FormSteps.LOGIN);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState<boolean>(false);
    const [otpSent, setOtpSent] = useState<boolean>(false);
    const [errors, setErrors] = useState<Errors>({});

    // Form data
    const [formData, setFormData] = useState<FormData>({
        // Login
        email: '',
        mobile: '',
        password: '',
        confirmPassword: '',
        otp: '',
        otpVerified: false,

        // Company
        companyName: '',
        companyType: '',
        companyAddress: '',

        // Legal
        panNumber: '',
        reraNumber: '',
        gstNumber: '',

        // Business
        businessCategory: '',
        specialization: [],

        // Locations
        cities: [],
        areas: [],

        // Consent
        acceptTerms: false,
        acceptPrivacy: false,
    });

    // Step configuration
    const steps: StepConfig[] = [
        { id: FormSteps.LOGIN, title: 'Login Details', description: 'Email & Mobile Verification', icon: <FontAwesomeIcon icon={faUser} /> },
        { id: FormSteps.COMPANY, title: 'Company Info', description: 'Company Details', icon: <FontAwesomeIcon icon={faBuilding} /> },
        { id: FormSteps.LEGAL, title: 'Legal Documents', description: 'PAN, RERA, GST', icon: <FontAwesomeIcon icon={faFileContract} /> },
        { id: FormSteps.BUSINESS, title: 'Business', description: 'Category & Specialization', icon: <FontAwesomeIcon icon={faBriefcase} /> },
        { id: FormSteps.LOCATIONS, title: 'Locations', description: 'Cities & Areas', icon: <FontAwesomeIcon icon={faMapMarkerAlt} /> },
        { id: FormSteps.CONSENT, title: 'Consent', description: 'Terms & Conditions', icon: <FontAwesomeIcon icon={faCheckCircle} /> },
        { id: FormSteps.REVIEW, title: 'Review', description: 'Final Submission', icon: <FontAwesomeIcon icon={faCheckCircle} /> },
    ];

    // Options
    const companyTypes = ['Private Limited', 'Partnership', 'Proprietorship', 'LLP', 'Public Limited'];
    const businessCategories = ['Residential', 'Commercial', 'Industrial', 'Infrastructure', 'Mixed-use'];
    const specializations = ['Luxury Homes', 'Affordable Housing', 'Commercial Complex', 'Industrial Parks', 'Green Building', 'Renovation', 'Interior Design', 'Civil Construction'];
    const cities = ['Mumbai', 'Delhi', 'Bangalore', 'Chennai', 'Hyderabad', 'Pune', 'Kolkata', 'Ahmedabad'];

    // Handle input changes
    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value, type } = e.target;

        if (type === 'checkbox') {
            const checked = (e.target as HTMLInputElement).checked;
            setFormData((prev) => ({ ...prev, [name]: checked }));
        } else {
            setFormData((prev) => ({ ...prev, [name]: value }));
        }

        // Clear error for this field
        if (errors[name]) {
            setErrors((prev) => ({ ...prev, [name]: '' }));
        }
    };

    // Handle specialization checkbox
    const handleSpecializationChange = (specialization: string) => {
        setFormData((prev) => {
            const updated = prev.specialization.includes(specialization) ? prev.specialization.filter((item) => item !== specialization) : [...prev.specialization, specialization];
            return { ...prev, specialization: updated };
        });
    };

    // Handle city selection
    const handleCityChange = (city: string) => {
        setFormData((prev) => {
            const updated = prev.cities.includes(city) ? prev.cities.filter((item) => item !== city) : [...prev.cities, city];
            return { ...prev, cities: updated };
        });
    };

    // Send OTP
    const handleSendOTP = () => {
        if (!formData.mobile || !/^\d{10}$/.test(formData.mobile)) {
            setErrors((prev) => ({ ...prev, mobile: 'Valid 10-digit mobile number required' }));
            return;
        }
        // Simulate OTP sending
        setOtpSent(true);
        alert(`OTP sent to ${formData.mobile}`);
    };

    // Verify OTP
    const handleVerifyOTP = () => {
        if (formData.otp === '123456') {
            // Simulated OTP
            setFormData((prev) => ({ ...prev, otpVerified: true }));
            alert('OTP verified successfully!');
        } else {
            setErrors((prev) => ({ ...prev, otp: 'Invalid OTP' }));
        }
    };

    // Step validation
    const validateCurrentStep = (): boolean => {
        const newErrors: Errors = {};

        switch (currentStep) {
            case FormSteps.LOGIN:
                if (!formData.email.trim()) newErrors.email = 'Email is required';
                else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Invalid email format';

                if (!formData.mobile.trim()) newErrors.mobile = 'Mobile number is required';
                else if (!/^\d{10}$/.test(formData.mobile)) newErrors.mobile = 'Must be 10 digits';

                if (!formData.otpVerified) newErrors.otp = 'OTP verification required';

                if (!formData.password) newErrors.password = 'Password is required';
                else if (formData.password.length < 6) newErrors.password = 'Minimum 6 characters';

                if (!formData.confirmPassword) newErrors.confirmPassword = 'Confirm password';
                else if (formData.password !== formData.confirmPassword) newErrors.confirmPassword = "Passwords don't match";
                break;

            case FormSteps.COMPANY:
                if (!formData.companyName.trim()) newErrors.companyName = 'Company name required';
                if (!formData.companyType) newErrors.companyType = 'Company type required';
                if (!formData.companyAddress.trim()) newErrors.companyAddress = 'Company address required';
                break;

            case FormSteps.LEGAL:
                if (!formData.panNumber.trim()) newErrors.panNumber = 'PAN number required';
                if (!formData.gstNumber.trim()) newErrors.gstNumber = 'GST number required';
                break;

            case FormSteps.BUSINESS:
                if (!formData.businessCategory) newErrors.businessCategory = 'Business category required';
                if (formData.specialization.length === 0) newErrors.specialization = 'Select at least one specialization';
                break;

            case FormSteps.LOCATIONS:
                if (formData.cities.length === 0) newErrors.cities = 'Select at least one city';
                break;

            case FormSteps.CONSENT:
                if (!formData.acceptTerms) newErrors.acceptTerms = 'Must accept Terms & Conditions';
                if (!formData.acceptPrivacy) newErrors.acceptPrivacy = 'Must accept Privacy Policy';
                break;
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    // Navigation
    const nextStep = () => {
        if (validateCurrentStep()) {
            if (currentStep < FormSteps.REVIEW) {
                setCurrentStep((currentStep + 1) as FormSteps);
            } else {
                handleSubmit();
            }
        }
    };

    const prevStep = () => {
        if (currentStep > FormSteps.LOGIN) {
            setCurrentStep((currentStep - 1) as FormSteps);
        }
    };

    // Form submission
    const handleSubmit = async () => {
        setIsLoading(true);

        // Simulate API call
        setTimeout(() => {
            if (typeof window !== 'undefined') {
                const builderData = {
                    ...formData,
                    id: Date.now(),
                    registrationDate: new Date().toISOString(),
                    status: 'pending',
                };

                const existingBuilders = JSON.parse(localStorage.getItem('builders') || '[]');
                existingBuilders.push(builderData);
                localStorage.setItem('builders', JSON.stringify(existingBuilders));

                localStorage.setItem(
                    'currentBuilder',
                    JSON.stringify({
                        name: formData.companyName,
                        company: formData.companyName,
                        email: formData.email,
                    }),
                );
            }

            setIsLoading(false);
            alert('Registration submitted successfully! Your account is pending verification.');
            router.push('/builder/login');
        }, 2000);
    };

    // Render step content
    const renderStepContent = () => {
        switch (currentStep) {
            case FormSteps.LOGIN:
                return (
                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm font-semibold mb-1 text-gray-700">Email Address *</label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <FontAwesomeIcon icon={faEnvelope} className="text-gray-400 text-sm" />
                                </div>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="business@example.com"
                                    className={`w-full pl-9 pr-3 py-2.5 text-sm border rounded-lg outline-none transition-all duration-200 ${
                                        errors.email ? 'border-red-500' : 'border-gray-300 focus:border-purple-500'
                                    }`}
                                />
                            </div>
                            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                        </div>

                        <div>
                            <label className="block text-sm font-semibold mb-1 text-gray-700">Mobile Number *</label>
                            <div className="flex gap-2">
                                <div className="relative flex-1">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <FontAwesomeIcon icon={faPhone} className="text-gray-400 text-sm" />
                                    </div>
                                    <input
                                        type="tel"
                                        name="mobile"
                                        value={formData.mobile}
                                        onChange={handleChange}
                                        placeholder="9876543210"
                                        className={`w-full pl-9 pr-3 py-2.5 text-sm border rounded-lg outline-none transition-all duration-200 ${
                                            errors.mobile ? 'border-red-500' : 'border-gray-300 focus:border-purple-500'
                                        }`}
                                    />
                                </div>
                                <button type="button" onClick={handleSendOTP} className="px-4 py-2.5 text-sm bg-purple-100 text-purple-700 rounded-lg hover:bg-purple-200 transition-colors">
                                    {otpSent ? 'Resend OTP' : 'Send OTP'}
                                </button>
                            </div>
                            {errors.mobile && <p className="text-red-500 text-xs mt-1">{errors.mobile}</p>}
                        </div>

                        {otpSent && (
                            <div>
                                <label className="block text-sm font-semibold mb-1 text-gray-700">OTP Verification *</label>
                                <div className="flex gap-2">
                                    <input
                                        type="text"
                                        name="otp"
                                        value={formData.otp}
                                        onChange={handleChange}
                                        placeholder="Enter 6-digit OTP"
                                        className={`flex-1 px-3 py-2.5 text-sm border rounded-lg outline-none transition-all duration-200 ${
                                            errors.otp ? 'border-red-500' : 'border-gray-300 focus:border-purple-500'
                                        }`}
                                    />
                                    <button type="button" onClick={handleVerifyOTP} className="px-4 py-2.5 text-sm bg-green-100 text-green-700 rounded-lg hover:bg-green-200 transition-colors">
                                        Verify
                                    </button>
                                </div>
                                {errors.otp && <p className="text-red-500 text-xs mt-1">{errors.otp}</p>}
                                {formData.otpVerified && <p className="text-green-600 text-xs mt-1">✓ OTP Verified Successfully</p>}
                            </div>
                        )}

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-semibold mb-1 text-gray-700">Password *</label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <FontAwesomeIcon icon={faIdCard} className="text-gray-400 text-sm" />
                                    </div>
                                    <input
                                        type={showPassword ? 'text' : 'password'}
                                        name="password"
                                        value={formData.password}
                                        onChange={handleChange}
                                        placeholder="Create password"
                                        className={`w-full pl-9 pr-10 py-2.5 text-sm border rounded-lg outline-none transition-all duration-200 ${
                                            errors.password ? 'border-red-500' : 'border-gray-300 focus:border-purple-500'
                                        }`}
                                    />
                                    <button type="button" className="absolute inset-y-0 right-0 pr-3 flex items-center" onClick={() => setShowPassword(!showPassword)}>
                                        <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} className="text-gray-400 hover:text-purple-600 text-sm" />
                                    </button>
                                </div>
                                {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}
                            </div>

                            <div>
                                <label className="block text-sm font-semibold mb-1 text-gray-700">Confirm Password *</label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <FontAwesomeIcon icon={faIdCard} className="text-gray-400 text-sm" />
                                    </div>
                                    <input
                                        type={showConfirmPassword ? 'text' : 'password'}
                                        name="confirmPassword"
                                        value={formData.confirmPassword}
                                        onChange={handleChange}
                                        placeholder="Confirm password"
                                        className={`w-full pl-9 pr-10 py-2.5 text-sm border rounded-lg outline-none transition-all duration-200 ${
                                            errors.confirmPassword ? 'border-red-500' : 'border-gray-300 focus:border-purple-500'
                                        }`}
                                    />
                                    <button type="button" className="absolute inset-y-0 right-0 pr-3 flex items-center" onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
                                        <FontAwesomeIcon icon={showConfirmPassword ? faEyeSlash : faEye} className="text-gray-400 hover:text-purple-600 text-sm" />
                                    </button>
                                </div>
                                {errors.confirmPassword && <p className="text-red-500 text-xs mt-1">{errors.confirmPassword}</p>}
                            </div>
                        </div>
                    </div>
                );

            case FormSteps.COMPANY:
                return (
                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm font-semibold mb-1 text-gray-700">Company Name *</label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <FontAwesomeIcon icon={faBuilding} className="text-gray-400 text-sm" />
                                </div>
                                <input
                                    type="text"
                                    name="companyName"
                                    value={formData.companyName}
                                    onChange={handleChange}
                                    placeholder="ABC Constructions Pvt. Ltd."
                                    className={`w-full pl-9 pr-3 py-2.5 text-sm border rounded-lg outline-none transition-all duration-200 ${
                                        errors.companyName ? 'border-red-500' : 'border-gray-300 focus:border-purple-500'
                                    }`}
                                />
                            </div>
                            {errors.companyName && <p className="text-red-500 text-xs mt-1">{errors.companyName}</p>}
                        </div>

                        <div>
                            <label className="block text-sm font-semibold mb-1 text-gray-700">Company Type *</label>
                            <select
                                name="companyType"
                                value={formData.companyType}
                                onChange={handleChange}
                                className={`w-full px-3 py-2.5 text-sm border rounded-lg outline-none transition-all duration-200 ${
                                    errors.companyType ? 'border-red-500' : 'border-gray-300 focus:border-purple-500'
                                }`}
                            >
                                <option value="">Select company type</option>
                                {companyTypes.map((type) => (
                                    <option key={type} value={type}>
                                        {type}
                                    </option>
                                ))}
                            </select>
                            {errors.companyType && <p className="text-red-500 text-xs mt-1">{errors.companyType}</p>}
                        </div>

                        <div>
                            <label className="block text-sm font-semibold mb-1 text-gray-700">Registered Address *</label>
                            <textarea
                                name="companyAddress"
                                value={formData.companyAddress}
                                onChange={handleChange}
                                placeholder="Full registered office address"
                                rows={3}
                                className={`w-full px-3 py-2.5 text-sm border rounded-lg outline-none transition-all duration-200 ${
                                    errors.companyAddress ? 'border-red-500' : 'border-gray-300 focus:border-purple-500'
                                }`}
                            />
                            {errors.companyAddress && <p className="text-red-500 text-xs mt-1">{errors.companyAddress}</p>}
                        </div>
                    </div>
                );

            case FormSteps.LEGAL:
                return (
                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm font-semibold mb-1 text-gray-700">PAN Number *</label>
                            <input
                                type="text"
                                name="panNumber"
                                value={formData.panNumber}
                                onChange={handleChange}
                                placeholder="ABCDE1234F"
                                className={`w-full px-3 py-2.5 text-sm border rounded-lg outline-none transition-all duration-200 ${
                                    errors.panNumber ? 'border-red-500' : 'border-gray-300 focus:border-purple-500'
                                }`}
                            />
                            {errors.panNumber && <p className="text-red-500 text-xs mt-1">{errors.panNumber}</p>}
                        </div>

                        <div>
                            <label className="block text-sm font-semibold mb-1 text-gray-700">RERA Number (Optional)</label>
                            <input
                                type="text"
                                name="reraNumber"
                                value={formData.reraNumber}
                                onChange={handleChange}
                                placeholder="MH/RERA/1234/5678"
                                className="w-full px-3 py-2.5 text-sm border border-gray-300 rounded-lg outline-none focus:border-purple-500 transition-all duration-200"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-semibold mb-1 text-gray-700">GST Number *</label>
                            <input
                                type="text"
                                name="gstNumber"
                                value={formData.gstNumber}
                                onChange={handleChange}
                                placeholder="27ABCDE1234F1Z5"
                                className={`w-full px-3 py-2.5 text-sm border rounded-lg outline-none transition-all duration-200 ${
                                    errors.gstNumber ? 'border-red-500' : 'border-gray-300 focus:border-purple-500'
                                }`}
                            />
                            {errors.gstNumber && <p className="text-red-500 text-xs mt-1">{errors.gstNumber}</p>}
                        </div>
                    </div>
                );

            case FormSteps.BUSINESS:
                return (
                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm font-semibold mb-1 text-gray-700">Business Category *</label>
                            <select
                                name="businessCategory"
                                value={formData.businessCategory}
                                onChange={handleChange}
                                className={`w-full px-3 py-2.5 text-sm border rounded-lg outline-none transition-all duration-200 ${
                                    errors.businessCategory ? 'border-red-500' : 'border-gray-300 focus:border-purple-500'
                                }`}
                            >
                                <option value="">Select category</option>
                                {businessCategories.map((category) => (
                                    <option key={category} value={category}>
                                        {category}
                                    </option>
                                ))}
                            </select>
                            {errors.businessCategory && <p className="text-red-500 text-xs mt-1">{errors.businessCategory}</p>}
                        </div>

                        <div>
                            <label className="block text-sm font-semibold mb-1 text-gray-700">Specialization *</label>
                            {errors.specialization && <p className="text-red-500 text-xs mb-2">{errors.specialization}</p>}
                            <div className="grid grid-cols-2 gap-3">
                                {specializations.map((spec) => (
                                    <label key={spec} className="flex items-center p-3 border rounded-lg hover:bg-purple-50 cursor-pointer">
                                        <input type="checkbox" checked={formData.specialization.includes(spec)} onChange={() => handleSpecializationChange(spec)} className="mr-3" />
                                        <span className="text-sm">{spec}</span>
                                    </label>
                                ))}
                            </div>
                        </div>
                    </div>
                );

            case FormSteps.LOCATIONS:
                return (
                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm font-semibold mb-1 text-gray-700">Cities of Operation *</label>
                            {errors.cities && <p className="text-red-500 text-xs mb-2">{errors.cities}</p>}
                            <div className="grid grid-cols-2 gap-3">
                                {cities.map((city) => (
                                    <label key={city} className="flex items-center p-3 border rounded-lg hover:bg-purple-50 cursor-pointer">
                                        <input type="checkbox" checked={formData.cities.includes(city)} onChange={() => handleCityChange(city)} className="mr-3" />
                                        <span className="text-sm">{city}</span>
                                    </label>
                                ))}
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-semibold mb-1 text-gray-700">Specific Areas (Optional)</label>
                            <textarea
                                name="areas"
                                value={formData.areas.join(', ')}
                                onChange={(e) => setFormData((prev) => ({ ...prev, areas: e.target.value.split(', ') }))}
                                placeholder="e.g., Andheri West, Bandra Kurla Complex, Whitefield"
                                rows={3}
                                className="w-full px-3 py-2.5 text-sm border border-gray-300 rounded-lg outline-none focus:border-purple-500 transition-all duration-200"
                            />
                        </div>
                    </div>
                );

            case FormSteps.CONSENT:
                return (
                    <div className="space-y-4">
                        <div className="p-4 bg-purple-50 rounded-lg">
                            <h3 className="font-semibold text-gray-800 mb-2">Terms & Conditions</h3>
                            <p className="text-sm text-gray-600 mb-4">
                                By registering, you agree to abide by our platform rules, maintain quality standards, provide accurate information, and comply with all applicable laws and regulations.
                            </p>
                            <label className="flex items-start">
                                <input type="checkbox" name="acceptTerms" checked={formData.acceptTerms} onChange={handleChange} className="mt-1 mr-2" />
                                <span className="text-sm text-gray-700">
                                    I agree to the{' '}
                                    <Link href="/builder/terms" className="text-purple-600 hover:underline font-medium">
                                        Terms & Conditions
                                    </Link>
                                </span>
                            </label>
                            {errors.acceptTerms && <p className="text-red-500 text-xs mt-1">{errors.acceptTerms}</p>}
                        </div>

                        <div className="p-4 bg-purple-50 rounded-lg">
                            <h3 className="font-semibold text-gray-800 mb-2">Privacy Policy</h3>
                            <p className="text-sm text-gray-600 mb-4">
                                Your personal and business information will be used for verification purposes, platform access, and to provide you with relevant services. We respect your privacy and
                                will not share your data without consent.
                            </p>
                            <label className="flex items-start">
                                <input type="checkbox" name="acceptPrivacy" checked={formData.acceptPrivacy} onChange={handleChange} className="mt-1 mr-2" />
                                <span className="text-sm text-gray-700">
                                    I agree to the{' '}
                                    <Link href="/privacy" className="text-purple-600 hover:underline font-medium">
                                        Privacy Policy
                                    </Link>
                                </span>
                            </label>
                            {errors.acceptPrivacy && <p className="text-red-500 text-xs mt-1">{errors.acceptPrivacy}</p>}
                        </div>
                    </div>
                );

            case FormSteps.REVIEW:
                return (
                    <div className="space-y-4">
                        <div className="p-6 bg-gradient-to-r from-purple-50 to-indigo-50 rounded-xl">
                            <h3 className="font-bold text-lg text-gray-800 mb-4">Review Your Information</h3>

                            <div className="space-y-3">
                                <div className="flex justify-between border-b pb-2">
                                    <span className="text-gray-600">Email:</span>
                                    <span className="font-medium">{formData.email}</span>
                                </div>
                                <div className="flex justify-between border-b pb-2">
                                    <span className="text-gray-600">Mobile:</span>
                                    <span className="font-medium">{formData.mobile}</span>
                                </div>
                                <div className="flex justify-between border-b pb-2">
                                    <span className="text-gray-600">Company:</span>
                                    <span className="font-medium">{formData.companyName}</span>
                                </div>
                                <div className="flex justify-between border-b pb-2">
                                    <span className="text-gray-600">PAN:</span>
                                    <span className="font-medium">{formData.panNumber}</span>
                                </div>
                                <div className="flex justify-between border-b pb-2">
                                    <span className="text-gray-600">GST:</span>
                                    <span className="font-medium">{formData.gstNumber}</span>
                                </div>
                                <div className="flex justify-between border-b pb-2">
                                    <span className="text-gray-600">Cities:</span>
                                    <span className="font-medium">{formData.cities.join(', ')}</span>
                                </div>
                            </div>
                        </div>

                        <div className="p-4 bg-yellow-50 rounded-lg">
                            <p className="text-sm text-yellow-800">
                                ⚠️ Your account will be reviewed by our admin team. Approval usually takes 24-48 hours. You'll receive an email notification once your account is activated.
                            </p>
                        </div>
                    </div>
                );

            default:
                return null;
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-white px-4 sm:px-6 lg:px-8 xl:px-0  py-8 sm:py-10 lg:py-14 xl:py-20 ">
            <div className="w-full max-w-4xl lg:max-w-5xl xl:max-w-6xl mx-auto px-4 ">
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold text-gray-800 mb-2">Builder Registration</h1>
                    <p className="text-gray-600">Complete the steps below to join our builder network</p>
                </div>

                {/* Stepper */}
                <div className="mb-8">
                    <div className="flex items-center justify-between relative gap-6 lg:gap-10">
                        <div className="absolute top-[27%] left-0 right-0 h-0.5 bg-gray-200 -translate-y-1/2 z-0"></div>
                        {steps.map((step, index) => (
                            <div key={step.id} className="flex flex-col items-center relative z-10">
                                <button
                                    onClick={() => setCurrentStep(step.id)}
                                    className={`w-12 h-12 rounded-full flex items-center justify-center mb-2 transition-all duration-300 ${
                                        currentStep >= step.id ? 'bg-purple-600 text-white shadow-lg' : 'bg-white border-2 border-gray-300 text-gray-400'
                                    } ${currentStep === step.id ? 'ring-4 ring-purple-200' : ''}`}
                                >
                                    {currentStep > step.id ? <FontAwesomeIcon icon={faCheckCircle} /> : step.icon}
                                </button>
                                <div className="text-center">
                                    <p className={`text-xs font-medium ${currentStep >= step.id ? 'text-purple-600' : 'text-gray-500'}`}>Step {step.id}</p>
                                    <p className={`text-sm font-semibold hidden md:block ${currentStep >= step.id ? 'text-gray-800' : 'text-gray-400'}`}>{step.title}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="bg-white rounded-2xl shadow-xl overflow-hidden mx-auto">
                    {/* Step header */}
                    <div className="p-6 border-b">
                        <div className="flex items-center justify-between">
                            <div>
                                <h2 className="text-xl font-bold text-gray-800">{steps.find((s) => s.id === currentStep)?.title}</h2>
                                <p className="text-sm text-gray-600">{steps.find((s) => s.id === currentStep)?.description}</p>
                            </div>
                            <div className="text-sm text-gray-500">
                                Step {currentStep} of {steps.length}
                            </div>
                        </div>
                    </div>

                    {/* Form content */}
                    <div className="p-6 md:p-8">
                        <form
                            onSubmit={(e) => {
                                e.preventDefault();
                                nextStep();
                            }}
                        >
                            {renderStepContent()}

                            {/* Navigation buttons */}
                            <div className="flex justify-between pt-8 mt-8 border-t">
                                <button
                                    type="button"
                                    onClick={prevStep}
                                    disabled={currentStep === FormSteps.LOGIN}
                                    className={`flex items-center px-6 py-3 rounded-lg font-medium transition-colors ${
                                        currentStep === FormSteps.LOGIN ? 'text-gray-400 cursor-not-allowed' : 'text-gray-700 hover:bg-gray-100'
                                    }`}
                                >
                                    <FontAwesomeIcon icon={faArrowLeft} className="mr-2" />
                                    Previous
                                </button>

                                <button
                                    type="submit"
                                    disabled={isLoading}
                                    className="flex items-center px-8 py-3 rounded-lg font-medium text-white transition-all duration-300 hover:scale-105 hover:shadow-lg"
                                    style={{
                                        background: 'linear-gradient(135deg, #7C3AED 0%, #5B21B6 100%)',
                                    }}
                                >
                                    {isLoading ? (
                                        <>
                                            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                                            Processing...
                                        </>
                                    ) : currentStep === FormSteps.REVIEW ? (
                                        'Submit Registration'
                                    ) : (
                                        <>
                                            Next
                                            <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
                                        </>
                                    )}
                                </button>
                            </div>
                        </form>

                        {/* Progress bar */}
                        <div className="mt-6">
                            <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                                <div
                                    className="h-full bg-gradient-to-r from-purple-500 to-indigo-500 transition-all duration-500"
                                    style={{ width: `${((currentStep - 1) / (steps.length - 1)) * 100}%` }}
                                ></div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom links */}
                <div className="text-center mt-6">
                    <p className="text-gray-600 text-sm">
                        Already have a builder account?{' '}
                        <Link href="/builder/login" className="text-purple-600 font-medium hover:underline">
                            Login here
                        </Link>
                    </p>
                    <Link href="/builderlogin" className="inline-block mt-2 text-sm text-gray-500 hover:text-gray-700 hover:underline">
                        ← Back to User Login
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default BuilderRegister;
