"use client";
import type { FC, PropsWithChildren } from "react";
import { useSidebarContext } from "@/context/SidebarContext";
import MainContentFooter from "./MainContentFooter";

interface NavbarSidebarLayoutProps {
    isFooter?: boolean;
}

const MainContent: FC<PropsWithChildren<NavbarSidebarLayoutProps>> = function ({
    children,
    isFooter,
}) {
    const { isOpenOnSmallScreens: isSidebarOpen } = useSidebarContext();

    return (
        <main className={`overflow-y-auto relative w-full h-full bg-gray-50 dark:bg-gray-900 ${isSidebarOpen ? "lg:ml-16" : "lg:ml-64"}`}>
            {children}
            {isFooter && (
                <div className="mx-4 mt-4">
                    <MainContentFooter />
                </div>
            )}
        </main>
    );
};


export default MainContent;