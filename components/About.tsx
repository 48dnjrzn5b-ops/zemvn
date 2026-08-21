import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="bg-[#F5F1E8]">
      <div
        className="
          mx-auto
          grid
          w-full
          max-w-[1440px]
          items-center
          gap-12
          px-5
          py-20
          sm:px-8
          sm:py-24
          lg:grid-cols-2
          lg:gap-20
          lg:px-12
          lg:py-28
        "
      >
        {/* IMAGE */}
        <div className="relative mx-auto w-full max-w-[600px] lg:mx-0">
          <div
            className="
    relative
    aspect-[4/3]
    overflow-hidden
    rounded-[2rem]
    bg-[#4A3528]
  "
          >
            <Image
              src="/about-geodesy.jpg"
              alt="Геодезичні та землевпорядні роботи"
              fill
              className="object-cover"
            />
          </div>

          {/* Decorative frame */}
          <div
            className="
              pointer-events-none
              absolute
              -bottom-4
              -right-4
              -z-0
              h-full
              w-full
              rounded-[2rem]
              border
              border-[#C0A264]
            "
          />
        </div>

        {/* CONTENT */}
        <div className="max-w-xl">
          <p
            className="
              mb-5
              text-xs
              font-semibold
              uppercase
              tracking-[0.2em]
              text-[#8A6F3F]
              sm:text-sm
            "
          >
            Про нас
          </p>

          <h2
            className="
              text-[clamp(2rem,4vw,3.5rem)]
              font-bold
              leading-[1.1]
              tracking-tight
              text-[#29231F]
            "
          >
            Професійний підхід
            <span className="block text-[#C0A264]">до роботи із землею</span>
          </h2>

          <div className="mt-6 space-y-4 text-base leading-7 text-[#6A6058]">
            <p>
              ZemVn — команда фахівців, яка надає геодезичні та землевпорядні
              послуги у Вінниці та Вінницькій області.
            </p>

            <p>
              Ми допомагаємо власникам земельних ділянок, підприємствам та
              забудовникам вирішувати питання, пов`язані з вимірюванням, межами,
              топографією та земельною документацією.
            </p>
          </div>

          <Link
            href="/about"
            className="
              group
              mt-8
              inline-flex
              h-12
              items-center
              gap-3
              rounded-full
              bg-[#4A3528]
              px-7
              text-sm
              font-semibold
              text-[#F5F1E8]
              transition-all
              duration-300
              hover:bg-[#5A4030]
            "
          >
            Дізнатися більше
            <ArrowRight
              size={17}
              className="
                transition-transform
                duration-300
                group-hover:translate-x-1
              "
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
