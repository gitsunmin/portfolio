type Props = React.HtmlHTMLAttributes<HTMLImageElement> & {
  alt: string;
};

export default ({ alt, className }: Props) => {
  return (
    <img
      style={{
        boxShadow: '0 0 10px 0 white',
        isolation: 'isolate',
      }}
      alt={alt}
      src="./assets/me.jpeg"
      className={`rounded-full ${className}`}
    />
  );
};
