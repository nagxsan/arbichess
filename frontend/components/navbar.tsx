"use client";

import { ThemeToggle } from "./theme-toggle";

export function Navbar() {
  return (
    <div className="flex flex-row justify-between px-12 py-8">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        ArbiChess
      </h1>
      <ThemeToggle />
    </div>
  );
}
