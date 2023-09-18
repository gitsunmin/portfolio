import { name } from '@/lib/config';

import LabledLogo from '@/components/ui/LabledLogo';

export type NotionPageFooterProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLElement>,
  HTMLElement
>;

const NotionPageFooter = (props: NotionPageFooterProps) => {
  return (
    <footer className="shadow m-4 w-full dark:bg-gray-800">
      <div className="mx-auto max-w-5xl p-4 md:flex md:items-center md:justify-between">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2023 gitsunmin
        </span>
      </div>
    </footer>
  );
};

export default NotionPageFooter;
