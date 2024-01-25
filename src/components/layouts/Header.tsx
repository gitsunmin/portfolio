import Image from 'next/image';

export default function Header() {
  return (
    <header>
      <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <a href="" className="flex items-center">
            <Image
              src="/images/me.jpeg"
              className="mr-3 h-6 sm:h-9 rounded-xl"
              width={36}
              height={36}
              alt="logo"
              priority
            />
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
              Gitsunmin&apos;s Portpolio
            </span>
          </a>
          <div className="flex items-center lg:order-2">
            <a
              href="https://gitsunmin.github.io/"
              className="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
            >
              Blog
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}
