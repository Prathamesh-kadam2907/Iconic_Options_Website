'use client';
import { useEffect, useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Link from 'next/link';
import { IRootState } from '@/store';
import { toggleTheme, toggleSidebar, toggleRTL } from '@/store/themeConfigSlice';
import { usePathname, useRouter } from 'next/navigation';
import { getTranslation } from '@/i18n';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faChevronDown, faUser, faTimes, faSignInAlt, faCrown } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    const pathname = usePathname();
    const dispatch = useDispatch();
    const router = useRouter();
    const { t, i18n } = getTranslation();

    const [userMenuOpen, setUserMenuOpen] = useState(false);
    const [mobileUserMenuOpen, setMobileUserMenuOpen] = useState(false);

   

    const [user, setUser] = useState<any>(null);

    useEffect(() => {
        const userData = localStorage.getItem('currentBuilder');
        setUser(userData ? JSON.parse(userData) : null);
    }, [pathname]);

    const isRtl = useSelector((state: IRootState) => state.themeConfig.rtlClass) === 'rtl';
    const themeConfig = useSelector((state: IRootState) => state.themeConfig);

    const [showSubscription, setShowSubscription] = useState(false);

    const MobileUserMenu = () => (
        <div className="fixed inset-0 z-50 bg-black/50 md:hidden" onClick={() => setMobileUserMenuOpen(false)}>
            <div className="absolute right-0 top-0 h-full w-64 bg-white shadow-lg" onClick={(e) => e.stopPropagation()}>
                <div className="flex items-center justify-between p-4 border-b">
                    <h3 className="font-semibold text-lg">Account</h3>
                    <button onClick={() => setMobileUserMenuOpen(false)}>
                        <FontAwesomeIcon icon={faTimes} className="text-gray-500" />
                    </button>
                </div>

                {user ? (
                    <div className="p-4">
                        <div className="flex items-center gap-3 mb-6 pb-4 border-b">
                            <img src={user.photo || '/assets/images/user-profile.jpeg'} className="w-12 h-12 rounded-full border-2 border-gray-200" alt="User" />
                            <div>
                                <h4 className="font-semibold text-gray-900">{user.name}</h4>
                                <p className="text-sm text-gray-500">{user.email || user.phone}</p>
                            </div>
                        </div>

                        <div className="space-y-2">
                            <button onClick={() => setShowSubscription(true)} className="w-full flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-gray-100 text-left transition-colors">
                                <FontAwesomeIcon icon={faCrown} className="text-teal-600" />
                                <span>My Plans</span>
                            </button>

                            <button
                                onClick={() => {
                                    localStorage.removeItem('currentBuilder');
                                    setUser(null);
                                    router.push('/');
                                    setMobileUserMenuOpen(false);
                                }}
                                className="w-full flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-red-50 text-red-600 text-left transition-colors mt-4"
                            >
                                <FontAwesomeIcon icon={faSignInAlt} className="rotate-180" />
                                <span>Sign Out</span>
                            </button>
                        </div>
                    </div>
                ) : (
                    <div className="p-6">
                        <h4 className="text-center text-gray-700 mb-6">Welcome to Iconic Options</h4>
                        <div className="space-y-3">
                            <button
                                onClick={() => {
                                    router.push('/builder/BuilderLogin');
                                    setMobileUserMenuOpen(false);
                                }}
                                className="w-full px-6 py-3 border-2 border-teal-600 text-teal-600 rounded-full font-semibold hover:bg-teal-50 transition-colors"
                            >
                                Login
                            </button>
                            <button
                                onClick={() => {
                                    router.push('/builder/BuilderRegister');
                                    setMobileUserMenuOpen(false);
                                }}
                                className="w-full px-6 py-3 bg-gradient-to-r from-teal-600 to-emerald-500 text-white rounded-full font-semibold hover:from-teal-700 hover:to-emerald-600 transition-colors shadow-md"
                            >
                                Sign Up
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );

    return (
        <header className="sticky top-0 z-50 bg-white shadow-sm">
            <div className="relative flex w-full items-center justify-between px-4 sm:px-6 lg:px-8 py-2.5 border-b border-gray-200">
                {showSubscription && (
                    <div className="fixed inset-0 z-[999] bg-black/50 flex items-center justify-center">
                        <div className="bg-white rounded-2xl w-[95%] sm:w-[85%] md:w-[70%] lg:w-[60%] h-[85vh] shadow-2xl relative">
                           
                            <button onClick={() => setShowSubscription(false)} className="absolute top-3 right-3 text-xl text-gray-600 hover:text-red-500 z-10">
                                ✕
                            </button>

                           
                            <iframe src="/builder/BuilderSubscription" className="w-full h-full rounded-2xl" />
                        </div>
                    </div>
                )}

               
                <div className="horizontal-logo flex items-center justify-between ltr:mr-2 rtl:ml-2">
                    <Link href="/" className="main-logo flex shrink-0 items-center">
                        <img className="inline w-auto h-12 ltr:-ml-1 rtl:-mr-1" src="/assets/images/logo.png" alt="Iconic Options Logo" />
                    </Link>
                </div>

                
                <div className="flex items-center gap-3 md:hidden">
                    {user ? (
                        <>
                            <button onClick={() => setMobileUserMenuOpen(true)} className="flex items-center gap-2 hover:opacity-80 transition-opacity">
                                <img src={user.photo || '/assets/images/user-profile.jpeg'} className="w-8 h-8 rounded-full border-2 border-gray-200" alt="User" />
                            </button>
                        </>
                    ) : (
                        <>
                            <div className="flex items-center gap-2">
                                <button
                                    onClick={() => router.push('/builder/BuilderLogin')}
                                    className="px-3 py-1.5 border border-gray-300 rounded-full text-sm hover:border-teal-600 transition-colors"
                                >
                                    Login
                                </button>
                                <button onClick={() => router.push('/builder/BuilderRegister')} className="px-3 py-1.5 bg-teal-600 text-white rounded-full text-sm hover:bg-teal-700 transition-colors">
                                    Sign Up
                                </button>
                            </div>
                        </>
                    )}
                </div>

               
                <div className="hidden md:flex items-center gap-4 lg:gap-6">
                    {user && (
                        <div className="relative">
                            <button
                                onClick={() => setShowSubscription(true)}
                                className="relative group items-center gap-2 px-6 py-2 rounded-full bg-gradient-to-r from-teal-600 to-emerald-500 text-white font-semibold shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-105 flex"
                            >
                                <span className="absolute inset-0 rounded-full border border-white/25 group-hover:blur-sm"></span>
                                <span className="absolute -left-12 top-0 h-full w-10 bg-white/20 rotate-12 group-hover:translate-x-[150px] transition-all duration-700"></span>
                                <FontAwesomeIcon icon={faCrown} className="relative z-10" />
                                <span className="relative z-10 text-xs md:text-sm tracking-wide">My Plans</span>
                            </button>

                           
                            <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 z-[60] w-72 bg-white rounded-xl shadow-2xl border border-gray-200 overflow-hidden opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-opacity duration-300">
                                <div className="bg-gradient-to-r from-teal-600 to-emerald-500 text-white p-4">
                                    <div className="flex items-center gap-2">
                                        <FontAwesomeIcon icon={faCrown} className="text-xl" />
                                        <h3 className="text-lg font-bold">Upgrade Plan</h3>
                                    </div>
                                    <p className="text-teal-100 text-sm mt-1">Get better visibility</p>
                                </div>
                                <div className="p-4 text-center">
                                    <p className="text-gray-600 text-sm mb-3">Click to view all subscription plans</p>
                                    <button onClick={() => setShowSubscription(true)} className="w-full py-2 bg-teal-600 text-white rounded-lg font-semibold hover:bg-teal-700 transition-colors">
                                        View Plans
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}

                    {!user ? (
                        <div className="flex gap-4">
                            <button onClick={() => router.push('/builder/BuilderLogin')} className="px-4 py-1.5 border border-gray-300 rounded-full hover:border-teal-600 transition-colors text-sm">
                                Login
                            </button>
                            <button onClick={() => router.push('/builder/BuilderRegister')} className="px-4 py-1.5 bg-teal-600 text-white rounded-full hover:bg-teal-700 transition-colors text-sm">
                                Sign Up
                            </button>
                        </div>
                    ) : (
                        <div className="relative">
                            <button onClick={() => setUserMenuOpen(!userMenuOpen)} className="flex items-center gap-2 hover:opacity-80 transition-opacity">
                                <img src={user.photo || '/assets/images/user-profile.jpeg'} className="w-9 h-9 rounded-full border-2 border-gray-200" alt="User" />
                                <span className="text-sm font-semibold">{user.name}</span>
                                <FontAwesomeIcon icon={faChevronDown} className="text-xs" />
                            </button>

                            {userMenuOpen && (
                                <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md border border-gray-200 overflow-hidden z-50">
                                    <div
                                        onClick={() => {
                                            router.push('/profile');
                                            setUserMenuOpen(false);
                                        }}
                                        className="px-4 py-3 hover:bg-gray-100 cursor-pointer text-sm transition-colors flex items-center gap-2"
                                    >
                                        <FontAwesomeIcon icon={faUser} className="text-gray-500" />
                                        Manage Profile
                                    </div>
                                    <div onClick={() => setShowSubscription(true)} className="px-4 py-3 hover:bg-gray-100 cursor-pointer text-sm transition-colors flex items-center gap-2">
                                        <FontAwesomeIcon icon={faCrown} className="text-teal-600" />
                                        My Plans
                                    </div>
                                    <div
                                        onClick={() => {
                                            localStorage.removeItem('currentBuilder');
                                            setUser(null);
                                            router.push('/');
                                            setUserMenuOpen(false);
                                        }}
                                        className="px-4 py-3 hover:bg-red-50 cursor-pointer text-sm text-red-600 border-t transition-colors flex items-center gap-2"
                                    >
                                        <FontAwesomeIcon icon={faSignInAlt} className="rotate-180" />
                                        Sign Out
                                    </div>
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </div>

           
            {mobileUserMenuOpen && <MobileUserMenu />}
        </header>
    );
};

export default Header;
