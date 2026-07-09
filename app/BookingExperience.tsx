"use client";

import Image from "next/image";
import { useEffect, useId, useState } from "react";

const BOOKING_URL = "#booking-platform";

const disclaimerSections = [
  {
    title: "Disclaimer",
    body: [
      "Even though it is most unlikely that we will cancel the event, we reserve the right to do so if this becomes unavoidable for reasons beyond our control. If the event can be rescheduled, we will offer you an alternative date, or if you prefer, a full refund of any sum which has been pre-paid.",
      "Please be ready to enter a valid email address for each person in your party (if booking more than 1 ticket), so that we may send each person their ticket and further instructions. Tickets are delivered by email.",
    ],
  },
  {
    title: "1. Disclaimer",
    body: [
      "1.1 Participating as a member of the audience for the production is a physically challenging interactive experience and for your own safety you should be in good health, free of any medical conditions which could be aggravated by the journey, and be able to walk and stand for periods of time unaided.",
      "1.2 The production takes place in an industrial building (the \"Venue\"). As part of the audience experience, you will be required to walk around the Venue in low light and occasionally in darkness, also occasionally with bright lights. The production may therefore be unsuitable for persons who suffer from any fear of darkness or claustrophobia. Whilst Waldorf Project have taken reasonable precautions to make the Venue safe and secure, it is your responsibility to take care of yourself whilst walking around the Venue.",
    ],
  },
  {
    title: "2. Limitation of Liability",
    body: [
      "2.1 Waldorf project does not accept any responsibility for any personal property.",
      "2.2 Nothing in these Conditions is meant to restrict or exclude Waldorf project's liability for personal injury or death caused by Waldorf project's negligence or for any other liability that cannot be excluded or restricted under English law.",
      "2.3 Subject to the above clauses, to the maximum extent permitted by law, Waldorf project excludes any liability for loss, injury or damage to persons/property in or around the Venue.",
      "2.4 Waldorf project shall not be liable to you, whether in contract, tort (including negligence), for breach of statutory duty, or otherwise in any case for any loss of goodwill, loss of profits or any indirect or consequential loss or damage whatsoever arising out of the performance, purported performance or breach of these Conditions.",
      "2.5 Subject to the above clauses Waldorf project's maximum liability to you for losses, damages, liabilities, expenses, costs or actions, whether in contract, tort (including negligence), for breach of statutory duty, or otherwise arising out of the performance, purported performance or breach of these Conditions shall be limited to refunding the sale price of the ticket(s) purchased by you for the production.",
    ],
  },
];

export default function BookingExperience() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasConfirmed, setHasConfirmed] = useState(false);
  const titleId = useId();
  const descriptionId = useId();

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [isOpen]);

  const openBooking = () => {
    setHasConfirmed(false);
    setIsOpen(true);
  };

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

        <button
          type="button"
          onClick={openBooking}
          className="book-button display-type hidden min-h-14 min-w-32 cursor-pointer items-center justify-center bg-white/16 px-6 py-3 text-center uppercase text-white backdrop-blur-[1px] transition duration-200 hover:bg-white/24 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white sm:flex sm:min-h-16 sm:min-w-52 sm:px-10"
          aria-label="Book now"
        >
          <span className="block text-[clamp(1.15rem,2.1vw,2.1rem)] leading-none">
            Book Now
          </span>
        </button>
      </header>

      <section className="relative z-10 flex min-h-0 flex-1 flex-col items-start justify-end gap-4 px-6 pb-6 sm:px-10 sm:pb-8 lg:px-12">
        <h1 className="display-type max-w-full text-balance text-[clamp(2.25rem,7.25vw,7.6rem)] uppercase leading-[0.86] text-white drop-shadow-[0_2px_22px_rgba(0,0,0,0.75)]">
          Chapter Five/Kaihoygo
        </h1>

        <button
          type="button"
          onClick={openBooking}
          className="book-button display-type flex min-h-12 min-w-28 cursor-pointer items-center justify-center bg-white/16 px-6 py-2.5 text-center uppercase text-white backdrop-blur-[1px] transition duration-200 hover:bg-white/24 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white sm:hidden"
          aria-label="Book now"
        >
          <span className="block text-[clamp(1rem,4vw,1.15rem)] leading-none">
            Book Now
          </span>
        </button>
      </section>

      {isOpen ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4 py-5 backdrop-blur-[2px] sm:px-6"
          role="dialog"
          aria-modal="true"
          aria-labelledby={titleId}
          aria-describedby={descriptionId}
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              setIsOpen(false);
            }
          }}
        >
          <div className="book-modal flex max-h-[min(86dvh,760px)] w-full max-w-3xl flex-col overflow-hidden border border-white/18 bg-black/82 text-white shadow-[0_24px_90px_rgb(0_0_0/0.72)] backdrop-blur-md">
            <div className="flex shrink-0 items-start justify-between gap-5 border-b border-white/12 px-5 py-4 sm:px-7 sm:py-5">
              <div>
                <p className="display-type text-sm uppercase tracking-normal text-white/55 sm:text-base">
                  Before booking
                </p>
                <h2
                  id={titleId}
                  className="display-type mt-1 text-[clamp(2rem,5vw,4.1rem)] uppercase leading-[0.9]"
                >
                  Disclaimer
                </h2>
              </div>

              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="flex size-10 shrink-0 cursor-pointer items-center justify-center border border-white/15 bg-white/8 text-2xl leading-none text-white/80 transition hover:bg-white/16 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
                aria-label="Close booking disclaimer"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>

            <div
              id={descriptionId}
              className="min-h-0 flex-1 overflow-y-auto px-5 py-5 text-[0.95rem] leading-7 text-white/82 sm:px-7 sm:py-6 sm:text-base"
            >
              {disclaimerSections.map((section) => (
                <section key={section.title} className="mb-7 last:mb-0">
                  <h3 className="display-type mb-3 text-2xl uppercase leading-none text-white sm:text-3xl">
                    {section.title}
                  </h3>
                  <div className="space-y-4">
                    {section.body.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                </section>
              ))}
            </div>

            <div className="shrink-0 border-t border-white/12 bg-black/72 px-5 py-4 sm:px-7 sm:py-5">
              <label className="flex cursor-pointer items-start gap-3 text-sm leading-6 text-white/82 sm:text-base">
                <input
                  type="checkbox"
                  checked={hasConfirmed}
                  onChange={(event) => setHasConfirmed(event.target.checked)}
                  className="mt-1 size-4 shrink-0 accent-white"
                />
                <span>
                  I confirm that I have read and accept the information above.
                </span>
              </label>

              <a
                href={hasConfirmed ? BOOKING_URL : undefined}
                aria-disabled={!hasConfirmed}
                onClick={(event) => {
                  if (!hasConfirmed) {
                    event.preventDefault();
                  }
                }}
                className={`book-button display-type mt-4 flex min-h-12 w-full items-center justify-center px-6 py-3 text-center uppercase text-white transition duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white sm:min-h-14 ${
                  hasConfirmed
                    ? "bg-white/18 hover:bg-white/28"
                    : "pointer-events-none bg-white/7 text-white/35"
                }`}
              >
                <span className="block text-[clamp(1rem,3.5vw,1.55rem)] leading-none">
                  Book Now
                </span>
              </a>
            </div>
          </div>
        </div>
      ) : null}
    </main>
  );
}
