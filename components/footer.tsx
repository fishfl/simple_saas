"use client";

import { Logo } from "./logo";
import Link from "next/link";

const footerLinks = [
  {
    title: "Product",
    links: [
      { label: "Features", href: "/#features" },
      { label: "Pricing", href: "/#pricing" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy", href: "/privacy" },
      { label: "Terms", href: "/terms" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t">
      <div className="container px-4 py-8 md:py-12">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-6">
          <div className="col-span-full lg:col-span-2">
            <Logo />
            <p className="mt-4 text-sm text-muted-foreground">
              Starter kit for your next project. Built with Next.js and
              Creem.io.
            </p>
          </div>
          <div className="col-span-2 grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-4">
            {footerLinks.map((group) => (
              <div key={group.title} className="flex flex-col gap-3">
                <h3 className="text-sm font-medium">{group.title}</h3>
                <nav className="flex flex-col gap-2">
                  {group.links.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-primary"
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
