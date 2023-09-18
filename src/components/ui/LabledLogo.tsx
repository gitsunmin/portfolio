import Link from 'next/link';
import Image from 'next/image';

import Logo from '@/app/assets/images/rm-bg-logo.png';

export type NotionPageHeaderProps = React.PropsWithChildren<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>
> & {
  label: string;
};

const LabledLogo = (propsWithChildren: NotionPageHeaderProps) => {
  const { label, children, ...props } = propsWithChildren;
  return (
    <div className="flex items-center flex-row">
      <Link href="/" className="flex items-center">
        <Image
          className="mr-3 h-6 sm:h-9"
          width={40}
          height={40}
          src={Logo}
          alt={label}
        />
        <span className="self-center text-xl font-semibold">{label}</span>
      </Link>
    </div>
  );
};

export default LabledLogo;
