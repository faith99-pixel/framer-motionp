interface BtnProps {
  onClick: () => void;
  title: string;
  className?: string;
}

const Button = ({ onClick, title, className = "" }: BtnProps) => {
  return (
    <button
      onClick={onClick}
      className={`flex items-center justify-center bg-[#fa7710] py-4 px-6 w-full h-10 rounded-full font-bold text-sm ${className}`}
    >
      {title}
    </button>
  );
};

export default Button;
