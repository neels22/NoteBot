"use client";
import React, { useState } from "react";
import { Button } from "./ui/button";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { LogoutAction } from "@/action/users";

const LogoutButton = () => {
  const router = useRouter();

  const [loading, setloading] = useState(false);

  const handlelogout = async () => {
    setloading(true);

    const errormessage  = await LogoutAction()

    if (!errormessage) {
      toast.success("Logout successful");
      router.push("/");
    } else {
      toast.error("this is the error " + errormessage);
    }

    setloading(false);
  };

  return (
    <Button
      className="w-24"
      variant="outline"
      onClick={handlelogout}
      disabled={loading}
    >
      {loading ? <Loader2 className="animate-spin"></Loader2> : "Logout"}
    </Button>
  );
};

export default LogoutButton;
