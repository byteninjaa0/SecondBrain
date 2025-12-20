import axios from "axios";
import { Delete } from "./icon/Delete";
import { ShareIcon } from "./icon/ShareIcon";
import YoutubeEmbed from "./youtube";
import { BACKEND_URL } from "./Config";

interface CardProps {
  title: string;
  link: string;
  type: "youtube" | "twitter" | "text";
  id: string;
}

export function Card({ title, link, type, id }: CardProps) {
  async function deleteContent(contentId: string) {
    try {
      await axios.delete(`${BACKEND_URL}api/v1/content`, {
        headers: {
          authorization: localStorage.getItem("token"),
        },
        data: { contentId },
      });
    } catch (err) {
      console.error("Delete failed", err);
    }
  }

  return (
    <div className="group w-80 rounded-xl bg-white border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
      
      {/* Header */}
      <div className="flex justify-between items-start px-4 pt-4">
        <h3 className="font-semibold text-gray-900 text-sm leading-snug">
          {title || "Untitled"}
        </h3>

        <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
          <button className="text-gray-500 hover:text-gray-800">
            <ShareIcon />
          </button>
          <button
            onClick={() => deleteContent(id)}
            className="text-gray-500 hover:text-red-600"
          >
            <Delete />
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="px-4 pb-4 pt-3 text-sm text-gray-700">
        {type === "youtube" && (
          <div className="rounded-lg overflow-hidden">
            <YoutubeEmbed embedId={link} />
          </div>
        )}

        {type === "text" && (
          <div className="whitespace-pre-wrap leading-relaxed">
            {link}
          </div>
        )}

        {type !== "youtube" && type !== "text" && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-blue-600 hover:text-blue-800 underline break-all"
          >
            Open link
            <span className="text-xs">↗</span>
          </a>
        )}
      </div>

      {/* Footer */}
      <div className="px-4 pb-3 text-xs text-gray-400 flex justify-between">
        <span className="capitalize">{type}</span>
        <span>Saved</span>
      </div>
    </div>
  );
}
