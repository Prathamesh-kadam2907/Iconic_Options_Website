
import ContentAnimation from '@/components/layouts/content-animation';
import Footer from '@/components/layouts/footer';
import Header from '@/components/layouts/header';
import MainContainer from '@/components/layouts/main-container';
import Overlay from '@/components/layouts/overlay';
import ScrollToTop from '@/components/layouts/scroll-to-top';

import Portals from '@/components/portals';
import BuilderDashboard from '@/components/Builder/BuilderDashboard';

export default function DefaultLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            {/* BEGIN MAIN CONTAINER */}
            <div className="relative">
                <Overlay />
                <ScrollToTop />

                <MainContainer>
                    {/* BEGIN SIDEBAR */}
                    <div className="block md:hidden">
                       
                    </div>
                    {/* END SIDEBAR */}
                    <div className="main-content flex min-h-screen flex-col">
                        {/* BEGIN TOP NAVBAR */}

                        <Header />

                        <BuilderDashboard children={undefined}></BuilderDashboard><BuilderDashboard children={undefined}></BuilderDashboard><BuilderDashboard children={undefined}></BuilderDashboard>

                        {/* {/* {/* <ContentAnimation>{children}</ContentAn */}imat */}ion> */}
                       
                        {/* BEGIN FOOTER */}
                        <Footer />
                        {/* END FOOTER */}
                        <Portals />
                    </div>
                </MainContainer>
            </div>
        </>
    );
}
