"use client"
import Link from "next/link";
import {Search} from "@/components/search";
import {ModeToggle} from "@/components/mode-toggle";
import {Button} from "@/components/ui/button";
import {Menu,  X} from "lucide-react";
import {useState} from "react";
import {cn} from "@/lib/utils";

export const SmallNavigation =  () => {
    const [open ,setOpen] = useState(false);
    return (
        <nav
            className={
               cn( "w-full flex flex-col h-fit lg:hidden bg-neutral-100/60 dark:bg-neutral-900/60 backdrop-blur-md border transition-all duration-200 ease-in-out p-4 pr-0 lg:px-8   items-center sticky top-0 z-[100]",
                   open && " items-start h-screen bg-neutral-100 dark:bg-neutral-900"
           ) }
        >
            <div className={"flex justify-between w-full"}>
                <Link
                    href={"/"}
                    onClick={() => {setOpen(false)}}
                    className={
                        " text-2xl font-normal decoration-transparent hover:decoration-white"
                    }
                >
                    abhi.
                </Link>

                {open && <ModeToggle/>}

                <div className={cn("flex items-center  lg:gap-12",open && "hidden")}>
                    <Search />

                </div>


                <Button variant={"link"} onClick={() => setOpen(!open)}>
                    {open ? <X className={"w-5 h-5"}/> : <Menu className={"w-5 h-5"}/>}
                </Button>

            </div>


            {
                open && <div className={"flex flex-col items-center w-full gap-8 pt-8"}>
                    <Link
                        href={"/about"}
                        onClick={() => {setOpen(false)}}
                        className={
                            "font-normal text-2xl decoration-transparent hover:decoration-white"
                        }
                    >
                        About
                    </Link>

                    <Link
                        href={"/contact"}
                        onClick={() => {setOpen(false)}}
                        className={
                            " font-normal text-2xl decoration-transparent hover:decoration-white"
                        }
                    >
                        Contact
                    </Link>

                </div>
            }
        </nav>

    );
};


