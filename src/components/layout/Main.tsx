'use client';
type Props = React.PropsWithChildren<{
  height: string;
}>;

export const Main = (props: Props) => {
  const { children, height } = props;

  return (
    <>
      <main
        className=""
        style={{
          height,
        }}
      >
        {children}
      </main>
    </>
  );
};
