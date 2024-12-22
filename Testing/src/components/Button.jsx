import "./Button.css";

export const Button = ({ variant, colorScheme, children }) => {
  return (
    <button className={`btn ${colorScheme || "red"} ${variant || "ghost"}`}>
      {children}
    </button>
  );
};
