import { NavLink } from "react-router-dom";

interface NavButtonTypes {
  children: React.ReactNode;
  className?: string;
  activeClass?: string;
  to: string;
}

export default function NavButton({ children, className, activeClass, to }: NavButtonTypes) {
  return (
    <NavLink className={({ isActive }) => `${className}  ${isActive ? activeClass : ""}`} to={to}>
      {children}
    </NavLink>
  );
}
