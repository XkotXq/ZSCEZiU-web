import { useEffect, useState } from 'react';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious
} from "../shadcn/carousel";
import { getPosts } from './getPostsCarousel'
import Post from "../post";

export default function CarouselWithPosts() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const { posts } = await getPosts();
            setPosts(posts);
        }
        fetchData();
    }, []);

    return (
        <Carousel className="w-full" opts={{
            align: "start",
        }}>
            <CarouselContent>
                {posts.map(post => (
                    <CarouselItem key={post.id} className="flex items-center justify-center basis-1/2"><Post key={post.id} id={post.id} title={post.title} tags={post.tags} date={post.date} img={post.img} desc={post.desc}/></CarouselItem>
                ))}
                {/*<CarouselItem>Po więcej postów zapraszamy [link]</CarouselItem>*/}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    );
}
