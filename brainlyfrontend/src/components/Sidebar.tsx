import React, { useState } from "react";
import { Brain } from "./icon/Brain";
import { Video } from "./icon/Video";
import { Hashtag } from "./icon/Hashtag";
import { Linkicon } from "./icon/Linkicon"; // reuse as home icon

export type FilterType = "all" | "youtube" | "twitter" | "text";

export function Sidebar({
  activeFilter,
  setActiveFilter,
}: {
  activeFilter: FilterType;
  setActiveFilter: (f: FilterType) => void;
}) {
  const [isOpen, setIsOpen] = useState(false);

  const base =
    "flex justify-start p-2 mr-3 gap-2 items-center cursor-pointer rounded-xl transition";

  const active =
    "bg-gray-100 text-black font-medium";

  return (
    <div className="bg-white border-b lg:border-r w-full lg:w-72 lg:h-screen lg:fixed lg:left-0 lg:top-0">
      <div className="flex items-center justify-between px-4 py-4 lg:block">
        <h1 className="text-xl font-medium">Second Brain</h1>

        <button
          type="button"
          className="lg:hidden inline-flex flex-col justify-center items-center p-2 rounded-md border border-gray-300 text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label="Toggle navigation"
        >
          <span className="block w-5 h-0.5 bg-gray-700 rounded-sm mb-1" />
          <span className="block w-5 h-0.5 bg-gray-700 rounded-sm mb-1" />
          <span className="block w-5 h-0.5 bg-gray-700 rounded-sm" />
        </button>
      </div>

      <div
        className={`${
          isOpen ? "flex" : "hidden"
        } flex-col gap-2 mt-2 ml-4 text-gray-600 lg:flex lg:mt-6`}
      >
        {/* HOME */}
        <div
          onClick={() => {
            setActiveFilter("all");
            setIsOpen(false);
          }}
          className={`${base} ${
            activeFilter === "all" ? active : "hover:bg-gray-100"
          }`}
        >
          <Linkicon /> Home
        </div>

        {/* TWEETS */}
        <div
          onClick={() => {
            setActiveFilter("twitter");
            setIsOpen(false);
          }}
          className={`${base} ${
            activeFilter === "twitter" ? active : "hover:bg-gray-100"
          }`}
        >
          <Brain /> Tweets
        </div>

        {/* VIDEOS */}
        <div
          onClick={() => {
            setActiveFilter("youtube");
            setIsOpen(false);
          }}
          className={`${base} ${
            activeFilter === "youtube" ? active : "hover:bg-gray-100"
          }`}
        >
          <Video /> Videos
        </div>

        {/* NOTES */}
        <div
          onClick={() => {
            setActiveFilter("text");
            setIsOpen(false);
          }}
          className={`${base} ${
            activeFilter === "text" ? active : "hover:bg-gray-100"
          }`}
        >
          <Hashtag /> Notes
        </div>
      </div>
    </div>
  );
}
