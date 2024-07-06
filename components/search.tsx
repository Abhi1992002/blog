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

export const Search = () => {
  const [open, setOpen] = useState(false);

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

  return (
    <>
      <Button
        variant={"secondary"}
        onClick={() => setOpen((open) => !open)}
        className={
          "text-sm font-light text-neutral-300 w-[300px] flex justify-between bg-black border border-neutral-800"
        }
      >
        Search Blog....
        <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
          <span className="text-xs">⌘</span>K
        </kbd>
      </Button>
      <SearchBar open={open} setOpen={setOpen} />
    </>
  );
};

const SearchBar = ({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <CommandDialog open={open} onOpenChange={setOpen}>
      <CommandInput placeholder="Search a blog...." className={"z-[101]"} />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="All Blogs">
          <CommandItem>Blog 1</CommandItem>
          <CommandItem>Blog 2</CommandItem>
          <CommandItem>Blog 3</CommandItem>
          <CommandItem>Blog 4</CommandItem>
          <CommandItem>Blog 5</CommandItem>
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  );
};
