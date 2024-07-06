const Button: React.FC<{ type: "submit"; children: string }> = ({
  type,
  children,
}) => {
  return <button type={type}>{children}</button>;
};
export default Button;
