"use client";

import { OrganizationSwitcher, SignedIn, SignOutButton } from "@clerk/nextjs";
import { sidebarLinks } from "../../constants";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

function NavBar() {
  const isUserLoggedIn = true;
  const router = useRouter();
  const pathname = usePathname();

  return (
    <nav className="topbar">
      <Link href="/" className="flex">
        <Image src="/assets/logo.svg" alt="logo" width={60} height={30} />
      </Link>

      <section>
        <div className="flex w-full gap-6 px-6">
          {sidebarLinks.map((link) => {
            const isActive =
              (pathname.includes(link.route) && link.route.length > 1) ||
              pathname === link.route;
            return (
              <Link
                href={link.route}
                key={link.label}
                className={`navbar_link ${
                  isActive && "underline decoration-white underline-offset-8"
                }`}
              >
                <p className="text-light-1 max-lg:hidden">{link.label}</p>
              </Link>
            );
          })}
        </div>
      </section>

      <div className="flex items-center gap-1">
        <div className="block md:hidden">
          <SignedIn>
            <SignOutButton>
              <div className="flex cursor-pointer">
                <Image
                  src="/assets/logout.svg"
                  alt="logout"
                  width={24}
                  height={24}
                />
              </div>
            </SignOutButton>
          </SignedIn>
        </div>

        <OrganizationSwitcher
          appearance={{
            elements: {
              organizationSwitcherTrigger: "py-2 px-4",
            },
          }}
        />
      </div>
    </nav>
  );
}

export default NavBar;
