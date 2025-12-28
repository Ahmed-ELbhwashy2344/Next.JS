"use client";

import Link from "next/link";
import React from "react";

export default function AdminLayout( {children} : { children : React.ReactNode} ) {
  return (
    <div className="container mx-auto p-4">
      Admin Page
      {/* 📌 الجزء الثابت (الروابط) - لن يختفي أبداً */}
      <nav className="mb-6 border-b pb-4">
        <Link
          className="mx-4 font-bold text-xl text-blue-600 hover:text-blue-800"
          href={"/admin/section1"}
        >
          Section 1
        </Link>
        <Link
          className="mx-4 font-bold text-xl text-blue-600 hover:text-blue-800"
          href={"/admin/section2"}
        >
          Section 2
        </Link>
      </nav>
      {/* 🔄 الجزء المتغير - هنا سيتم عرض محتوى page.js */}
      <main>{children}</main>
    </div>
  );
}
