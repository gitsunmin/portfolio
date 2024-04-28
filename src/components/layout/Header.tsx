'use client';
import { ProfileImage } from '../ui/ProfileImage';

type Props = {
  children?: React.ReactNode;
};

export const Header = (props: Props) => {
  const { children } = props;
  return (
    <>
      <div className="h-[70px]" />
      <header className="flex p-[10px] w-full justify-between shadow-slate-700 fixed top-0 backdrop-blur-sm z-10">
        <a
          className="flex items-center gap-[10px]"
          href={process.env.NEXT_PUBLIC_BASE_URL}
        >
          <ProfileImage alt="me" className="w-[50px] h-[50px]"></ProfileImage>
          <span className="text-[#F5F0E6]">Gitsunmin&apos;s Portfolio</span>
        </a>

        <div className="flex items-center">{children}</div>

        <div className="flex items-center px-[20px] py-0">
          <a href="https://gitsunmin.github.io/">Blog</a>
        </div>
      </header>
    </>
  );
};
