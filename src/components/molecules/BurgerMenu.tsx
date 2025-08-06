
type animationsType =
  | "Drop"
  | "Left"

interface props {
  isOpen: boolean;
  children: React.ReactNode;
  className?: string;
  animation?: animationsType;
  blockScroll?: boolean;

}

interface props {
  isOpen: boolean;
  children: React.ReactNode;
  className?: string
}
export default function BurguerMenu({ className, isOpen, children, animation, blockScroll}: props) {
  let openingAnimation;
  let closingAnimation;

  switch (animation) {
    case "Drop":
      openingAnimation = `max-h-[1250px]`;
      closingAnimation = "max-h-0";
      break;
    case "Left":
      openingAnimation = "max-w-[1200px]";
      closingAnimation = "max-w-[0px]";
      break;
    default:
      openingAnimation = "max-h-[1250px]";
      closingAnimation = "max-h-0";
  }

  return (
    <div
      className={`
              transition-all duration-700 flex flex-col
             lg:flex-row 
              h-full
             ${className}
            ${isOpen ? `${openingAnimation}` : `${closingAnimation}`}
            ${blockScroll ? "overflow-hidden" : "overflow-auto"}
        `}
    >
      {children}
    </div>
  );
}
