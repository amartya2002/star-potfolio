"use client"
import React from "react";
import { promises as fs } from "fs";

export default async function page() {
  const file = await fs.readFile(process.cwd() + "/data/navLinks.json", "utf8");
  const data = JSON.parse(file);

  return (
    <div className="mt-6 flex justify-center">
      <div className="">
        <h1 className="text-xl font-medium">Test Data fetching</h1>
        <div className="text-center">
          {data.map((link) => (
            <p>{link.label}</p>
          ))}
        </div>
      </div>
    </div>
  );
}
