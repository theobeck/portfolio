import Link from "next/link";

export default function Navbar() {
  return (
    <>
      <nav className="h-16 w-full z-30 absolute top-0 bg-p-light-blue text-p-dark-blue flex items-center">
        <div className="h-full w-1/2 absolute mx-16 flex items-center justify-between">
            <div className="flex md:gap-12 xs:min-w-fit xs:justify-start xs:gap-8 gap-2 justify-between">
                <Link href={"/"}>Hjem</Link>
                <Link href={"/about"} className="min-w-fit">Om meg</Link>
                <Link href={"/experience"}>Erfaring</Link>
                <Link href={"/projects"}>Prosjekter</Link>
            </div>
        </div>
      </nav>
    </>
  );
}
