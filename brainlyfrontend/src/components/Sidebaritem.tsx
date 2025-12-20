interface SidebarItemProps {
  icon: React.ReactNode;
  label: string;
  active: boolean;
  onClick: () => void;
}

export function SidebarItem({ icon, label, active, onClick }: SidebarItemProps) {
  return (
    <div
      onClick={onClick}
      className={`flex items-center gap-3 px-4 py-3 rounded-xl cursor-pointer transition
        ${active ? "bg-gray-100 text-black font-medium" : "text-gray-500 hover:bg-gray-50"}
      `}
    >
      <div className="text-lg">{icon}</div>
      <span>{label}</span>
    </div>
  );
}
