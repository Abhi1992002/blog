import Link from "next/link";
import { ModeToggle } from "@/components/mode-toggle";
import { Search } from "@/components/search";
import { auth } from "@/auth";

export const Navigation = async () => {
  const session = await auth();
  return (
    <nav
      className={
        "w-full  bg-neutral-900/60 backdrop-blur-md border p-4 px-8 flex justify-between items-center sticky top-0 z-[100]"
      }
    >
      <Link
        href={"/"}
        className={
          " text-2xl font-normal decoration-transparent hover:decoration-white"
        }
      >
        abhi.
      </Link>
      <div className={"flex items-center  gap-12"}>
        <Search />
        <Link
          href={"/about"}
          className={
            "font-normal decoration-transparent hover:decoration-white"
          }
        >
          About
        </Link>
        {session && (
          <Link
            href={"/create"}
            className={
              "font-normal decoration-transparent hover:decoration-white"
            }
          >
            Create
          </Link>
        )}
        <Link
          href={"/contact"}
          className={
            " font-normal decoration-transparent hover:decoration-white"
          }
        >
          Contact
        </Link>
        <ModeToggle />
      </div>
    </nav>
  );
};
