
import Link from "next/link";
import { ModeToggle } from "@/components/mode-toggle";
import { Search } from "@/components/search";
import { auth } from "@/auth";


export const Navigation = async () => {
  const session = await auth();
  return (
    <nav
      className={
        "w-full hidden lg:flex bg-neutral-100/60  dark:bg-neutral-900/60 backdrop-blur-md border p-4 pr-0 lg:px-8  justify-between items-center sticky top-0 z-[100]"
      }
    >
      <Link
        href={"/"}
        className={
          " text-2xl  font-normal decoration-transparent hover:decoration-white"
        }
      >
        abhi.
      </Link>
      <Search />
      <div className={"hidden lg:flex items-center  lg:gap-12 "}>

        <Link
          href={"/about"}
          className={
            "font-normal hidden lg:block decoration-transparent hover:decoration-white"
          }
        >
          About
        </Link>
        {session && (
          <Link
            href={"/create"}
            className={
              "font-normal hidden lg:block decoration-transparent hover:decoration-white"
            }
          >
            Create
          </Link>
        )}
        <Link
          href={"/contact"}

          className={
            " font-normal hidden lg:block decoration-transparent hover:decoration-white"
          }
        >
          Contact
        </Link>
        <ModeToggle />
      </div>
    </nav>
  );
};
