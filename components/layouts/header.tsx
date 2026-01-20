'use client';
import { useEffect, useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Link from 'next/link';
import { IRootState } from '@/store';
import { toggleTheme, toggleSidebar, toggleRTL } from '@/store/themeConfigSlice';
import Dropdown from '@/components/dropdown';
import { usePathname, useRouter } from 'next/navigation';
import { getTranslation } from '@/i18n';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faChevronDown, faUser } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    const pathname = usePathname();
    const dispatch = useDispatch();
    const router = useRouter();
    const { t, i18n } = getTranslation();

    const [menuOpen, setMenuOpen] = useState(false);
    const [navMenuOpen, setNavMenuOpen] = useState(false);
    const [userMenuOpen, setUserMenuOpen] = useState(false);
    const [planOpen, setPlanOpen] = useState(false);
    const [buyerOpen, setBuyerOpen] = useState(false);
    const [tenantOpen, setTenantOpen] = useState(false);
    const [pgOpen, setPgOpen] = useState(false);

    const closeTimer = useRef<NodeJS.Timeout | null>(null);
    const menuRef = useRef<HTMLDivElement>(null);

    // Mock user - replace with your actual user state
    const [user, setUser] = useState<any>(null);

    useEffect(() => {
        // Load user from localStorage or your auth system
        const loadUser = () => {
            const userData = localStorage.getItem('user');
            if (userData) {
                setUser(JSON.parse(userData));
            }
        };
        loadUser();
    }, []);

    useEffect(() => {
        const handler = (e: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
                setNavMenuOpen(false);
            }
        };
        document.addEventListener('mousedown', handler);
        return () => document.removeEventListener('mousedown', handler);
    }, []);

    const isRtl = useSelector((state: IRootState) => state.themeConfig.rtlClass) === 'rtl';
    const themeConfig = useSelector((state: IRootState) => state.themeConfig);

    const buyerMenuItems = {
        title: 'BUY A HOME',
        categories: [{ name: 'COMMERCIAL', link: '#' }],
        cities: [
            {
                name: 'Flats for Sale in Hyderabad',
                subItems: [
                    'Flats for Sale in Banjara Hills',
                    'Flats for Sale in Jubilee Hills',
                    'Flats for Sale in Madhapur',
                    'Flats for Sale in Gachibowli',
                    'Flats for Sale in Kondapur',
                    'Flats for Sale in Kukatpally',
                ],
            },
            {
                name: 'Flats for Sale in Delhi',
                subItems: ['Flats for Sale in Vasant Vihar', 'Flats for Sale in Safdarjung Enclave', 'Flats for Sale in Hauz Khas', 'Flats for Sale in Greater Kailash'],
            },
            {
                name: 'Flats for Sale in Mumbai',
                subItems: ['Flats for Sale in Andheri West', 'Flats for Sale in Andheri East', 'Flats for Sale in Malad West', 'Flats for Sale in Navi Mumbai'],
            },
            {
                name: 'Flats for Sale in Chennai',
                subItems: ['Flats for Sale in Velachery', 'Flats for Sale in Thiruvvanmiyur', 'Flats for Sale in Medavakkam'],
            },
            {
                name: 'Flats for Sale in Pune',
                subItems: ['Flats for Sale in Wakad', 'Flats for Sale in Kharadi', 'Flats for Sale in Baner'],
            },
        ],
    };

    const tenantsMenuItems = {
        title: 'RENT A HOME',
        categories: [{ name: 'COMMERCIAL', link: '#' }],
        cities: [
            {
                name: 'Flats for Rent in Hyderabad',
                subItems: ['Flats for Rent in Banjara Hills', 'Flats for Rent in Jubilee Hills', 'Flats for Rent in Madhapur', 'Flats for Rent in Gachibowli'],
            },
            {
                name: 'Flats for Rent in Delhi',
                subItems: ['Flats for Rent in Vasant Vihar', 'Flats for Rent in Safdarjung Enclave', 'Flats for Rent in Hauz Khas'],
            },
            {
                name: 'Flats for Rent in Mumbai',
                subItems: ['Flats for Rent in Andheri West', 'Flats for Rent in Andheri East', 'Flats for Rent in Malad West'],
            },
            {
                name: 'Flats for Rent in Chennai',
                subItems: ['Flats for Rent in Velachery', 'Flats for Rent in Thiruvvanmiyur'],
            },
            {
                name: 'Flats for Rent in Pune',
                subItems: ['Flats for Rent in Wakad', 'Flats for Rent in Kharadi'],
            },
        ],
    };

    const pgHostelMenuItems = {
        title: 'PG / HOSTEL',
        categories: [],
        cities: [
            {
                name: 'PG in Hyderabad',
                subItems: ['PG in Banjara Hills', 'PG in Jubilee Hills', 'PG in Madhapur', 'PG in Gachibowli'],
            },
            {
                name: 'PG in Delhi',
                subItems: ['PG in Vasant Vihar', 'PG in Safdarjung Enclave', 'PG in Hauz Khas'],
            },
            {
                name: 'PG in Mumbai',
                subItems: ['PG in Andheri West', 'PG in Andheri East', 'PG in Malad West'],
            },
            {
                name: 'PG in Chennai',
                subItems: ['PG in Velachery', 'PG in Thiruvvanmiyur'],
            },
            {
                name: 'PG in Pune',
                subItems: ['PG in Wakad', 'PG in Kharadi'],
            },
        ],
    };

    const openBuyer = () => {
        if (closeTimer.current) clearTimeout(closeTimer.current);
        setBuyerOpen(true);
        setTenantOpen(false);
        setPgOpen(false);
    };

    const openTenant = () => {
        if (closeTimer.current) clearTimeout(closeTimer.current);
        setTenantOpen(true);
        setBuyerOpen(false);
        setPgOpen(false);
    };

    const openPg = () => {
        if (closeTimer.current) clearTimeout(closeTimer.current);
        setPgOpen(true);
        setBuyerOpen(false);
        setTenantOpen(false);
    };

    const closeAll = () => {
        closeTimer.current = setTimeout(() => {
            setBuyerOpen(false);
            setTenantOpen(false);
            setPgOpen(false);
        }, 200);
    };

    const renderMegaMenu = (menuItems: any) => (
        <div className="bg-white shadow-xl rounded-lg border border-gray-200 p-6">
            <div className="mb-4 flex items-center justify-between border-b pb-3">
                <h3 className="text-sm font-semibold text-gray-700">{menuItems.title}</h3>
                {menuItems.categories && menuItems.categories.length > 0 && (
                    <div className="flex space-x-2">
                        {menuItems.categories.map((cat: any, idx: number) => (
                            <Link key={idx} href={cat.link} className="text-xs font-semibold text-gray-700 hover:text-teal-600 transition-colors">
                                {cat.name}
                            </Link>
                        ))}
                    </div>
                )}
            </div>
            <div className="grid grid-cols-5 gap-4">
                {menuItems.cities.map((city: any, idx: number) => (
                    <div key={idx}>
                        <h4 className="font-semibold text-sm mb-2 text-gray-800">{city.name}</h4>
                        <ul className="space-y-1">
                            {city.subItems.map((item: string, subIdx: number) => (
                                <li key={subIdx}>
                                    <Link href="#" className="text-xs text-gray-600 hover:text-teal-600 transition-colors block">
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );

    return (
        <header className="sticky top-0 z-50 bg-white shadow-sm">
            <div className="relative flex w-full items-center justify-between px-5 py-2.5 border-b border-gray-200">
                <div className="horizontal-logo flex items-center justify-between ltr:mr-2 rtl:ml-2">
                    <Link href="/" className="main-logo flex shrink-0 items-center">
                        <img className="inline w-auto h-12 ltr:-ml-1 rtl:-mr-1" src="/assets/images/logo.png" alt="Iconic Options Logo" />
                    </Link>
                </div>

                <button className="md:hidden text-2xl sm:text-3xl" onClick={() => setMenuOpen(!menuOpen)}>
                    <FontAwesomeIcon icon={faBars} />{' '}
                </button>

                <div
                    className={`navbar absolute md:static top-20 left-0 w-full md:w-auto bg-white md:bg-transparent shadow-lg md:shadow-none transition-all duration-300 ease-in-out ${
                        menuOpen ? 'block' : 'hidden md:block'
                    }`}
                    onMouseEnter={() => closeTimer.current && clearTimeout(closeTimer.current)}
                    onMouseLeave={closeAll}
                >
                    <ul className="flex flex-col md:flex-row gap-3 md:gap-6 lg:gap-14 text-sm md:text-[15px] lg:text-base xl:text-lg font-semibold text-gray-700 p-4 lg:p-0 relative">
                        <div className="absolute bottom-0 left-0 hidden md:block w-full">
                            <div
                                className="absolute h-[2px] bg-teal-600 transition-all duration-300"
                                style={{
                                    width: '33.33%',
                                    left: buyerOpen ? '0%' : tenantOpen ? '33.33%' : pgOpen ? '66.66%' : '0%',
                                    opacity: buyerOpen || tenantOpen || pgOpen ? 1 : 0,
                                }}
                            />
                        </div>

                        <li
                            className="cursor-pointer hover:text-teal-600 transition-colors"
                            onMouseEnter={openBuyer}
                            onClick={() => {
                                openBuyer();
                                setMenuOpen(false);
                            }}
                        >
                            Buyer
                        </li>

                        <li
                            className="cursor-pointer hover:text-teal-600 transition-colors"
                            onMouseEnter={openTenant}
                            onClick={() => {
                                openTenant();
                                setMenuOpen(false);
                            }}
                        >
                            Tenants
                        </li>

                        <li
                            className="cursor-pointer hover:text-teal-600 transition-colors"
                            onMouseEnter={openPg}
                            onClick={() => {
                                openPg();
                                setMenuOpen(false);
                            }}
                        >
                            PG / Hostel
                        </li>

                        {/* Mobile Only Buttons */}
                        <li className="md:hidden border-t pt-4 space-y-3">
                            <button
                                onClick={() => router.push('/postproperty')}
                                className="w-full bg-teal-600 text-white py-2 rounded-lg text-xs sm:text-sm font-semibold hover:bg-teal-700 transition-colors"
                            >
                                Post Property
                            </button>

                            {user && (
                                <button
                                    onClick={() => router.push('/subscription')}
                                    className="w-full bg-emerald-500 text-white py-2 rounded-lg text-xs sm:text-sm font-semibold hover:bg-emerald-600 transition-colors"
                                >
                                    My Plans
                                </button>
                            )}

                            {!user ? (
                                <>
                                    <button onClick={() => router.push('/signin')} className="w-full border py-2 rounded-lg text-xs sm:text-sm hover:border-teal-600 transition-colors">
                                        Login
                                    </button>
                                    <button onClick={() => router.push('/signup')} className="w-full bg-gray-800 text-white py-2 rounded-lg text-xs sm:text-sm hover:bg-gray-900 transition-colors">
                                        Sign Up
                                    </button>
                                </>
                            ) : (
                                <button onClick={() => router.push('/profile')} className="w-full border py-2 rounded-lg text-xs sm:text-sm hover:border-teal-600 transition-colors">
                                    My Profile
                                </button>
                            )}
                        </li>
                    </ul>
                </div>

                {/* Desktop Right Side Actions */}
                <div className="hidden md:flex items-center gap-4 lg:gap-6">
                    <button
                        onClick={() => router.push('/postproperty')}
                        className="relative group flex items-center gap-2 px-6 py-2 rounded-full bg-gradient-to-r from-teal-600 to-emerald-500 text-white font-semibold shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:scale-105"
                    >
                        <span className="absolute inset-0 rounded-full border border-white/30 group-hover:blur-sm"></span>
                        <span className="absolute -left-10 top-0 h-full w-10 bg-white/30 rotate-12 group-hover:translate-x-[150px] transition-all duration-700"></span>
                        <span className="relative z-10 text-xs md:text-sm tracking-wide">Post Property</span>
                    </button>

                    {user && (
                        <button
                            onClick={() => router.push('/subscription')}
                            className="hidden xl:flex relative group items-center gap-2 px-6 py-2 rounded-full bg-gradient-to-r from-teal-600 to-emerald-500 text-white font-semibold shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-105"
                        >
                            <span className="absolute inset-0 rounded-full border border-white/25 group-hover:blur-sm"></span>
                            <span className="absolute -left-12 top-0 h-full w-10 bg-white/20 rotate-12 group-hover:translate-x-[150px] transition-all duration-700"></span>
                            <span className="relative z-10 text-xs md:text-sm tracking-wide">My Plans</span>
                        </button>
                    )}

                    {!user ? (
                        <div className="flex gap-4">
                            <button onClick={() => router.push('/signin')} className="px-4 py-1.5 border rounded-full hover:border-teal-600 transition-colors">
                                Login
                            </button>
                            <button onClick={() => router.push('/signup')} className="px-4 py-1.5 bg-teal-600 text-white rounded-full hover:bg-teal-700 transition-colors">
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
                                <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md border border-gray-200 overflow-hidden">
                                    <div
                                        onClick={() => {
                                            router.push('/profile');
                                            setUserMenuOpen(false);
                                        }}
                                        className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-sm transition-colors"
                                    >
                                        Manage Profile
                                    </div>
                                    <div
                                        onClick={() => {
                                            router.push('/profile');
                                            setUserMenuOpen(false);
                                        }}
                                        className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-sm transition-colors"
                                    >
                                        Change Password
                                    </div>
                                    <div
                                        onClick={() => {
                                            localStorage.removeItem('user');
                                            setUser(null);
                                            router.push('/');
                                            setUserMenuOpen(false);
                                        }}
                                        className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-sm text-red-600 border-t transition-colors"
                                    >
                                        Sign Out
                                    </div>
                                </div>
                            )}
                        </div>
                    )}

                    {/* Menu Dropdown */}
                    <div className="relative" ref={menuRef}>
                        <button onClick={() => setNavMenuOpen(!navMenuOpen)} className="flex items-center gap-2 text-gray-700 hover:text-teal-600 transition-colors">
                            <FontAwesomeIcon icon={faBars} />
                            <span className="text-xs sm:text-sm lg:text-base font-semibold">Menu</span>
                        </button>

                        {navMenuOpen && (
                            <div className="absolute right-0 mt-3 w-52 bg-white shadow-xl rounded-lg border border-gray-200 overflow-hidden">
                                <div className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-sm transition-colors">My Wishlist</div>
                                <div className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-sm transition-colors">My Activity</div>
                                <div className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-sm transition-colors">My Listing</div>
                                <div
                                    onClick={() => {
                                        router.push('/postproperty');
                                        setNavMenuOpen(false);
                                    }}
                                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-sm transition-colors"
                                >
                                    Post Your Property
                                </div>

                                <div className="relative">
                                    <div onClick={() => setPlanOpen(!planOpen)} className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-sm flex justify-between items-center transition-colors">
                                        My Subscription Plans
                                        <FontAwesomeIcon icon={faChevronDown} className={`text-xs transition-transform ${planOpen ? 'rotate-180' : ''}`} />
                                    </div>

                                    {planOpen && (
                                        <div className="bg-gray-50 border-t">
                                            <div
                                                onClick={() => {
                                                    router.push('/buyer-plan');
                                                    setNavMenuOpen(false);
                                                }}
                                                className="px-6 py-2 hover:bg-gray-100 cursor-pointer text-sm transition-colors"
                                            >
                                                Buyer Plan
                                            </div>
                                            <div
                                                onClick={() => {
                                                    router.push('/tenant-plan');
                                                    setNavMenuOpen(false);
                                                }}
                                                className="px-6 py-2 hover:bg-gray-100 cursor-pointer text-sm transition-colors"
                                            >
                                                Tenants Plan
                                            </div>
                                            <div
                                                onClick={() => {
                                                    router.push('/commercial-plan');
                                                    setNavMenuOpen(false);
                                                }}
                                                className="px-6 py-2 hover:bg-gray-100 cursor-pointer text-sm transition-colors"
                                            >
                                                Commercial Plan
                                            </div>
                                        </div>
                                    )}
                                </div>

                                <div className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-sm transition-colors">Contact Us</div>
                                <div className="px-4 py-2 text-xs text-gray-500 border-t bg-gray-50">Email: assist@iconicoptions.in</div>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Mega Menus */}
            {buyerOpen && (
                <div className="absolute top-[70px] left-0 w-full z-40" onMouseEnter={() => closeTimer.current && clearTimeout(closeTimer.current)} onMouseLeave={closeAll}>
                    <div className="container mx-auto px-5">{renderMegaMenu(buyerMenuItems)}</div>
                </div>
            )}

            {tenantOpen && (
                <div className="absolute top-[70px] left-0 w-full z-40" onMouseEnter={() => closeTimer.current && clearTimeout(closeTimer.current)} onMouseLeave={closeAll}>
                    <div className="container mx-auto px-5">{renderMegaMenu(tenantsMenuItems)}</div>
                </div>
            )}

            {pgOpen && (
                <div className="absolute top-[70px] left-0 w-full z-40" onMouseEnter={() => closeTimer.current && clearTimeout(closeTimer.current)} onMouseLeave={closeAll}>
                    <div className="container mx-auto px-5">{renderMegaMenu(pgHostelMenuItems)}</div>
                </div>
            )}
        </header>
    );
};

export default Header;
