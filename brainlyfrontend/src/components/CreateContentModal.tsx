import { useState } from "react";
import { Button } from "./Button";
import { CloseIcon } from "./icon/CloseIcon";
import { Input } from "./Input";
import axios from "axios";
import { BACKEND_URL } from "./Config";
import { detectContentType } from "./DetectContentType";
import { ContentTypeBadge } from "./ContentTypeBadge";

export function CreateContentModal({ open, onClose }: any) {
  const [link, setLink] = useState("");
  const [title, setTitle] = useState("");
  const detected = detectContentType(link);

  async function adddata() {
    if (!link || !title) return;

    await axios.post(
      `${BACKEND_URL}api/v1/content`,
      {
        title,
        link: detected.link,
        type: detected.type,
      },
      {
        headers: {
          authorization: localStorage.getItem("token"),
        },
      }
    );

    setLink("");
    setTitle("");
    onClose();
  }

  if (!open) return null;

  return (
    <div className="w-screen h-screen fixed top-0 left-0 bg-slate-500 bg-opacity-60 flex justify-center">
      <div className="flex flex-col justify-center">
        <div className="bg-white p-4 rounded w-80">

          <div className="flex justify-end">
            <div onClick={onClose}>
              <CloseIcon />
            </div>
          </div>

          <Input
            placeholder="Paste link or write note"
            value={link}
            onChange={(e: any) => setLink(e.target.value)}
          />

          <div className="mt-2">
            <ContentTypeBadge type={detected.type} />
          </div>

          <Input
            placeholder="Title"
            value={title}
            onChange={(e: any) => setTitle(e.target.value)}
          />

          {detected.type === "youtube" && (
            <p className="text-sm text-gray-500 mt-1">
              YouTube video detected
            </p>
          )}

          {detected.type === "twitter" && (
            <p className="text-sm text-gray-500 mt-1">
              X post detected
            </p>
          )}

          {detected.type === "text" && (
            <p className="text-sm text-gray-500 mt-1">
              Saved as note
            </p>
          )}

          <div className="flex justify-center mt-4">
            <Button
              onclick={adddata}
              type="primary"
              text="Save"
              size="md"
            />
          </div>

        </div>
      </div>
    </div>
  );
}
