//buttons look cooler like this
interface buttonType {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  children: React.ReactNode;
  className?: string;
  title?: string;
}

export default function Button({ onClick, children, className, title }: buttonType) {
  return (
    <button className={className} onClick={onClick} title={title} type="button">
      {children}
    </button>
  );
}
