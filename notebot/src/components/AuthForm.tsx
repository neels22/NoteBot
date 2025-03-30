"use client";

import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { CardContent, CardFooter } from "./ui/card";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { useTransition } from "react";
import { Button } from "./ui/button";
import { Loader2 } from "lucide-react";
import Link from "next/link";

type props = {
  type: "login" | "signup";
};

const AuthForm = ({ type }: props) => {
  const isLoginform = type === "login";

  const [isPending, startTransition] = useTransition();

  const router = useRouter();

  const handlesubmit = (formData: FormData) => {
    console.log("form submitted");
    toast.success("form submitted");
  };

  return (
    <form action={handlesubmit}>
      <CardContent className="grid w-full gap-4 px-6">
        <div className="flex flex-col space-y-1.5">
          <Label className="" htmlFor="email">
            Email
          </Label>

          <Input
            id="email"
            name="email"
            placeholder="Enter your email"
            required
            disabled={isPending}
          />
        </div>

        <div className="flex flex-col space-y-1.5">
          <Label className="" htmlFor="password">
            Password
          </Label>

          <Input
            id="password"
            name="password"
            placeholder="Enter your password"
            required
            disabled={isPending}
          />
        </div>
      </CardContent>
      <CardFooter className="mt-4 flex flex-col gap-6">
        <Button className="w-full">
          {isPending ? (
            <Loader2 className="animate-spin" />
          ) : isLoginform ? (
            "Login"
          ) : (
            "signup"
          )}
        </Button>
        <p className="text-xs">
          {isLoginform ? "Don't have an account?" : "already have an account?"}{" "}
          <Link
            href={isLoginform ? "/signup" : "/login"}
            className={`text-blue-500 underline ${
              isPending ? "pointer-events-none opacity-50" : ""
            } `}
          >
            {isLoginform ? "Signup" : "Login"}
          </Link>
        </p>
      </CardFooter>
    </form>
  );
};

export default AuthForm;
