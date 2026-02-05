import { Card } from "./Card";
import { Sidebar, FilterType } from "./Sidebar";
import { Button } from "./Button";
import { CreateContentModal } from "./CreateContentModal";
import { useState } from "react";
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
    <div>
      <Sidebar
        activeFilter={activeFilter}
        setActiveFilter={setActiveFilter}
      />

      <div className="p-2 ml-72 min-h-screen bg-gray-100">
        <CreateContentModal
          onClose={() => setModalOpen(false)}
          open={modalOpen}
        />

        <div className="flex justify-between items-center mb-4">
          <div>hello, {localStorage.getItem("username")}</div>

          <div className="flex gap-2">
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

        <div className="flex gap-3 flex-wrap">
          {filteredContent.map(({ type, link, _id,title }) => (
            <Card id={_id} title={title} link={link} type={type} />
          ))}
        </div>
      </div>
    </div>
  );
}
