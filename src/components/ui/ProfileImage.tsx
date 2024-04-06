type Props = React.HtmlHTMLAttributes<HTMLImageElement> & {
  width: number;
  height: number;
  alt: string;
};

export default ({ width, height, alt, className }: Props) => {
  return (
    <img
      style={{
        boxShadow: '0 0 10px 0 white',
        isolation: 'isolate',
        width: `${width}px`,
        height: `${height}px`,
      }}
      alt={alt}
      src="./assets/me.jpeg"
      className={`rounded-full ${className}`}
    />
  );
};
