import Link from "next/link";
import Image from "next/image";
export const HeaderLogo = () => {
  return (
    <Link href="/">
      <div className="items-center hidden lg:flex">
        <Image src="/logo1.svg" alt="Logo" height={28} width={28} />
        <p className="font-semibold text-gray test-2xl ml-1.5">iFin</p>
      </div>
    </Link>
  );
};
