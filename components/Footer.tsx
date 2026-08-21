import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";

const services = [
  {
    title: "Геодезичні роботи",
    href: "/services/geodesy",
  },
  {
    title: "Землевпорядні роботи",
    href: "/services/land-management",
  },
  {
    title: "Кадастрові роботи",
    href: "/services/cadastral",
  },
  {
    title: "Топографічна зйомка",
    href: "/services/topographic",
  },
  {
    title: "Винос меж земельної ділянки",
    href: "/services/boundaries",
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#4A3528] text-[#F5F1E8]">
      <div
        className="
          mx-auto
          w-full
          max-w-[1440px]
          px-5
          py-14
          sm:px-8
          sm:py-16
          lg:px-12
          lg:py-20
        "
      >
        {/* Main footer */}
        <div
          className="
            grid
            gap-12
            sm:grid-cols-2
            lg:grid-cols-[1.3fr_0.7fr_1fr_1fr]
            lg:gap-10
          "
        >
          {/* Logo / About */}
          <div>
            <Link
              href="/"
              className="
                inline-block
                text-3xl
                font-bold
                tracking-tight
              "
            >
              <span className="text-[#D6B36A]">Zem</span>
              <span className="text-[#F5F1E8]">Vn</span>
            </Link>

            <p
              className="
                mt-5
                max-w-xs
                text-sm
                leading-6
                text-[#F5F1E8]/60
              "
            >
              Геодезичні та землевпорядні роботи у Вінниці та Вінницькій
              області.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3
              className="
                text-sm
                font-semibold
                uppercase
                tracking-[0.15em]
                text-[#D6B36A]
              "
            >
              Навігація
            </h3>

            <nav className="mt-5 flex flex-col gap-3">
              <Link
                href="/"
                className="
                  text-sm
                  text-[#F5F1E8]/65
                  transition-colors
                  hover:text-[#D6B36A]
                "
              >
                Головна
              </Link>

              <Link
                href="/about"
                className="
                  text-sm
                  text-[#F5F1E8]/65
                  transition-colors
                  hover:text-[#D6B36A]
                "
              >
                Про нас
              </Link>

              <Link
                href="/services"
                className="
                  text-sm
                  text-[#F5F1E8]/65
                  transition-colors
                  hover:text-[#D6B36A]
                "
              >
                Послуги
              </Link>

              <Link
                href="/contacts"
                className="
                  text-sm
                  text-[#F5F1E8]/65
                  transition-colors
                  hover:text-[#D6B36A]
                "
              >
                Контакти
              </Link>
            </nav>
          </div>

          {/* Services */}
          <div>
            <h3
              className="
                text-sm
                font-semibold
                uppercase
                tracking-[0.15em]
                text-[#D6B36A]
              "
            >
              Послуги
            </h3>

            <nav className="mt-5 flex flex-col gap-3">
              {services.map((service) => (
                <Link
                  key={service.href}
                  href={service.href}
                  className="
                    text-sm
                    leading-5
                    text-[#F5F1E8]/65
                    transition-colors
                    hover:text-[#D6B36A]
                  "
                >
                  {service.title}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contacts */}
          <div>
            <h3
              className="
                text-sm
                font-semibold
                uppercase
                tracking-[0.15em]
                text-[#D6B36A]
              "
            >
              Контакти
            </h3>

            <div className="mt-5 space-y-4">
              {/* Address */}
              <div className="flex gap-3">
                <MapPin size={18} className="mt-0.5 shrink-0 text-[#D6B36A]" />

                <div className="text-sm leading-5 text-[#F5F1E8]/65">
                  <p>Київська, 4</p>
                  <p>м. Вінниця</p>
                </div>
              </div>

              {/* Phone */}
              <a
                href="tel:+380000000000"
                className="
                  flex
                  items-center
                  gap-3
                  text-sm
                  text-[#F5F1E8]/65
                  transition-colors
                  hover:text-[#D6B36A]
                "
              >
                <Phone size={18} className="shrink-0 text-[#D6B36A]" />
                +380 XX XXX XX XX
              </a>

              {/* Email */}
              <a
                href="mailto:example@gmail.com"
                className="
                  flex
                  items-center
                  gap-3
                  text-sm
                  text-[#F5F1E8]/65
                  transition-colors
                  hover:text-[#D6B36A]
                "
              >
                <Mail size={18} className="shrink-0 text-[#D6B36A]" />
                example@gmail.com
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div
          className="
            mt-14
            flex
            flex-col
            gap-4
            border-t
            border-[#F5F1E8]/10
            pt-6
            sm:flex-row
            sm:items-center
            sm:justify-between
          "
        >
          <p className="text-xs text-[#F5F1E8]/40">
            © 2026 ZemVn. Усі права захищені.
          </p>

          <Link
            href="/privacy"
            className="
              text-xs
              text-[#F5F1E8]/40
              transition-colors
              hover:text-[#D6B36A]
            "
          >
            Політика конфіденційності
          </Link>
        </div>
      </div>
    </footer>
  );
}
