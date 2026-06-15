import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={100}
          height={20}
          priority
        />
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="w-full text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            Biomedical Computation Platform
          </h1>
          <p className="max-w-md text-center text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            An open, online, interactive scientific computing platform for learning and applying computational methods used in Biomedical Scineces.

          </p>
        </div>
      </main>
    </div>
  );
}
