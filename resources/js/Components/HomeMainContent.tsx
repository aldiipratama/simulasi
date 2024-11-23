import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";
import { Link } from "@inertiajs/react";
import { lazy, Suspense, useEffect, useState } from "react";
import { usePosts } from "@/store/usePosts";
import { useUsers } from "@/store/useUsers";
import {
    PostAction,
    PostComment,
    PostCommentContent,
    PostCommentInput,
    PostContent,
    PostHeader,
    PostMusic,
} from "./PostCard";
import { useLikes } from "@/store/useLikes";
import { useComments } from "@/store/useComments";
import { useSharePosts } from "@/store/useSharePosts";
import { FiArrowUpCircle } from "react-icons/fi";
import { cn } from "@/lib/utils";
import { animateScroll, Button as Btn } from "react-scroll";

const PostCard = lazy(() => import("./PostCard"));

const HomeMainContent = () => {
    const { posts, fetchPosts } = usePosts();
    const { users, fetchUsers } = useUsers();
    const { likes, fetchLikes, sumPostLikes, sumCommentLike } = useLikes();
    const { comments, fetchComments, sumComments } = useComments();
    const { sharePosts, fetchSharePosts, sumSharePosts } = useSharePosts();
    const [limitPostComments, setLimitPostComments] = useState(3);
    const [showGoToUp, setShowGoToUp] = useState(false);

    useEffect(() => {
        fetchPosts();
        fetchUsers();
        fetchLikes();
        fetchComments();
        fetchSharePosts();

        const handleScroll = () => {
            const offset = window.scrollY;

            offset > 300 ? setShowGoToUp(true) : setShowGoToUp(false);
        };

        window.addEventListener("scroll", handleScroll, { passive: true });

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div className="flex flex-col col-span-6 max-md:col-span-12 gap-4">
            {/* User Posts input */}
            <div className="flex gap-4 px-10 py-5 rounded-lg bg-accent">
                <Button variant={"ghost"} className="p-0 mt-2" asChild>
                    <Link href="#">
                        <img
                            src="https://placehold.co/50?text=ini foto profile"
                            alt="img-profile"
                            className="rounded-full size-[50px] max-w-max"
                        />
                    </Link>
                </Button>

                <Textarea
                    placeholder="What you think?"
                    className="h-20 resize-none bg-background custom-scrollbar"
                />
            </div>

            {/* Posts */}
            <div className="flex flex-col gap-8 pb-5">
                <Suspense fallback={<div>Loading...</div>}>
                    {posts ? (
                        posts.map((post) => (
                            <PostCard>
                                {users &&
                                    users
                                        .filter((user) => user.id === post.id)
                                        .map((user) => (
                                            <PostHeader
                                                key={user.id}
                                                nameUser={`${user.first_name} ${user.last_name}`}
                                                userName={user.username}
                                            />
                                        ))}
                                <PostContent
                                    description={post.description}
                                    image={post.image}
                                />
                                <PostMusic />
                                <PostAction
                                    key={post.id}
                                    likes={sumPostLikes(likes, post.id)}
                                    comments={sumComments(comments, post.id)}
                                    shares={sumSharePosts(sharePosts, post.id)}
                                />
                                <PostComment>
                                    {comments
                                        .filter(
                                            (comment) =>
                                                comment.post_id === post.id
                                        )
                                        .slice(0, limitPostComments)
                                        .map((comment) =>
                                            users
                                                .filter(
                                                    (user) =>
                                                        user.id ===
                                                        comment.user_id
                                                )
                                                .map((user) => (
                                                    <PostCommentContent
                                                        key={comment.id}
                                                        image={
                                                            user.profile_picture
                                                        }
                                                        nameUser={`${user.first_name} ${user.last_name}`}
                                                        description={
                                                            comment.description
                                                        }
                                                        likes={sumCommentLike(
                                                            likes,
                                                            comment.id
                                                        )}
                                                    />
                                                ))
                                        )}
                                    {limitPostComments > 0 && (
                                        <Button
                                            variant={"link"}
                                            onClick={() =>
                                                setLimitPostComments(
                                                    limitPostComments === 3
                                                        ? sumComments(
                                                              comments,
                                                              post.id
                                                          )
                                                        : 3
                                                )
                                            }
                                        >
                                            {limitPostComments === 3
                                                ? "See more..."
                                                : "hide"}
                                        </Button>
                                    )}
                                </PostComment>
                                <PostCommentInput />
                            </PostCard>
                        ))
                    ) : (
                        <p>postingan belum tersedia</p>
                    )}
                </Suspense>
            </div>

            {showGoToUp && (
                <Btn
                    to="top"
                    smooth={true}
                    spy={true}
                    onClick={animateScroll.scrollToTop}
                    className={cn(
                        "rounded-full right-5 transition-all ease-in-out",
                        showGoToUp ? "bottom-5 fixed" : "-bottom-full relative"
                    )}
                >
                    <FiArrowUpCircle className="!w-10 !h-10" />
                </Btn>
            )}
        </div>
    );
};

export default HomeMainContent;
