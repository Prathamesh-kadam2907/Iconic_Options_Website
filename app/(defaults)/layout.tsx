
import ContentAnimation from '@/components/layouts/content-animation';
import Footer from '@/components/layouts/footer';
import Header from '@/components/layouts/header';
import MainContainer from '@/components/layouts/main-container';
import Overlay from '@/components/layouts/overlay';
import ScrollToTop from '@/components/layouts/scroll-to-top';

import Portals from '@/components/portals';
import BuilderDashboard from '@/components/Builder/BuilderDashboard';
import BuilderLogin from '@/components/Builder/Pages/BuilderLogin';

export default function DefaultLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            {/* BEGIN MAIN CONTAINER */}
            <div className="relative">
                <Overlay />
                <ScrollToTop />

                <MainContainer>
                    
                    <div className="block md:hidden">
                       
                    </div>
                    
                    <div className="main-content flex min-h-screen flex-col">
                       

                        {/* <Header />

                        

                        <ContentAnimation>{children}</ContentAnimation>
                       
                        
                        <Footer /> */}
                        {/* <BuilderDashboard></BuilderDashboard> */}
                        <BuilderLogin></BuilderLogin>
                       
                        <Portals />
                    </div>
                </MainContainer>
            </div>
        </>
    );
}
