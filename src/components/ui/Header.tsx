export type HeaderProps = React.PropsWithChildren<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>
>;

const Header = (propsWithChildren: HeaderProps) => {
  const { children, ...props } = propsWithChildren;
  return <header {...props}>{children}</header>;
};

export default Header;
