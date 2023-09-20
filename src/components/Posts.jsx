import { Spinner, Button } from "@nextui-org/react";
import { postsSlice } from "../store/postsSlice";
import { PostList } from "./PostList";

export const Posts = () => {
    const { posts, isLoading } = postsSlice()
    const { setPosts } = postsSlice()

    return (
        <div>
            <h2 className='text-center font-semibold my-3 text-lg'>Posts: {posts.length}</h2>

            <div className="flex justify-center">
                <Button isDisabled={isLoading} onClick={setPosts} className="font-bold" color="secondary" size="md" radius="lg">Set Posts</Button>
            </div>

            {
                (isLoading)
                    ? <div  className="w-6/12 mx-auto text-center my-10"><Spinner /></div>
                    : <PostList posts={posts} />
            }
        </div>
    )
}
