import Image from "next/image";

export default function Home() {
  return (
    <main className="relative isolate flex h-dvh flex-col overflow-hidden bg-black text-white selection:bg-white selection:text-black">
      <Image
          src="/bg.jpg"
        alt="Shadowed figures walking through The Waldorf Project installation"
        fill
        priority
        sizes="100vw"
        className="object-cover object-[50%_47%]"
      />
      <div className="absolute inset-0 bg-black/15" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_51%_45%,transparent_0,rgba(0,0,0,0.07)_36%,rgba(0,0,0,0.55)_100%)]" />
      <div className="absolute inset-x-0 top-0 h-64 bg-gradient-to-b from-black/65 via-black/25 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-80 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
      <div className="film-grain absolute inset-0 opacity-[0.16]" />

      <header className="relative z-10 flex shrink-0 items-start justify-between gap-5 px-6 py-6 sm:px-10 sm:py-9 lg:px-12">
        <Image
          src="/Logo.png"
          alt="The Waldorf Project"
          width={258}
          height={76}
          priority
          className="h-auto w-28 opacity-70 sm:w-52 lg:w-[258px]"
        />

        <a
          href="#book"
          className="book-button display-type hidden min-h-14 min-w-32 items-center justify-center bg-white/16 px-6 py-3 text-center uppercase text-white backdrop-blur-[1px] transition duration-200 hover:bg-white/24 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white sm:flex sm:min-h-16 sm:min-w-52 sm:px-10"
          aria-label="Book now"
        >
          <span className="block text-[clamp(1.15rem,2.1vw,2.1rem)] leading-none">
            Book Now
          </span>
        </a>
      </header>

      <section className="relative z-10 flex min-h-0 flex-1 flex-col items-start justify-end gap-4 px-6 pb-6 sm:px-10 sm:pb-8 lg:px-12">
        <h1 className="display-type max-w-full text-balance uppercase leading-[0.86] text-white drop-shadow-[0_2px_22px_rgba(0,0,0,0.75)] text-[clamp(2.25rem,7.25vw,7.6rem)]">
          Chapter Five/Kaihoygo
        </h1>

        <a
          href="#book"
          className="book-button display-type flex min-h-12 min-w-28 items-center justify-center bg-white/16 px-6 py-2.5 text-center uppercase text-white backdrop-blur-[1px] transition duration-200 hover:bg-white/24 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white sm:hidden"
          aria-label="Book now"
        >
          <span className="block text-[clamp(1rem,4vw,1.15rem)] leading-none">
            Book Now
          </span>
        </a>
      </section>
    </main>
  );
}
