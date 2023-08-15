"use client";

import { sidebarLinks } from "../../constants";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

function BottomBar() {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <section className="bottombar">
      <div className="bottombar_container">
        {sidebarLinks.map((link) => {
          const isActive =
            (pathname.includes(link.route) && link.route.length > 1) ||
            pathname === link.route;
          return (
            <Link
              href={link.route}
              key={link.label}
              className={`bottombar_link ${
                isActive && "bg-primary-500 rounded-full"
              }`}
            >
              <Image
                src={link.imgURL}
                alt={link.label}
                width={24}
                height={24}
              />
              <p className="text-light-1 max-sm:hidden">{link.label}</p>
            </Link>
          );
        })}
      </div>
    </section>
  );
}

export default BottomBar;
