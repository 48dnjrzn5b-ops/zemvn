import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

type ServiceCardProps = {
  title: string;
  href: string;
  image: string;
  description: string;
  number: string;
};

export default function ServiceCard({
  title,
  href,
  image,
  description,
  number,
}: ServiceCardProps) {
  return (
    <Link
      href={href}
      className="
        group
        relative
        min-h-[420px]
        overflow-hidden
        rounded-[1.75rem]
        bg-[#4A3528]
      "
    >
      {/* Image */}
      <Image
        src={image}
        alt={title}
        fill
        className="
    object-cover
    transition-transform
    duration-700
    group-hover:scale-105
  "
      />

      {/* Overlay */}
      <div
        className="
          absolute
          inset-0
          bg-gradient-to-t
          from-[#2F241E]
          via-[#2F241E]/45
          to-transparent
        "
      />

      {/* Number */}
      <span
        className="
          absolute
          right-6
          top-6
          text-sm
          font-medium
          tracking-[0.15em]
          text-white/70
        "
      >
        {number}
      </span>

      {/* Content */}
      <div
        className="
          absolute
          bottom-0
          left-0
          right-0
          p-7
          sm:p-8
        "
      >
        <div className="flex items-end justify-between gap-5">
          <div>
            <h3
              className="
                text-xl
                font-semibold
                leading-tight
                text-white
                sm:text-2xl
              "
            >
              {title}
            </h3>

            <p
              className="
                mt-3
                max-w-sm
                text-sm
                leading-6
                text-white/70
              "
            >
              {description}
            </p>
          </div>

          {/* Arrow */}
          <span
            className="
              flex
              h-11
              w-11
              shrink-0
              items-center
              justify-center
              rounded-full
              bg-[#D6B36A]
              text-[#4A3528]
              transition-transform
              duration-300
              group-hover:rotate-45
            "
          >
            <ArrowUpRight size={19} />
          </span>
        </div>
      </div>
    </Link>
  );
}
