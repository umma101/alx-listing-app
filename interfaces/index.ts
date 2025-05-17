// CardProps
export interface CardProps {
  title: string;
  description: string;
  imageUrl: string;
}

// ButtonProps
export interface ButtonProps {
  label: string;
  onClick: () => void;
  type?: "button" | "submit" | "reset";
}
