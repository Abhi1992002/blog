"use client";
import { Button } from "@/components/ui/button";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { getAllBlogs } from "@/actions/getAllBlogs";
import toast from "react-hot-toast";
import { BlogsType } from "@/components/home/run-section";
import { useRouter } from "next/navigation";

export const Search = () => {
  const [open, setOpen] = useState(false);
  const [blogData, setBlogData] = useState<BlogsType>([]);
  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

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
    <>
      <Button
        variant={"secondary"}
        onClick={() => setOpen((open) => !open)}
        className={
          "text-sm font-light text-neutral-700 dark:text-neutral-300 gap-8 w-[200px] lg:w-[300px] flex justify-between bg-white dark:bg-black border border-neutral-300 dark:border-neutral-800"
        }
      >
        Search Blog....
        <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
          <span className="text-xs">⌘</span>K
        </kbd>
      </Button>
      <SearchBar open={open} setOpen={setOpen} blogData={blogData} />
    </>
  );
};

const SearchBar = ({
  open,
  setOpen,
  blogData,
}: {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  blogData: BlogsType;
}) => {
  const router = useRouter();
  const handleKeyDown = (href: string) => {
    setOpen(false);
    router.push(`/blogs/${href}`);
  };
  return (
    <CommandDialog open={open} onOpenChange={setOpen}>
      <CommandInput placeholder="Search a blog...." className={"z-[101]"} />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="All Blogs">
          {blogData &&
            blogData.map((v, i) => {
              return (
                <CommandItem
                  key={i}
                  onSelect={() => handleKeyDown(v.href)}
                  className={"line-clamp-1"}
                >
                  {v.title}
                </CommandItem>
              );
            })}
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  );
};
