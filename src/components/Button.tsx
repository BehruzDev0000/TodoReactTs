function Button({ extraStyle = "", onClick = () => {}, children, type = "button" }: { extraStyle?: string; onClick?: () => void; children: React.ReactNode; type?: "button" | "submit" | "reset" }) {
  return (
    <button
      type={type}
      onClick={onClick || undefined}
      className={`rounded-[100px]  cursor-pointer outline-none ${extraStyle}`}
    >
      {children}
    </button>
  );
}

export default Button;
