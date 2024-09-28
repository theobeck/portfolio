import Link from "next/link";

export default function About() {
    return (
        <main className="bg-p-white z-10 w-full h-full px-16 py-24 absolute">
            <div>Om meg</div>
            <Link href={"/"}>Gå til Hjem</Link>
        </main>
    );
}