type Props = React.PropsWithChildren<{
  ref: React.RefObject<HTMLDivElement>;
  sectionCount: number;
}>;

export default (props: Props) => {
  const { children, sectionCount } = props;

  return (
    <>
      <div className="mt-[90px]" />
      <main
        style={{
          height: `${sectionCount * 100}vh`,
        }}
      >
        {children}
      </main>
    </>
  );
};
