import {
  PaperAirplaneIcon,
  HomeIcon,
  LightningBoltIcon,
  SearchIcon,
  UserIcon,
  GlobeIcon,
} from "@heroicons/react/outline";
import Image from "next/image";
import HeaderItem from "./HeaderItem";

function Header() {
  return (
    <header className='flex flex-col sm:flex-row m-5 justify-between items-center h-auto'>
      <div className='flex flex-grow justify-evenly max-w-2xl'>
        <HeaderItem title='HOME' Icon={HomeIcon} />
        <HeaderItem title='TRENDING' Icon={LightningBoltIcon} />
        <HeaderItem title='FLIGHTS' Icon={PaperAirplaneIcon} />
        <HeaderItem title='SEARCH' Icon={SearchIcon} />
        <HeaderItem title='ACCOUNT' Icon={UserIcon} />
      </div>
      <div className='group flex flex-row items-center '>
        <p className='text-2xl tracking-widest font-serif group-hover:cursor-pointer'>
          terra travels
        </p>
        <GlobeIcon className='h-20 w-20 pl-10 group-hover:cursor-pointer' />
      </div>
    </header>
  );
}

export default Header;
