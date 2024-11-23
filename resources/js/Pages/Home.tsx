import HomeMainContent from "@/Components/HomeMainContent";
import SidebarLeft from "@/Components/SidebarLeft";
import SidebarRight from "@/Components/SidebarRight";
import HomeLayout from "@/Layouts/HomeLayout";
import { useUsers } from "@/store/useUsers";
import { PageProps } from "@/types";
import { Head } from "@inertiajs/react";
import { useEffect } from "react";

export default function Home({
    auth,
    canLogin,
    canRegister,
}: PageProps<{ canLogin: boolean; canRegister: boolean }>) {
    const { getAuthUser } = useUsers();

    useEffect(() => {
        getAuthUser(auth.user, canLogin, canRegister);
    }, []);

    return (
        <>
            <Head title="Home" />
            <HomeLayout>
                <SidebarLeft />
                <HomeMainContent />
                <SidebarRight />
            </HomeLayout>
        </>
    );
}
