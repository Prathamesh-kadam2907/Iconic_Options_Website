'use client';
import { useEffect, useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Link from 'next/link';
import { IRootState } from '@/store';
import { toggleTheme, toggleSidebar, toggleRTL } from '@/store/themeConfigSlice';
import { usePathname, useRouter } from 'next/navigation';
import { getTranslation } from '@/i18n';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faBars, faChevronDown, faUser, faTimes, faHome, faSignInAlt, 
    faUserPlus, faBuilding, faPlus, faChartLine, faCalendarCheck, 
    faCrown, faCheckCircle, faArrowRight, faStar, faGem, faXmark
} from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    const pathname = usePathname();
    const dispatch = useDispatch();
    const router = useRouter();
    const { t, i18n } = getTranslation();

    const [userMenuOpen, setUserMenuOpen] = useState(false);
    const [mobileUserMenuOpen, setMobileUserMenuOpen] = useState(false);
    const [plansPopupOpen, setPlansPopupOpen] = useState(false);
    const [selectedPlan, setSelectedPlan] = useState<number | null>(null);

    const closeTimer = useRef<NodeJS.Timeout | null>(null);
    const menuRef = useRef<HTMLDivElement>(null);
    const plansButtonRef = useRef<HTMLButtonElement>(null);
    const plansPopupRef = useRef<HTMLDivElement>(null);

    // Mock user - replace with your actual user state
    const [user, setUser] = useState<any>(null);

    useEffect(() => {
        const userData = localStorage.getItem('currentBuilder');
        setUser(userData ? JSON.parse(userData) : null);
    }, [pathname]);

    useEffect(() => {
        const handler = (e: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
                // Close user menu when clicking outside
            }
            // Close plans popup when clicking outside
            if (
                plansPopupRef.current && 
                !plansPopupRef.current.contains(e.target as Node) &&
                plansButtonRef.current && 
                !plansButtonRef.current.contains(e.target as Node)
            ) {
                setPlansPopupOpen(false);
            }
        };
        document.addEventListener('mousedown', handler);
        return () => document.removeEventListener('mousedown', handler);
    }, []);

    const isRtl = useSelector((state: IRootState) => state.themeConfig.rtlClass) === 'rtl';
    const themeConfig = useSelector((state: IRootState) => state.themeConfig);

    // Plans data from your Subscription component
    const plans = [
        {
            name: 'FREE',
            price: '₹0',
            badge: 'Currently Active',
            features: ['Upto 2 Enquiries', false, '17% Visibility', false, false, 'Limited Validity', false],
        },
        {
            name: 'GOLD',
            price: '₹2479',
            oldPrice: '₹6198',
            highlight: true,
            badge: 'Most Popular',
            features: ['Upto 30 Enquiries', '8 Days Boost', '90% Visibility', true, false, '90 Days Validity', true],
        },
        {
            name: 'DIAMOND',
            price: '₹3235',
            oldPrice: '₹8088',
            features: ['Upto 40 Enquiries', '10 Days Boost', '92% Visibility', true, '500 Emails', '120 Days Validity', true],
        },
        {
            name: 'TITANIUM',
            price: '₹3691',
            oldPrice: '₹9232',
            features: ['Upto 50 Enquiries', '50 Days Boost', '98% Visibility', true, '1000 Emails', '180 Days Validity', true],
        },
    ];

    const renderFeature = (feature: any) => {
        if (feature === true) return <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 text-lg" />;
        if (feature === false) return <FontAwesomeIcon icon={faTimes} className="text-red-400 text-lg" />;
        return <span className="text-sm text-gray-700">{feature}</span>;
    };

    // Plans Popup Component using your Subscription design
    const PlansPopup = () => (
        <div 
            ref={plansPopupRef}
            className={`fixed inset-0 z-[60] bg-black/50 flex items-center justify-center p-4 transition-opacity duration-300 ${plansPopupOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
            onClick={() => setPlansPopupOpen(false)}
        >
            <div 
                className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto transform transition-transform duration-300"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Popup Header */}
                <div className="sticky top-0 bg-gradient-to-r from-teal-600 to-emerald-500 text-white p-6 rounded-t-2xl z-10">
                    <div className="flex justify-between items-center">
                        <div>
                            <h2 className="text-2xl font-bold">Upgrade Your Plan</h2>
                            <p className="text-teal-100 mt-1">Buyers are unable to notice your Property</p>
                            <p className="text-teal-100 text-sm">
                                Speak to buyers directly & <span className="font-semibold">Pay No Brokerage</span>
                            </p>
                        </div>
                        <button 
                            onClick={() => setPlansPopupOpen(false)}
                            className="w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors"
                        >
                            <FontAwesomeIcon icon={faTimes} className="text-white text-xl" />
                        </button>
                    </div>
                </div>

                {/* Subscription Plans Grid */}
                <div className="p-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {plans.map((plan, index) => (
                            <div
                                key={index}
                                onClick={() => setSelectedPlan(index)}
                                className={`relative bg-white rounded-2xl border-2 p-6 flex flex-col text-center transition-all duration-300 cursor-pointer
                                    ${selectedPlan === index ? 'border-teal-500 shadow-2xl scale-[1.02] ring-4 ring-teal-100' : 'border-gray-200'}
                                    hover:scale-[1.01] hover:border-gray-500 group`}
                            >
                                {/* Selection Indicator */}
                                {selectedPlan === index && (
                                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center">
                                        <FontAwesomeIcon icon={faCheckCircle} className="text-white text-sm" />
                                    </div>
                                )}

                                {/* Badge */}
                                {plan.badge && (
                                    <div className={`absolute -top-3 left-1/2 -translate-x-1/2 text-xs px-3 py-1 rounded-full flex items-center gap-1 transition-all duration-300 group-hover:scale-105
                                        ${plan.name === 'FREE' ? 'bg-gray-500 text-white' : 'bg-teal-500 text-white'}`}>
                                        <FontAwesomeIcon icon={faStar} className="text-xs" />
                                        {plan.badge}
                                    </div>
                                )}

                                {/* Name */}
                                <h2
                                    className={`text-xl font-bold mt-2 mb-1 transition-colors duration-300
                                        ${selectedPlan === index ? 'text-teal-600' : 'text-gray-900'}`}
                                >
                                    {plan.name}
                                </h2>

                                {/* Price */}
                                <div className="my-5">
                                    {plan.oldPrice && <p className="line-through text-gray-400 text-sm mb-1">{plan.oldPrice}</p>}
                                    <p
                                        className={`text-4xl font-bold transition-colors duration-300
                                            ${selectedPlan === index ? 'text-teal-700' : 'text-gray-900'}`}
                                    >
                                        {plan.price}
                                        <span className="text-sm font-normal text-gray-500">/plan</span>
                                    </p>
                                </div>

                                {/* Divider */}
                                <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent my-2"></div>

                                {/* Features */}
                                <div className="flex-1 space-y-4 mb-6 mt-4">
                                    {plan.features.map((feature, i) => (
                                        <div key={i} className="flex justify-center transition-transform duration-300 hover:scale-105">
                                            {renderFeature(feature)}
                                        </div>
                                    ))}
                                </div>

                                {/* Button */}
                                <button
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        setPlansPopupOpen(false);
                                        router.push('/payment');
                                    }}
                                    className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 mt-4 border-2
                                        ${
                                            plan.name === 'FREE'
                                                ? 'border-gray-300 text-gray-700 hover:border-teal-600 hover:text-teal-700 hover:bg-teal-50'
                                                : 'bg-teal-500 text-white border-teal-500 hover:bg-teal-600 hover:border-teal-600'
                                        }`}
                                >
                                    {plan.name === 'FREE' ? 'Continue Free' : 'Buy Now'}
                                </button>
                            </div>
                        ))}
                    </div>

                    {/* Selected Plan Info */}
                    {selectedPlan !== null && (
                        <div className="mt-8 max-w-2xl mx-auto p-6 bg-gradient-to-r from-teal-50 to-teal-100 rounded-2xl border border-teal-200 animate-fadeIn">
                            <div className="flex items-center justify-between">
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-800">
                                        Selected Plan: <span className="text-teal-600">{plans[selectedPlan].name}</span>
                                    </h3>
                                    <p className="text-gray-600 text-sm mt-1">Click "Buy Now" to proceed with the {plans[selectedPlan].name} plan</p>
                                </div>
                                <button
                                    onClick={() => setSelectedPlan(null)}
                                    className="px-4 py-2 text-sm text-black hover:text-teal-800 hover:bg-teal-50 rounded-lg transition-colors border border-teal-300"
                                >
                                    Clear Selection
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );

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
                           

                            <button
                                onClick={() => {
                                    setPlansPopupOpen(true);
                                    setMobileUserMenuOpen(false);
                                }}
                                className="w-full flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-gray-100 text-left transition-colors"
                            >
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
                {/* Logo */}
                <div className="horizontal-logo flex items-center justify-between ltr:mr-2 rtl:ml-2">
                    <Link href="/" className="main-logo flex shrink-0 items-center">
                        <img className="inline w-auto h-12 ltr:-ml-1 rtl:-mr-1" src="/assets/images/logo.png" alt="Iconic Options Logo" />
                    </Link>
                </div>

                {/* Mobile User Actions */}
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

                {/* Desktop Right Side Actions */}
                <div className="hidden md:flex items-center gap-4 lg:gap-6">
                    {user && (
                        <div className="relative">
                            <button
                                ref={plansButtonRef}
                                onClick={() => setPlansPopupOpen(true)}
                                className="relative group items-center gap-2 px-6 py-2 rounded-full bg-gradient-to-r from-teal-600 to-emerald-500 text-white font-semibold shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-105 flex"
                            >
                                <span className="absolute inset-0 rounded-full border border-white/25 group-hover:blur-sm"></span>
                                <span className="absolute -left-12 top-0 h-full w-10 bg-white/20 rotate-12 group-hover:translate-x-[150px] transition-all duration-700"></span>
                                <FontAwesomeIcon icon={faCrown} className="relative z-10" />
                                <span className="relative z-10 text-xs md:text-sm tracking-wide">My Plans</span>
                            </button>

                            {/* Desktop Hover Popup (Optional) */}
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
                                    <button
                                        onClick={() => setPlansPopupOpen(true)}
                                        className="w-full py-2 bg-teal-600 text-white rounded-lg font-semibold hover:bg-teal-700 transition-colors"
                                    >
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
                                    <div
                                        onClick={() => {
                                            setPlansPopupOpen(true);
                                            setUserMenuOpen(false);
                                        }}
                                        className="px-4 py-3 hover:bg-gray-100 cursor-pointer text-sm transition-colors flex items-center gap-2"
                                    >
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

            {/* Full Screen Plans Popup */}
            {plansPopupOpen && <PlansPopup />}

            {/* Mobile User Menu Modal */}
            {mobileUserMenuOpen && <MobileUserMenu />}
        </header>
    );
};

export default Header;