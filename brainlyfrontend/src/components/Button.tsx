interface ButtonInterface {
  type: "primary" | "secondary";
  text: string;
  size: "sm" | "md" | "lg";
  starticon?: React.ReactNode;
  onclick?: () => void;
}

type ButtonSizeMap = {
  sm: string;
  md: string;
  lg: string;
};

const ButtonStyle = {
  primary:
    "bg-purple-600 text-white hover:bg-purple-900",
  secondary:
    "bg-white/1 text-grey border border-white/120 hover:bg-white/20",
};

const ButtonSize: ButtonSizeMap = {
  sm: "text-sm px-3 py-1.5",
  md: "text-base px-5 py-2.5",
  lg: "text-lg px-6 py-3",
};

const defaultStyle =
  "rounded-xl flex items-center justify-center gap-2 font-medium transition-all duration-200 active:scale-[0.97]";

export function Button({
  type,
  text,
  size,
  starticon,
  onclick,
}: ButtonInterface) {
  return (
    <button
      onClick={onclick}
      className={`${ButtonStyle[type]} ${ButtonSize[size]} ${defaultStyle}`}
    >
      {starticon && (
        <span className="flex items-center justify-center">{starticon}</span>
      )}
      <span>{text}</span>
    </button>
  );
}
