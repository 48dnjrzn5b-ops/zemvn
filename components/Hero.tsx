import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";

export default function Hero() {
  return (
    <section
      className="
        relative
        min-h-[calc(100vh-76px)]
        overflow-hidden
        bg-[#4A3528]
      "
    >
      <div
        className="
    absolute
    inset-0
    bg-[url('/hero.jpg')]
    bg-cover
    bg-center
    bg-no-repeat
  "
      />
      <div
        className="
    absolute
    inset-0
    bg-black/35
  "
      />

      {/* Content */}
      <div
        className="
          relative
          z-10
          mx-auto
          flex
          min-h-[calc(100vh-76px)]
          w-full
          max-w-[1440px]
          items-center
          px-5
          py-20
          sm:px-8
          lg:px-12
        "
      >
        <div className="max-w-3xl">
          {/* Small text */}
          <p
            className="
              mb-5
              text-xs
              font-semibold
              uppercase
              tracking-[0.2em]
              text-[#D6B36A]
              sm:text-sm
            "
          >
            ZemVn · Вінниця та Вінницька область
          </p>

          {/* H1 */}
          <h1
            className="
              text-[clamp(2.5rem,5vw,5rem)]
              font-bold
              leading-[1.05]
              tracking-tight
              text-white
            "
          >
            Землевпорядні та
            <span className="block text-[#D6B36A]">геодезичні роботи</span>у
            Вінниці
          </h1>

          {/* Description */}
          <p
            className="
              mt-6
              max-w-2xl
              text-base
              leading-7
              text-white/85
              sm:text-lg
              sm:leading-8
            "
          >
            Професійні геодезичні та землевпорядні послуги у Вінниці та
            Вінницькій області. Визначення меж земельних ділянок, топографічна
            зйомка, кадастрові роботи та оформлення земельної документації.
          </p>

          {/* Buttons */}
          <div
            className="
              mt-8
              flex
              flex-col
              gap-3
              sm:flex-row
            "
          >
            <Link
              href="/services"
              className="
                group
                inline-flex
                h-12
                items-center
                justify-center
                gap-3
                rounded-full
                bg-[#D6B36A]
                px-7
                text-sm
                font-semibold
                text-[#3A2B22]
                transition-all
                duration-300
                hover:bg-[#E2C580]
              "
            >
              Переглянути послуги
              <ArrowRight
                size={17}
                className="
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                "
              />
            </Link>

            <Link
              href="/contacts"
              className="
                inline-flex
                h-12
                items-center
                justify-center
                gap-2
                rounded-full
                border
                border-white/40
                px-7
                text-sm
                font-semibold
                text-white
                transition-all
                duration-300
                hover:border-[#D6B36A]
                hover:bg-white/10
              "
            >
              <Phone size={17} />
              Зв`язатися з нами
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
