import { Card, CardHeader, CardBody, Divider, Image } from "@nextui-org/react";

export const PostList = ({ posts }) => {
    return (
        <div className="flex gap-3 flex-wrap justify-center my-5">
            {
                posts.map(post => {
                    if(post.title.length > 30) {
                        post.title = post.title.substring(0, 30) + "...";
                    } 
                    
                    return (
                        <Card key={post.id} className="max-w-[400px]">
                            <CardHeader className="flex gap-3">
                                <Image
                                    alt="nextui logo"
                                    height={40}
                                    radius="sm"
                                    src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
                                    width={40}
                                />
                                <div className="flex flex-col">
                                    <p className="text-md">{post.title}</p>
                                </div>
                            </CardHeader>
                            <Divider />
                            <CardBody>
                                <p>{post.body}.</p>
                            </CardBody>
                        </Card>
                    )
                })}
        </div>
    )
}
