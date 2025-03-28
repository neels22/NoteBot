import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import DarkModeToggle from "./DarkmodeToggle";
import LogoutButton from "./LogoutButton";

const Header = () => {
    const user = 1;
  return (
    <header className="relative flex h-24 w-full items-center justify-between bg-popover px-3 sm:px-8">
      <Link href="/" className="flex items-end gap-2">
        <Image
          src="/notebot.webp"
          height={60}
          width={60}
          alt="logo"
          className="rounded-full"
          priority
        />

        <h1 className="flex flex-col pb-1 text-2xl font-semibold leading-6">
          Note <span>Bot</span>
        </h1>
      </Link>
      <div className="flex gap-4">
        {user ? (
          <LogoutButton></LogoutButton>
        ):
            (
                <>
                  <Button asChild>
                        <Link href="/signup" className="invisible sm:visible bg-red-500">Signup</Link>
                    </Button>
                    <Button asChild variant="outline">
                        <Link href="/login">Login</Link>
                    </Button>
                </>
            )

        }  
        <DarkModeToggle/>
      </div>
    </header>
  );
};

export default Header;
