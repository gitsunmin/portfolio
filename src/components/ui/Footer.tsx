export type FooterProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLElement>,
  HTMLElement
>;

const Footer = (props: FooterProps) => {
  return <footer {...props}>footer</footer>;
};

export default Footer;
