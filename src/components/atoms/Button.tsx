//buttons look cooler like this
interface buttonType {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  children: React.ReactNode;
  className?: string;
  title?: string;
  type?: "button" | "submit" | "reset"; // Añadir la propiedad type
}

export default function Button({ onClick, children, className, title, type = "button" }: buttonType) {
  return (
    <button className={`focus:outline-none  ${className}`} onClick={onClick} title={title} type={type}>
      {children}
    </button>
  );
}
