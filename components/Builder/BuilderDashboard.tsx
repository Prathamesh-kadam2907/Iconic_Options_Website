import Header from '@/components/Builder/layouts/header';
import Footer from '@/components/Builder/layouts/footer';
import Overlay from '@/components/layouts/overlay';
import ScrollToTop from '@/components/layouts/scroll-to-top';
import MainContainer from '@/components/layouts/main-container';
import Portals from '@/components/portals';
import Sidebar from '@/components/Builder/Dashboard/Sidebar';
import DashboardPage from './Dashboard/DashboardPage';
import Subscription from './Pages/Subscription';
import PostProperty from '@/components/Builder/Property/PostProperty';

export default function BuilderDashboard({ children }: { children: React.ReactNode }) {
    return (
        <div className="relative">
            <Overlay />
            <ScrollToTop />

            <MainContainer>
                <div className="block md:hidden"></div>

                <div className="main-content flex min-h-screen flex-col">
                    <Header />

                    {/* <div className="flex min-h-screen bg-white w-full max-w-7xl mx-auto px-0 sm:px-6 lg:px-0">

                        <Sidebar />
                    </div> */}
                    <div className="mx-2 sm:mx-4 md:mx-8 lg:mx-32">

                        <Sidebar />
                    </div>
                    

                    {/* <Footer /> */}
                   

                    <Portals />
                </div>
            </MainContainer>
        </div>
    );
}
