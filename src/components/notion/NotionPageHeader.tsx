import { name } from '@/lib/config';
import Link from 'next/link';
import Image from 'next/image';

import Logo from '@/app/assets/images/rm-bg-logo.png';

export type NotionPageHeaderProps = React.PropsWithChildren<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>
>;

const NotionPageHeader = (propsWithChildren: NotionPageHeaderProps) => {
  const { children, ...props } = propsWithChildren;
  console.log('props:', props);
  return (
    <header className="backdrop-blur-md" {...props}>
      <div className="flex items-center flex-row justify-between gap-12 my-0 mx-auto max-w-5xl">
        <div className="flex items-center flex-row">
          <Link href="/" className="flex items-center">
            <Image
              className="mr-3 h-6 sm:h-9"
              width={40}
              height={40}
              src={Logo}
              alt={name}
            />
            <span className="self-center text-xl font-semibold">{name}</span>
          </Link>
        </div>
        <div className="flex items-center flex-row gap-2">
          <div>ICON-1</div>
          <div>ICON-2</div>
        </div>
      </div>
    </header>
  );
};

export default NotionPageHeader;
