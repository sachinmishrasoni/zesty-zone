"use client";
import React, { useState, useLayoutEffect, useRef } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface MenuItem {
  label: string;
  href: string;
}

const menuItems: MenuItem[] = [
  { label: "Home", href: "/" },
  { label: "Menu", href: "/menu" },
  { label: "Booking", href: "/booking" },
  { label: "Blogs", href: "/blogs" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const navAnimation = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.4 },
  }),
};

const hoverAnimation = {
  whileHover: { scale: 1.1, rotate: 2, color: "#ca8b04" },
  whileTap: { scale: 0.95 },
};

const NavLinks: React.FC = () => {
  const pathname = usePathname();
  const [indicatorProps, setIndicatorProps] = useState<{ left: number; width: number }>({
    left: 0,
    width: 0,
  });
  const containerRef = useRef<HTMLDivElement | null>(null);

  // Initialize refs
  const linkRefs = useRef<React.RefObject<HTMLDivElement>[]>([]);
  if (linkRefs.current.length !== menuItems.length) {
    // Initialize or update the refs array to match the number of menu items
    linkRefs.current = menuItems.map((_, i) => linkRefs.current[i] || React.createRef());
  }

  const normalizePath = (path: string) => path.replace(/\/$/, "");

  useLayoutEffect(() => {
    const updateIndicator = () => {
      const container = containerRef.current;
      if (!container) return;

      const activeIndex = menuItems.findIndex(
        (item) => normalizePath(item.href) === normalizePath(pathname)
      );

      if (activeIndex !== -1) {
        const activeLinkRef = linkRefs.current[activeIndex];
        if (activeLinkRef && activeLinkRef.current) {
          const activeLink = activeLinkRef.current;
          const rect = activeLink.getBoundingClientRect();
          const containerRect = container.getBoundingClientRect();
          const left = rect.left - containerRect.left;
          const width = rect.width;
          setIndicatorProps({ left, width });
        }
      } else {
        setIndicatorProps({ left: 0, width: 0 });
      }
    };

    updateIndicator();
    window.addEventListener("resize", updateIndicator);
    return () => window.removeEventListener("resize", updateIndicator);
  }, [pathname]);

  return (
    <motion.div
      className="relative hidden md:flex items-center gap-6"
      initial="hidden"
      animate="visible"
      ref={containerRef}
    >
      {/* Sliding indicator */}
      <motion.div
        className="absolute bottom-0 h-1 bg-yellow-600 rounded"
        initial={{ left: indicatorProps.left, width: indicatorProps.width }}
        animate={{ left: indicatorProps.left, width: indicatorProps.width }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      />
      {menuItems.map((item, index) => (
        <motion.div
          key={item.label}
          ref={linkRefs.current[index]}
          custom={index}
          variants={navAnimation}
          {...hoverAnimation}
          className="flex-shrink-0"
        >
          <Link
            href={item.href}
            className={`text-gray-700 font-medium transition-transform duration-300 ${
              pathname === item.href ? "!text-yellow-600" : "hover:!text-yellow-600"
            }`}
          >
            {item.label}
          </Link>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default NavLinks;
