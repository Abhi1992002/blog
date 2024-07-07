"use client";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Post, Tag } from "@prisma/client";
import { Blog } from "@/components/home/blog";
import { getAllBlogs } from "@/actions/getAllBlogs";
import toast from "react-hot-toast";
import {Roadmap} from "@/components/home/roadmap";

type FilterType = Tag | "all";
export type BlogsType = Post[] | undefined;
export const RunSection = () => {
  const [filter, setFilter] = useState<FilterType>("all");
  const [blogData, setBlogData] = useState<BlogsType>([]);

  useEffect(() => {
    getAllBlogs()
      .then((data) => {
        setBlogData(data.blogs);
      })
      .catch(() => {
        toast.error("please refresh the page");
      });
  }, []);

  return (
    <div
      className={
        "w-[96%] pb-[80px] border border-neutral-200 dark:border-neutral-900 bg-neutral-100 dark:bg-neutral-900 mx-auto z-[52] relative rounded-[30px]   dark:drop-shadow-[0_0_200px_black]"
      }
    >
      <Filter filter={filter} setFilter={setFilter} />
      <Blogs blogData={blogData} />
      {/*<Roadmap  />*/}
    </div>
  );
};

const Blogs = ({ blogData }: { blogData: BlogsType }) => {
  return (
    <div
      className={
        "grid sm:grid-cols-1 md:grid-cols-2  xl:grid-cols-3 px-4 sm:pl-10 md:pl-20 sm:pr-10 md:pr-20  flex-wrap gap-6 w-[100%] max-w-[1400px] xl:mx-auto"
      }
    >
      {blogData &&
        blogData.map((v, i) => {
          return <Blog blog={v} key={i} />;
        })}
    </div>
  );
};

const Filter = ({
  filter,
  setFilter,
}: {
  filter: FilterType;
  setFilter: Dispatch<SetStateAction<FilterType>>;
}) => {
  return (
    <div
      className={
        "w-[100%] max-w-[1400px] xl:mx-auto h-[150px] flex flex-wrap items-center pl-10 md:pl-20 "
      }
    >
      <Button
        variant={filter == "all" ? "primary" : "ghost"}
        className={"rounded-[20px] text-[16px] font-normal "}
        onClick={() => setFilter("all")}
      >
        All
      </Button>

      <Button
        variant={filter == Tag.CODE ? "primary" : "ghost"}
        className={"rounded-[20px] text-[16px] font-normal"}
        onClick={() => setFilter(Tag.CODE)}
      >
        Code
      </Button>
      <Button
        variant={filter == Tag.PROJECT ? "primary" : "ghost"}
        className={"rounded-[20px] text-[16px] font-normal"}
        onClick={() => setFilter(Tag.PROJECT)}
      >
        Project
      </Button>
      <Button
        variant={filter == Tag.TOOLS ? "primary" : "ghost"}
        className={"rounded-[20px] text-[16px] font-normal"}
        onClick={() => setFilter(Tag.TOOLS)}
      >
        Tools
      </Button>
      <Button
        variant={filter == Tag.THOUGHTS ? "primary" : "ghost"}
        className={"rounded-[20px] text-[16px] font-normal"}
        onClick={() => setFilter(Tag.THOUGHTS)}
      >
        Thoughts
      </Button>
    </div>
  );
};
