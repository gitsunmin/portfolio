'use client';
type Props = React.PropsWithChildren;

export const IntroSection = (props: Props) => {
  const { children, ...others } = props;
  return (
    <section className={`flex justify-center items-center`} {...others}>
      {children}
    </section>
  );
};
