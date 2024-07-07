import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { Post } from "@prisma/client";

type BlogType = Post;
export const Blog = ({ blog }: { blog: BlogType }) => {
  return (
    <Link
      href={`/blogs/${blog.href}`}
      className={
        "decoration-transparent hover:scale-[1.02] transition-all duration-200 ease-in-out"
      }
    >
      <Card
        className={
          "w-[100%] rounded-[20px] pb-[60px] relative col-span-1 row-span-1 h-[100%] bg-neutral-50 dark:bg-neutral-800 m-0 border border-neutral-300 dark:border-neutral-700 "
        }
      >
        <CardHeader className={"p-0"}>
          <Image
            src={blog.img!}
            alt={"image"}
            width={100}
            height={100}
            objectFit="cover" // image will maintain aspect ratio and cover the container
            objectPosition="center"
            className={
              "w-[100%] rounded-[20px] aspect-video rounded-b-none m-0"
            }
          />
        </CardHeader>
        <CardContent className={"pb-0 border-t border-neutral-300 dark:border-none"}>
          <h3 className={"text-[28px] font-normal mt-4 text-white dark:text-neutral-900"}>{blog.title}</h3>
          <p className={" font-light mt-4 line-clamp-2"}>{blog.content}</p>
        </CardContent>
        <CardFooter className={"m-0 space-x-2 absolute bottom-0"}>
          <p className={"font-normal text-neutral-300 text-sm m-0"}>
            {blog.tag}
          </p>
          <span className={"text-neutral-300"}>•</span>
          <p className={"font-normal text-neutral-300 text-sm m-0"}>3 min</p>
        </CardFooter>
      </Card>
    </Link>
  );
};
