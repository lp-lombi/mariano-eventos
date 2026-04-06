import "./Button.css";

function Button({ children, href = "#contacto" }) {
  return (
    <a href={href} className="button button--primary">
      {children}
    </a>
  );
}

export default Button;
