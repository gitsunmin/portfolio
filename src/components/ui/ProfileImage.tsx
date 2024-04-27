import Image from 'next/image';

type Props = React.HtmlHTMLAttributes<HTMLImageElement> & {
  alt: string;
};

export const ProfileImage = ({ alt, className }: Props) => {
  return (
    <Image
      style={{
        boxShadow: '0 0 10px 0 white',
        isolation: 'isolate',
      }}
      width={200}
      height={200}
      alt={alt}
      src={'/assets/me.jpeg'}
      className={`rounded-full ${className}`}
    />
  );
};
