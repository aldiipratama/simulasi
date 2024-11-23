import { Link } from "@inertiajs/react";
import { Button } from "./ui/button";
import { Comment, Post, User } from "@/types";
import { Dialog, DialogContent } from "./ui/dialog";
import { X } from "lucide-react";
import { FiHeart, FiMessageSquare, FiMusic, FiSend } from "react-icons/fi";
import { cn } from "@/lib/utils";
import { ReactNode, useState } from "react";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";

const PostCard = ({ children }: { children: ReactNode }) => {
    return <div className="flex flex-col gap-4 p-5 bg-accent">{children}</div>;
};

export const PostHeader = ({
    nameUser,
    userName,
}: {
    nameUser: string;
    userName: string;
}) => {
    return (
        <Button
            variant={"ghost"}
            className="flex items-center gap-2 max-w-max"
            asChild
        >
            <Link href="#">
                <img
                    src="https://placehold.co/50"
                    alt="img-profile"
                    className="rounded-full"
                />
                <div className="flex flex-col gap-0">
                    <span className="text-sm text-gray-500">@{userName}</span>
                    <span className="text-lg hover:underline">{nameUser}</span>
                </div>
            </Link>
        </Button>
    );
};

export const PostContent = ({
    description,
    image,
}: {
    description: string;
    image: string;
}) => {
    const [isImageOpen, setIsImageOpen] = useState(false);

    return (
        <>
            <p className="text-sm">{description}</p>
            <img
                src={image}
                alt="post"
                className="self-center rounded-lg min-w-64 min-h-64 cursor-pointer"
                onClick={() => {
                    setIsImageOpen(true);
                }}
            />
            <Dialog open={isImageOpen} onOpenChange={setIsImageOpen}>
                <DialogContent
                    className="bg-transparent border-none max-w-max max-h-max z-[999]"
                    closeCustom={"yes"}
                >
                    <div className="relative w-full">
                        <Button
                            variant={"secondary"}
                            className="absolute z-10 right-2 top-2"
                            onClick={() => setIsImageOpen(!isImageOpen)}
                        >
                            <X className="w-4 h-4" />
                        </Button>
                        <img
                            src={image}
                            alt="post-lightbox"
                            className="w-full h-screen p-5"
                        />
                    </div>
                </DialogContent>
            </Dialog>
        </>
    );
};

export const PostMusic = () => {
    return (
        <Button
            variant={"link"}
            className="flex items-center justify-start gap-2 text-sm max-w-max"
        >
            <FiMusic /> musik title - artist
        </Button>
    );
};

export const PostAction = ({
    likes,
    comments,
    shares,
}: {
    likes: number;
    comments: number;
    shares: number;
}) => {
    return (
        <div className="flex">
            <div className="flex gap-4">
                <Button
                    variant={"link"}
                    className="flex items-center gap-2"
                    // onClick={() =>
                    //     handleClickPostLike(user.id)
                    // }
                >
                    <FiHeart
                        className={
                            cn()
                            // user.posts.likes > 0 &&
                            // "text-red-500 fill-red-500"
                        }
                    />{" "}
                    {likes} likes
                </Button>
                <Button variant={"link"} className="flex items-center gap-2">
                    <FiMessageSquare /> {comments} comments
                </Button>
                <Button variant={"link"} className="flex items-center gap-2">
                    <FiSend /> {shares} shares
                </Button>
            </div>
        </div>
    );
};

export const PostComment = ({ children }: { children: ReactNode }) => {
    return (
        <div className="flex flex-col gap-4 p-5 pb-1 border-y dark:border-white">
            {children}
        </div>
    );
};

export const PostCommentContent = ({
    image,
    nameUser,
    description,
    likes,
}: {
    image: string;
    nameUser: string;
    description: string;
    likes: number;
}) => {
    return (
        <>
            <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between">
                    <div className="flex gap-2">
                        <img
                            src={image}
                            alt="img profile"
                            className="rounded-full size-[50px]"
                        />
                        <div className="flex flex-col">
                            <span className="text-xl font-bold">
                                {nameUser}
                            </span>
                            <p className="text-sm">{description}</p>
                            <Button variant={"link"} className="p-0 max-w-max">
                                Reply
                            </Button>
                        </div>
                    </div>
                    <Button variant={"link"}>
                        <FiHeart
                        // className={cn(likes && "text-red-500 fill-red-500")}
                        />{" "}
                        {likes} Likes
                    </Button>
                </div>
            </div>
        </>
    );
};

export const PostCommentInput = () => {
    return (
        <div className="flex items-center gap-2">
            <img
                src="https://placehold.co/50?text=ini foto profile"
                alt="profile foto"
                className="size-[50px] rounded-full self-start"
            />
            <Label className="relative w-full">
                <Textarea
                    placeholder="Write your comment..."
                    className="p-5 pr-12 resize-none min-h-24 bg-background custom-scrollbar"
                />
                <Button
                    variant={"ghost"}
                    size={"icon"}
                    className="absolute -translate-y-1/2 right-2 top-6"
                >
                    <FiSend />
                </Button>
            </Label>
        </div>
    );
};

export default PostCard;
