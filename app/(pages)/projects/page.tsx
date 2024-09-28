import Link from "next/link";

export default function Projects() {
    return (
        <main className="bg-p-white z-10 w-full h-full px-16 py-24 absolute">
            <div>Prosjekter</div>
            <Link href={"/"}>Gå til Hjem</Link>
        </main>
    );
}