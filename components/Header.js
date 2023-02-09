import Link from "next/link";
import HeaderMenu from "./HeaderMenu";
const Header = ({ headerMenu }) => {
  return (
    <div className="relative bg-white border-b-2 border-gray-100">
      <div className="px-4 mx-auto max-w-7xl sm:px-6">
        <div className="flex items-center justify-between py-6 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <Link href="/">
              <>
                <span className="sr-only">Storyblok</span>
                <img
                  className="hidden w-auto h-20 sm:h-10 sm:block"
                  src="https://a.storyblok.com/f/88751/251x53/0d3909fe96/storyblok-primary.png"
                  alt="Storyblok"
                />
                <img
                  className="w-auto h-20 sm:h-10 sm:hidden"
                  src="https://a.storyblok.com/f/88751/92x106/835caf912a/storyblok-logo.png"
                  alt="Storyblok"
                />
              </>
            </Link>
          </div>

          <HeaderMenu headerMenu={headerMenu} />
        </div>
      </div>
    </div>
  );
};

export default Header;
