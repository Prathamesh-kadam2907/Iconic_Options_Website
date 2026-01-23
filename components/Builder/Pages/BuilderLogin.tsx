"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faLock, faUserPlus, faShieldAlt, faBuilding, faArrowRight, faCheckCircle } from '@fortawesome/free-solid-svg-icons';
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

    const handlePasswordLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        
        // Simulate API call
        setTimeout(() => {
            setIsLoading(false);
            // For demo, redirect to dashboard on any login
            router.push('/builder/dashboard');
        }, 1500);
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
        <div className="min-h-screen flex items-center justify-center px-4 py-12 bg-gradient-to-br from-gray-900 to-blue-900 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500 rounded-full blur-3xl"></div>
                <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-teal-500 rounded-full blur-3xl"></div>
            </div>

            {/* Background Image */}
            <div 
                className="absolute inset-0 bg-cover bg-center opacity-5"
                style={{
                    backgroundImage: 'url("https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80")'
                }}
            ></div>

            <div className="relative z-10 w-full max-w-md">
                {/* Header Card */}
                <div className="mb-8 text-center">
                    <div className="inline-flex items-center justify-center w-20 h-20 mb-4 rounded-2xl bg-gradient-to-br from-blue-600 to-teal-500 shadow-lg">
                        <FontAwesomeIcon icon={faBuilding} className="text-3xl text-white" />
                    </div>
                    <h1 className="text-3xl font-bold text-white mb-2">Builder Login</h1>
                    <p className="text-blue-200">Access your professional dashboard</p>
                </div>

                {/* Login Card */}
                <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl border border-white/20 overflow-hidden">
                    {/* Method Toggle */}
                    <div className="flex border-b border-white/20">
                        <button
                            onClick={() => setLoginMethod('password')}
                            className={`flex-1 py-4 text-center font-medium transition-all ${
                                loginMethod === 'password'
                                    ? 'bg-white/20 text-white'
                                    : 'text-blue-200 hover:bg-white/10'
                            }`}
                        >
                            <FontAwesomeIcon icon={faLock} className="mr-2" />
                            Password Login
                        </button>
                        <button
                            onClick={() => setLoginMethod('otp')}
                            className={`flex-1 py-4 text-center font-medium transition-all ${
                                loginMethod === 'otp'
                                    ? 'bg-white/20 text-white'
                                    : 'text-blue-200 hover:bg-white/10'
                            }`}
                        >
                            <FontAwesomeIcon icon={faShieldAlt} className="mr-2" />
                            OTP Login
                        </button>
                    </div>

                    {/* Login Form */}
                    <div className="p-8">
                        {loginMethod === 'password' ? (
                            <form onSubmit={handlePasswordLogin}>
                                <div className="space-y-6">
                                    {/* Mobile Input */}
                                    <div>
                                        <label className="block text-sm font-medium text-blue-200 mb-2">
                                            Mobile Number *
                                        </label>
                                        <div className="relative">
                                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                                <FontAwesomeIcon icon={faPhone} className="text-blue-400" />
                                            </div>
                                            <input
                                                type="tel"
                                                value={mobile}
                                                onChange={(e) => setMobile(e.target.value)}
                                                placeholder="Enter 10-digit mobile number"
                                                className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
                                                required
                                            />
                                        </div>
                                    </div>

                                    {/* Password Input */}
                                    <div>
                                        <label className="block text-sm font-medium text-blue-200 mb-2">
                                            Password *
                                        </label>
                                        <div className="relative">
                                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                                <FontAwesomeIcon icon={faLock} className="text-blue-400" />
                                            </div>
                                            <input
                                                type={showPassword ? "text" : "password"}
                                                value={password}
                                                onChange={(e) => setPassword(e.target.value)}
                                                placeholder="Enter your password"
                                                className="w-full pl-10 pr-12 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
                                                required
                                            />
                                            <button
                                                type="button"
                                                onClick={() => setShowPassword(!showPassword)}
                                                className="absolute inset-y-0 right-0 pr-3 flex items-center"
                                            >
                                                <span className="text-blue-400 hover:text-white transition-colors">
                                                    {showPassword ? 'Hide' : 'Show'}
                                                </span>
                                            </button>
                                        </div>
                                        <div className="mt-2 text-right">
                                            <Link 
                                                href="/builder/forgot-password" 
                                                className="text-sm text-teal-400 hover:text-teal-300 transition-colors"
                                            >
                                                Forgot Password?
                                            </Link>
                                        </div>
                                    </div>

                                    {/* Login Button */}
                                    <button
                                        type="submit"
                                        disabled={isLoading}
                                        className="w-full py-3 px-4 bg-gradient-to-r from-teal-500 to-blue-600 text-white font-semibold rounded-lg hover:from-teal-600 hover:to-blue-700 transform hover:-translate-y-0.5 transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
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
                                        <label className="block text-sm font-medium text-blue-200 mb-2">
                                            Mobile Number *
                                        </label>
                                        <div className="flex gap-2">
                                            <div className="relative flex-1">
                                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                                    <FontAwesomeIcon icon={faPhone} className="text-blue-400" />
                                                </div>
                                                <input
                                                    type="tel"
                                                    value={mobile}
                                                    onChange={(e) => setMobile(e.target.value)}
                                                    placeholder="Enter 10-digit mobile number"
                                                    className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
                                                    required
                                                />
                                            </div>
                                            <button
                                                type="button"
                                                onClick={handleSendOTP}
                                                className="px-4 py-3 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors whitespace-nowrap"
                                            >
                                                {otpSent ? 'Resend OTP' : 'Send OTP'}
                                            </button>
                                        </div>
                                    </div>

                                    {/* OTP Input */}
                                    {otpSent && (
                                        <div>
                                            <label className="block text-sm font-medium text-blue-200 mb-2">
                                                Enter OTP *
                                            </label>
                                            <div className="relative">
                                                <input
                                                    type="text"
                                                    value={otp}
                                                    onChange={(e) => setOtp(e.target.value)}
                                                    placeholder="Enter 6-digit OTP"
                                                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all text-center tracking-widest text-xl"
                                                    maxLength={6}
                                                    required
                                                />
                                            </div>
                                            {otp === '123456' && (
                                                <div className="mt-2 flex items-center text-green-400 text-sm">
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
                                        className="w-full py-3 px-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-700 transform hover:-translate-y-0.5 transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
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
                        <div className="my-6 relative">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-white/20"></div>
                            </div>
                            <div className="relative flex justify-center text-sm">
                                <span className="px-4 bg-transparent text-blue-200">Not a builder yet?</span>
                            </div>
                        </div>

                        {/* Registration Section */}
                        <div className="text-center">
                            <p className="text-blue-200 mb-4">
                                Join our network of professional builders and grow your business
                            </p>
                            <button
                                onClick={() => router.push('/builder/BuilderRegister')}
                                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-500 to-teal-600 text-white font-semibold rounded-full hover:from-green-600 hover:to-teal-700 transform hover:-translate-y-0.5 transition-all duration-300 shadow-lg hover:shadow-xl"
                            >
                                <FontAwesomeIcon icon={faUserPlus} className="mr-2" />
                                Sign Up as Builder
                            </button>
                        </div>
                    </div>

                    {/* Features List */}
                    {/* <div className="bg-black/30 p-6 border-t border-white/10">
                        <div className="grid grid-cols-2 gap-4">
                            {[
                                { text: 'Project Management', icon: '📊' },
                                { text: 'Client Dashboard', icon: '👥' },
                                { text: 'Analytics', icon: '📈' },
                                { text: '24/7 Support', icon: '🛡️' },
                            ].map((feature, index) => (
                                <div key={index} className="flex items-center gap-2">
                                    <span className="text-xl">{feature.icon}</span>
                                    <span className="text-sm text-blue-200">{feature.text}</span>
                                </div>
                            ))}
                        </div>
                    </div> */}
                </div>

                {/* Footer Links */}
                <div className="mt-6 text-center">
                    <Link 
                        href="/" 
                        className="text-blue-300 hover:text-white transition-colors text-sm"
                    >
                        ← Back to Home
                    </Link>
                    <p className="mt-2 text-blue-400 text-sm">
                        By logging in, you agree to our Terms & Privacy
                    </p>
                </div>
            </div>
        </div>
    );
};

export default BuilderLogin;