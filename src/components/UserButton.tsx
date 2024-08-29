"use client";

import { logout } from "@/app/(auth)/actions";
import { useSession } from "@/app/(main)/SessionProvider";
import { cn } from "@/lib/utils";
import { Check, LogOutIcon, Monitor, Moon, Sun, UserIcon } from "lucide-react";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import UserAvatar from "./UserAvatar";
import { useTheme } from "next-themes";
// import { useQueryClient } from "@tanstack/react-query";

interface UserButtonProps {
  className?: string;
}

export default function UserButton({ className }: UserButtonProps) {
  const { user } = useSession();
  const {theme, setTheme} = useTheme();
  // const queryClient = useQueryClient();


  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className={cn("flex-none rounded-full", className)}>
          <UserAvatar avatarUrl={user.avatarUrl} size={40} />
        </button>
      </DropdownMenuTrigger>

      <DropdownMenuContent>
        <DropdownMenuLabel>Logged In as @{user.username}</DropdownMenuLabel>

        <DropdownMenuSeparator />

        <Link href={`/user/${user.username}`}>
          <DropdownMenuItem>
            <UserIcon className="mr-2 size-4" />
            Profile
          </DropdownMenuItem>
        </Link>

        <DropdownMenuSub>
          <DropdownMenuSubTrigger>
            <Monitor className="mr-2 size-4" />
            Theme
          </DropdownMenuSubTrigger>

          <DropdownMenuPortal>
            <DropdownMenuSubContent>

              <DropdownMenuItem onClick={() => setTheme("system")}>
                <Monitor className="mr-2 size-4" />
                System default
                {theme === "system" && <Check className="ms-2 size-4"/>}
              </DropdownMenuItem>

              <DropdownMenuItem onClick={() => setTheme("light")}>
                <Sun className="mr-2 size-4" />
                    Light mode
                    {theme === "light" && <Check className="ms-2 size-4"/>}
              </DropdownMenuItem>

              <DropdownMenuItem onClick={() => setTheme("dark")}>
                <Moon className="mr-2 size-4" />
                dark mode
                {theme === "dark" && <Check className="ms-2 size-4"/>}
              </DropdownMenuItem>

            </DropdownMenuSubContent>
          </DropdownMenuPortal>
        </DropdownMenuSub>

        <DropdownMenuSeparator/>
        <DropdownMenuItem 
          onClick={() => {
            // Clear cache and logout on click
            // queryClient.clear();
            // logout()
          }}>
          <LogOutIcon className="mr-2 size-4"/>
          Logout
        </DropdownMenuItem>
        
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
