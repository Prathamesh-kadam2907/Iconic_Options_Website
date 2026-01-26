'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faLock, faUserPlus, faShieldAlt, faBuilding, faArrowRight, faCheckCircle, faEnvelope, faEye, faEyeSlash, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

const BuilderLogin = () => {
    const router = useRouter();
    const [loginMethod, setLoginMethod] = useState<'password' | 'otp'>('password');
    const [mobile, setMobile] = useState('');
    const [password, setPassword] = useState('');
    const [otp, setOtp] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [otpSent, setOtpSent] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState('');

    const handlePasswordLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            const response = await fetch('http://10.230.209.94:5000/api/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: email,
                    password: password,
                }),
            });

            const data = await response.json();

            if (response.ok) {
                console.log('Login success:', data);

                localStorage.setItem(
                    'currentBuilder',
                    JSON.stringify({
                        name: data.name,
                        email: data.email,
                        photo:
                            data.avatar ||
                            'https://img.freepik.com/premium-photo/candid-smile-handsome-young-man-keeping-arms-crossed-looking-camera-while-standing-against-white-background_425904-23838.jpg?semt=ais_hybrid&w=740&q=80',
                        token: data.token,
                    }),
                );

                router.push('/builder/dashboard');
            } else {
                alert(data.message || 'Login failed');
            }
        } catch (error) {
            console.error(error);
            alert('Server error');
        } finally {
            setIsLoading(false);
        }
    };

    const handleSendOTP = () => {
        if (!mobile || !/^\d{10}$/.test(mobile)) {
            alert('Please enter a valid 10-digit mobile number');
            return;
        }
        setOtpSent(true);
        alert(`OTP sent to ${mobile}`);
    };

    const handleOTPLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!otp) {
            alert('Please enter OTP');
            return;
        }
        setIsLoading(true);

        // Simulate OTP verification
        setTimeout(() => {
            setIsLoading(false);
            router.push('/builder/dashboard');
        }, 1500);
    };

    return (
        <div className="min-h-screen bg-gray-50 py-10">
            <div className="w-full max-w-6xl mx-auto px-4 sm:px-28 lg:px-48 xl:px-88">
                {/* Header */}
                <div className="text-center mb-8">
                    <div className="inline-flex items-center justify-center w-20 h-20 mb-4 rounded-2xl bg-gradient-to-br from-purple-600 to-indigo-600 shadow-lg">
                        <FontAwesomeIcon icon={faBuilding} className="text-3xl text-white" />
                    </div>
                    <h1 className="text-3xl font-bold text-gray-800 mb-2">Builder Login</h1>
                    <p className="text-gray-600">Access your professional dashboard</p>
                </div>

                {/* Main Card */}
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden mx-auto max-w-md">
                    {/* Login Method Tabs */}
                    <div className="flex border-b">
                        <button
                            onClick={() => setLoginMethod('password')}
                            className={`flex-1 py-4 text-center font-medium transition-all ${
                                loginMethod === 'password' ? 'bg-gradient-to-r from-purple-50 to-indigo-50 text-purple-600 border-b-2 border-purple-600' : 'text-gray-600 hover:bg-gray-50'
                            }`}
                        >
                            <FontAwesomeIcon icon={faLock} className="mr-2" />
                            Password Login
                        </button>
                        <button
                            onClick={() => setLoginMethod('otp')}
                            className={`flex-1 py-4 text-center font-medium transition-all ${
                                loginMethod === 'otp' ? 'bg-gradient-to-r from-purple-50 to-indigo-50 text-purple-600 border-b-2 border-purple-600' : 'text-gray-600 hover:bg-gray-50'
                            }`}
                        >
                            <FontAwesomeIcon icon={faShieldAlt} className="mr-2" />
                            OTP Login
                        </button>
                    </div>

                    {/* Form Content */}
                    <div className="p-6 md:p-8">
                        {loginMethod === 'password' ? (
                            <form onSubmit={handlePasswordLogin}>
                                <div className="space-y-6">
                                    {/* Email Input */}
                                    <div>
                                        <label className="block text-sm font-semibold mb-2 text-gray-700">Email Address *</label>
                                        <div className="relative">
                                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                                <FontAwesomeIcon icon={faEnvelope} className="text-gray-400 text-sm" />
                                            </div>
                                            <input
                                                type="email"
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                                placeholder="business@example.com"
                                                className="w-full pl-10 pr-3 py-3 text-sm border border-gray-300 rounded-lg outline-none focus:border-purple-500 transition-all duration-200"
                                                required
                                            />
                                        </div>
                                    </div>

                                    {/* Password Input */}
                                    <div>
                                        <label className="block text-sm font-semibold mb-2 text-gray-700">Password *</label>
                                        <div className="relative">
                                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                                <FontAwesomeIcon icon={faLock} className="text-gray-400 text-sm" />
                                            </div>
                                            <input
                                                type={showPassword ? 'text' : 'password'}
                                                value={password}
                                                onChange={(e) => setPassword(e.target.value)}
                                                placeholder="Enter your password"
                                                className="w-full pl-10 pr-10 py-3 text-sm border border-gray-300 rounded-lg outline-none focus:border-purple-500 transition-all duration-200"
                                                required
                                            />
                                            <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute inset-y-0 right-0 pr-3 flex items-center">
                                                <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} className="text-gray-400 hover:text-purple-600 text-sm" />
                                            </button>
                                        </div>
                                        <div className="mt-2 text-right">
                                            <Link href="/builder/forgot-password" className="text-sm text-purple-600 hover:text-purple-700 hover:underline">
                                                Forgot Password?
                                            </Link>
                                        </div>
                                    </div>

                                    {/* Login Button */}
                                    <button
                                        type="submit"
                                        disabled={isLoading}
                                        className="w-full py-3 px-4 rounded-lg font-medium text-white transition-all duration-300 hover:scale-105 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                                        style={{
                                            background: 'linear-gradient(135deg, #7C3AED 0%, #5B21B6 100%)',
                                        }}
                                    >
                                        {isLoading ? (
                                            <div className="flex items-center justify-center">
                                                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                                                Logging in...
                                            </div>
                                        ) : (
                                            <div className="flex items-center justify-center">
                                                Login to Dashboard
                                                <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
                                            </div>
                                        )}
                                    </button>
                                </div>
                            </form>
                        ) : (
                            <form onSubmit={handleOTPLogin}>
                                <div className="space-y-6">
                                    {/* Mobile Input for OTP */}
                                    <div>
                                        <label className="block text-sm font-semibold mb-2 text-gray-700">Mobile Number *</label>
                                        <div className="flex gap-2">
                                            <div className="relative flex-1">
                                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                                    <FontAwesomeIcon icon={faPhone} className="text-gray-400 text-sm" />
                                                </div>
                                                <input
                                                    type="tel"
                                                    value={mobile}
                                                    onChange={(e) => setMobile(e.target.value)}
                                                    placeholder="9876543210"
                                                    className="w-full pl-10 pr-4 py-3 text-sm border border-gray-300 rounded-lg outline-none focus:border-purple-500 transition-all duration-200"
                                                    required
                                                />
                                            </div>
                                            <button
                                                type="button"
                                                onClick={handleSendOTP}
                                                className="px-4 py-3 text-sm bg-purple-100 text-purple-700 rounded-lg hover:bg-purple-200 transition-colors whitespace-nowrap"
                                            >
                                                {otpSent ? 'Resend OTP' : 'Send OTP'}
                                            </button>
                                        </div>
                                    </div>

                                    {/* OTP Input */}
                                    {otpSent && (
                                        <div>
                                            <label className="block text-sm font-semibold mb-2 text-gray-700">Enter OTP *</label>
                                            <div className="relative">
                                                <input
                                                    type="text"
                                                    value={otp}
                                                    onChange={(e) => setOtp(e.target.value)}
                                                    placeholder="Enter 6-digit OTP"
                                                    className="w-full px-4 py-3 text-sm border border-gray-300 rounded-lg outline-none focus:border-purple-500 transition-all duration-200 text-center tracking-widest text-lg"
                                                    maxLength={6}
                                                    required
                                                />
                                            </div>
                                            {otp === '123456' && (
                                                <div className="mt-2 flex items-center text-green-600 text-sm">
                                                    <FontAwesomeIcon icon={faCheckCircle} className="mr-2" />
                                                    OTP Verified
                                                </div>
                                            )}
                                        </div>
                                    )}

                                    {/* OTP Login Button */}
                                    <button
                                        type="submit"
                                        disabled={isLoading || !otpSent}
                                        className="w-full py-3 px-4 rounded-lg font-medium text-white transition-all duration-300 hover:scale-105 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                                        style={{
                                            background: 'linear-gradient(135deg, #7C3AED 0%, #5B21B6 100%)',
                                        }}
                                    >
                                        {isLoading ? (
                                            <div className="flex items-center justify-center">
                                                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                                                Verifying...
                                            </div>
                                        ) : (
                                            'Login with OTP'
                                        )}
                                    </button>
                                </div>
                            </form>
                        )}

                        {/* Divider */}
                        <div className="my-8 relative">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-gray-200"></div>
                            </div>
                            <div className="relative flex justify-center text-sm">
                                <span className="px-4 bg-white text-gray-500">Not a builder yet?</span>
                            </div>
                        </div>

                        {/* Registration Section */}
                        <div className="text-center">
                            <p className="text-gray-600 mb-4">Join our network of professional builders and grow your business</p>
                            <button
                                onClick={() => router.push('/builder/BuilderRegister')}
                                className="inline-flex items-center px-6 py-3 rounded-full font-medium text-white transition-all duration-300 hover:scale-105 hover:shadow-lg"
                                style={{
                                    background: 'linear-gradient(135deg, #10B981 0%, #059669 100%)',
                                }}
                            >
                                <FontAwesomeIcon icon={faUserPlus} className="mr-2" />
                                Sign Up as Builder
                            </button>
                        </div>
                    </div>
                </div>

                {/* Footer Links */}
                <div className="mt-6 text-center">
                    <Link href="/" className="inline-flex items-center text-gray-600 hover:text-gray-800 transition-colors text-sm hover:underline">
                        <FontAwesomeIcon icon={faArrowLeft} className="mr-2" />
                        Back to Home
                    </Link>
                    <p className="mt-2 text-gray-500 text-sm">By logging in, you agree to our Terms & Privacy</p>
                </div>
            </div>
        </div>
    );
};

export default BuilderLogin;
