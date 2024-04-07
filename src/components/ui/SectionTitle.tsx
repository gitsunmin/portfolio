type Props = React.PropsWithChildren<{
  className?: string;
}>;

export default (props: Props) => {
  const { children, className } = props;

  return <h1 className={`text-[3em] ${className}`}>{children}</h1>;
};
