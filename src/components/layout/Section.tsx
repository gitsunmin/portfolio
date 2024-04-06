type Props = React.HTMLAttributes<HTMLDivElement>;

export default (props: Props) => {
  const { children } = props;

  return <section {...props}>{children}</section>;
};
