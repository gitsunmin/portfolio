import ProfileImage from '../ui/ProfileImage';

type Props = {
  children?: React.ReactNode;
};

export default (props: Props) => {
  const { children } = props;
  return (
    <header className="flex p-[10px] w-full justify-between shadow-slate-700 fixed top-0 backdrop-blur-sm z-10">
      <a
        className="flex items-center gap-[10px]"
        href="https://gitsunmin.github.io/portfolio"
      >
        <ProfileImage
          width={50}
          height={50}
          alt="me"
          className=""
        ></ProfileImage>
        <span className="text-[#F5F0E6]">Gitsunmin's Portfolio</span>
      </a>

      <div className="flex items-center">{children}</div>

      <div className="flex items-center px-[20px] py-0">
        <a href="https://gitsunmin.github.io/">Blog</a>
      </div>
    </header>
  );
};
