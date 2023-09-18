import { name } from '@/lib/config';

import LabledLogo from '@/components/ui/LabledLogo';

export type NotionPageHeaderProps = React.PropsWithChildren<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>
>;

const NotionPageHeader = (propsWithChildren: NotionPageHeaderProps) => {
  const { children, ...props } = propsWithChildren;
  return (
    <header className="backdrop-blur-md" {...props}>
      <div className="flex items-center flex-row justify-between gap-12 my-0 mx-auto max-w-5xl">
        <div className="flex items-center flex-row">
          <LabledLogo label={name} />
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
