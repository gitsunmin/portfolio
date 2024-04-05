type Props = {
  children: React.ReactNode;
};

export default (props: Props) => {
  const { children } = props;

  return (
    <>
      <div
        style={{
          marginTop: '90px',
        }}
      />
      <main>{children}</main>
    </>
  );
};
