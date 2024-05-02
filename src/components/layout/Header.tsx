'use client';
import { useTheme } from 'next-themes';
import { match } from 'ts-pattern';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const SunnIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-6 h-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
    />
  </svg>
);

const MoonIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-6 h-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
    />
  </svg>
);

type Props = {
  children?: React.ReactNode;
};

export const Header = (props: Props) => {
  const { children } = props;
  const { theme, setTheme } = useTheme();
  return (
    <>
      <div className="h-[70px]" />
      <header className="flex p-[10px] w-full justify-between shadow-slate-700 fixed top-0 backdrop-blur-sm z-10">
        <a
          className="flex items-center gap-[10px]"
          href={process.env.NEXT_PUBLIC_BASE_URL}
        >
          <Avatar>
            <AvatarImage
              src="/assets/me.jpeg"
              alt="Gitsunmin Profile"
              width={`50px`}
            />
            <AvatarFallback>SM</AvatarFallback>
          </Avatar>
          <span className="text-[#F5F0E6]">Gitsunmin&apos;s Portfolio</span>
        </a>

        <div className="flex items-center">{children}</div>

        <div className="flex items-center px-[20px] py-0 gap-[24px]">
          {match(theme)
            .with('dark', () => (
              <button onClick={() => setTheme('light')}>
                <SunnIcon />
              </button>
            ))
            .otherwise(() => (
              <button onClick={() => setTheme('dark')}>
                <MoonIcon />
              </button>
            ))}
          <a href="https://gitsunmin.github.io/">Blog</a>
        </div>
      </header>
    </>
  );
};
