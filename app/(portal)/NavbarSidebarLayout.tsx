import type { FC, PropsWithChildren } from "react";
import { SidebarProvider, useSidebarContext } from "@/context/SidebarContext";

import FlowbiteWrapper from "../../components/flowbite-wrapper";
import RocketNavbar from "./components/navbar";
import RocketSidebar from "./components/sidebar";
import MainContent from "./MainContent";

interface NavbarSidebarLayoutProps {
    isFooter?: boolean;
}

const NavbarSidebarLayout: FC<PropsWithChildren<NavbarSidebarLayoutProps>> =
    function ({ children, isFooter = true }) {
        return (
            <FlowbiteWrapper>
                <SidebarProvider>
                    <RocketNavbar />
                    <div className="flex items-start pt-16">
                        <RocketSidebar />
                        <MainContent isFooter={isFooter}>
                            {children}
                        </MainContent>
                    </div>
                </SidebarProvider>
            </FlowbiteWrapper>
        );
    };

export default NavbarSidebarLayout;