import React from 'react';
import { useRouter } from 'next/router';
import CmtVerticalLayout from '../../../../../@coremat/CmtLayouts/Vertical';
import CmtHeader from '../../../../../@coremat/CmtLayouts/Vertical/Header';
import Header from '../../partials/Header';
import CmtSidebar from '../../../../../@coremat/CmtLayouts/Vertical/Sidebar';
import SidebarHeader from '../../partials/SidebarHeader';
import SideBar from '../../partials/SideBar';
import CmtContent from '../../../../../@coremat/CmtLayouts/Vertical/Content';
import ContentLoader from '../../../ContentLoader';
import CmtFooter from '../../../../../@coremat/CmtLayouts/Vertical/Footer';
import Footer from '../../partials/Footer';
import defaultContext from '../../../contextProvider/AppContextProvider/defaultContext';

const layoutOptions = {
  headerType: defaultContext.headerType,
  footerType: 'fixed',
  sidebarType: defaultContext.sidebarType,
  isSidebarFixed: defaultContext.isSidebarFixed,
  isSidebarOpen: false,
  showTourOpt: true,
  showFooterOpt: true,
  miniSidebarWidth: 80,
  layoutStyle: defaultContext.layoutType,
  drawerBreakPoint: defaultContext.drawerBreakPoint,
  sidebarWidth: defaultContext.sidebarWidth,
};

const VerticalDefault = ({ children }) => {
  const router = useRouter()
  return (
    <CmtVerticalLayout
      className="verticalDefaultLayout"
      layoutOptions={layoutOptions}
      header={
        <div>
        {router.route === "/" || router.route.includes("/auth")  ? null :
        <CmtHeader>
          <Header />
        </CmtHeader>
      }
      </div>
      }
      sidebar={
        <CmtSidebar>
          {router.route === "/" || router.route.includes("/auth") ? <div style={{background: "#f4f4f7", height: "100%", width: "100%"}}></div> : <SidebarHeader />}
          {/* <SideBar /> */}
        </CmtSidebar>
      }
      footer={
        <div>
        {router.route === "/" || router.route.includes("/auth")  ? <div></div> :
        <CmtFooter>
          <Footer />
        </CmtFooter>
      }</div>
      }>
      <CmtContent>
        {children}
        <ContentLoader />
      </CmtContent>
    </CmtVerticalLayout>
  );
};

export default VerticalDefault;
