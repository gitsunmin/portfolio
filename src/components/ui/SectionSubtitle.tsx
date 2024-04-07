type Props = React.PropsWithChildren<{
  className?: string;
}>;

export default (props: Props) => {
  const { children, className } = props;

  return <h1 className={`text-[2em] ${className}`}>{children}</h1>;
};
