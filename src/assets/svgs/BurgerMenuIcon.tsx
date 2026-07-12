interface svgTypes {
  size: string;
  color: string;
}

export default function BurgerMenuIcon({ size, color }: svgTypes) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 30 30"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      stroke={color}
      strokeWidth="3"
      strokeLinecap="round"
    >
      <line x1="5" y1="7" x2="25" y2="7" />
      <line x1="5" y1="15" x2="25" y2="15" />
      <line x1="5" y1="23" x2="25" y2="23" />
    </svg>
  );
}
