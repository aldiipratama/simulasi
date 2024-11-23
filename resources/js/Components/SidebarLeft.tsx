import { Link } from "@inertiajs/react";
import { Button } from "./ui/button";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const SidebarLeft = () => {
    const [isFollow, setIsFollow] = useState(false);

    return (
        <div className="flex flex-col justify-between col-span-3 max-md:hidden">
            <div className="flex flex-col gap-4">
                <div className="w-full overflow-hidden rounded-lg">
                    <img
                        src="https://placehold.co/300x100?text=ini background profile"
                        alt="image"
                        className="w-full cursor-pointer"
                    />
                    <div className="relative flex flex-col gap-4 px-4 text-center bg-accent">
                        <img
                            src="https://placehold.co/100?text=ini foto profile"
                            alt="img profile"
                            className="absolute -translate-x-1/2 -translate-y-1/2 border rounded-full cursor-pointer inset-x-1/2"
                        />
                        <div className="flex justify-between">
                            <Button
                                variant={"ghost"}
                                className="flex flex-col items-center justify-center py-10 hover:bg-accent-foreground/10"
                                asChild
                            >
                                <Link href="#">
                                    1000 <span>Followers</span>
                                </Link>
                            </Button>
                            <Button
                                variant={"ghost"}
                                className="flex flex-col items-center justify-center py-10 hover:bg-accent-foreground/10"
                                asChild
                            >
                                <Link href="#">
                                    1000 <span>Following</span>
                                </Link>
                            </Button>
                        </div>
                        <Button
                            variant={"ghost"}
                            className="flex flex-col gap-0 -mt-5 bg-transparent"
                        >
                            <span className="text-lg" data-testid="name__user">
                                Aldi Pratama
                            </span>
                            <span
                                className="text-sm text-gray-500"
                                data-testid="user__name"
                            >
                                @alx.dyy
                            </span>
                        </Button>
                        <div
                            className="flex flex-col items-center gap-4"
                            data-testid="user__bio"
                        >
                            <p className="text-sm">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Explicabo dicta illum vero
                                veniam qui sapiente quia quam nisi ipsam.
                            </p>
                            <Button
                                variant={"secondary"}
                                className="mb-4 max-w-max bg-background hover:bg-accent-foreground/10"
                                data-testid="button_to_profile"
                            >
                                My Profile
                            </Button>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-center justify-center gap-4 text-center">
                    <span className="self-start" title="suggestion_friends">
                        People you may know
                    </span>
                    <div className="flex flex-col w-full gap-2">
                        <div className="flex items-center justify-between w-full">
                            <Button
                                variant={"ghost"}
                                className="flex items-center gap-2 p-0 hover:bg-transparent"
                            >
                                <img
                                    src="https://placehold.co/50?text=ini foto profile"
                                    alt="img-profile"
                                    className="rounded-full"
                                />
                                <div className="flex flex-col justify-center text-start">
                                    <span>Name User</span>
                                    <span className="text-sm text-gray-500">
                                        @username
                                    </span>
                                </div>
                            </Button>
                            <Button
                                variant={"link"}
                                onClick={() => setIsFollow(!isFollow)}
                            >
                                {isFollow ? "- Unfollow" : "+ Follow"}
                            </Button>
                        </div>
                    </div>
                    <div className="flex flex-col items-center">
                        <Button
                            variant={"link"}
                            asChild
                            className="text-blue-500 dark:text-yellow-500"
                        >
                            <Link href="#">See more...</Link>
                        </Button>
                        <div className="w-1/2 h-[1px] bg-gray-500"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SidebarLeft;
