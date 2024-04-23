'use client';
type Props = React.PropsWithChildren<{
  ref: React.RefObject<HTMLDivElement>;
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
