import React, { useState } from "react";
import { Card } from "./Card";
import { Sidebar, FilterType } from "./Sidebar";
import { Button } from "./Button";
import { CreateContentModal } from "./CreateContentModal";
import { PlusIcon } from "./icon/PlusIcon";
import { ShareIcon } from "./icon/ShareIcon";
import { UseContent } from "./useContent";
import { useNavigate } from "react-router-dom";

export function Dashboard() {
  const [modalOpen, setModalOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState<FilterType>("all");

  const content = UseContent();
  const navigate = useNavigate();

  function logout() {
    navigate("/signin");
    localStorage.removeItem("username");
    localStorage.removeItem("token");
  }

  const filteredContent = content.filter(({ type }) => {
    if (activeFilter === "all") return true;
    return type === activeFilter;
  });

  return (
    <div className="min-h-screen bg-gray-100 lg:pl-72">
      <Sidebar
        activeFilter={activeFilter}
        setActiveFilter={setActiveFilter}
      />

      <div className="p-4">
        <CreateContentModal
          onClose={() => setModalOpen(false)}
          open={modalOpen}
        />

        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between mb-4">
          <div className="text-lg font-medium">
            hello, {localStorage.getItem("username")}
          </div>

          <div className="flex flex-wrap gap-2 justify-start sm:justify-end">
            <Button
              onclick={() => setModalOpen(true)}
              type="primary"
              text="add content"
              size="sm"
              starticon={<PlusIcon />}
            />
            <Button
              onclick={logout}
              type="secondary"
              text="logout"
              size="sm"
              starticon={<ShareIcon />}
            />
          </div>
        </div>

        <div className="flex flex-wrap gap-3 justify-center sm:justify-start">
          {filteredContent.map(({ type, link, _id, title }) => (
            <Card
              key={_id}
              id={_id}
              title={title}
              link={link}
              type={type}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
