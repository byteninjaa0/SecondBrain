export function ContentTypeBadge({ type }: { type: string }) {
  if (!type) return null;

  const styles: any = {
    youtube: "bg-red-100 text-red-700",
    twitter: "bg-blue-100 text-blue-700",
    text: "bg-gray-100 text-gray-700",
  };

  const labels: any = {
    youtube: "YouTube",
    twitter: "X / Twitter",
    text: "Note",
  };

  return (
    <span
      className={`inline-block px-3 py-1 text-sm rounded-full ${styles[type]}`}
    >
      {labels[type]}
    </span>
  );
}
