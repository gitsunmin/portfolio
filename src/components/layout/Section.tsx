type Props = React.HTMLAttributes<HTMLDivElement>;

export default (props: Props) => {
  const { children } = props;

  return (
    <section className="h-screen" {...props}>
      {children}
    </section>
  );
};
