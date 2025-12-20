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
  const base =
    "flex justify-start p-2 mr-3 gap-2 items-center cursor-pointer rounded-xl transition";

  const active =
    "bg-gray-100 text-black font-medium";

  return (
    <div className="h-screen bg-white left-0 top-0 fixed w-72 border-r">
      <h1 className="px-4 py-4 text-xl font-medium">Second Brain</h1>

      <div className="flex flex-col gap-2 mt-6 ml-4 text-gray-600">
        {/* HOME */}
        <div
          onClick={() => setActiveFilter("all")}
          className={`${base} ${
            activeFilter === "all" ? active : "hover:bg-gray-100"
          }`}
        >
          <Linkicon /> Home
        </div>

        {/* TWEETS */}
        <div
          onClick={() => setActiveFilter("twitter")}
          className={`${base} ${
            activeFilter === "twitter" ? active : "hover:bg-gray-100"
          }`}
        >
          <Brain /> Tweets
        </div>

        {/* VIDEOS */}
        <div
          onClick={() => setActiveFilter("youtube")}
          className={`${base} ${
            activeFilter === "youtube" ? active : "hover:bg-gray-100"
          }`}
        >
          <Video /> Videos
        </div>

        {/* NOTES */}
        <div
          onClick={() => setActiveFilter("text")}
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
