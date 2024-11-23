import Navbar from "@/Components/Navbar";
import { ReactNode } from "react";

const HomeLayout = ({ children }: { children: ReactNode }) => {
    return (
        <>
            <Navbar />
            <div className="container max-md:px-5">
                <main className="grid grid-cols-12 gap-4 mt-5">{children}</main>
            </div>
        </>
    );
};

export default HomeLayout;
