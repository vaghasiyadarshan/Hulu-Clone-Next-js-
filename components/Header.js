import { HomeIcon,
  BadgeCheckIcon,
  CollectionIcon,
  LightningBoltIcon,
  SearchIcon,
  UserIcon,
 } from '@heroicons/react/outline'; 
import Image from "next/image"
import HeaderItem from './HeaderItem';
function Header() {
  return <header className='flex flex-col sm:flex-row m-5 justify-between items-center
  h-auto'>
<div className="flex mt-1  flex-grow justify-evenly max-w-2xl">
  <HeaderItem tital="HOME" Icon={HomeIcon} />
  <HeaderItem tital="TREDING" Icon={LightningBoltIcon} />
  <HeaderItem tital="VERIFIED" Icon={BadgeCheckIcon} />
  <HeaderItem tital="COllECTION" Icon={CollectionIcon} />
  <HeaderItem tital="Search" Icon={SearchIcon} />
  <HeaderItem tital="Account" Icon={UserIcon} />
</div>
        <Image
        className='object-contain ' 
        src="https://cutewallpaper.org/24/hulu-logo-png/hulu-whitelist.png"
        width={200}
        height={100}
        />
        



  </header>
}

export default Header

