"use client";

import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";
import { services } from "@/data/services";

export default function Footer() {
  const [emailVisible, setEmailVisible] = useState(false);

  const email = "simon8497@gmail.com";
  const hiddenEmail = `${email.slice(0, Math.floor(email.length / 2))}...`;

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
                className="text-sm text-[#F5F1E8]/65 transition-colors hover:text-[#D6B36A]"
              >
                Головна
              </Link>

              <Link
                href="#about"
                className="text-sm text-[#F5F1E8]/65 transition-colors hover:text-[#D6B36A]"
              >
                Про нас
              </Link>

              <Link
                href="#services"
                className="text-sm text-[#F5F1E8]/65 transition-colors hover:text-[#D6B36A]"
              >
                Послуги
              </Link>

              <Link
                href="#contacts"
                className="text-sm text-[#F5F1E8]/65 transition-colors hover:text-[#D6B36A]"
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
              {services.slice(0, 5).map((service) => (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
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
              <a
                href="https://www.google.com/maps/search/?api=1&query=Київська%204%2C%20Вінниця%2C%20Україна"
                target="_blank"
                rel="noopener noreferrer"
                className="
    flex
    gap-3
    text-sm
    leading-5
    text-[#F5F1E8]/65
    transition-colors
    hover:text-[#D6B36A]
  "
              >
                <MapPin size={18} className="mt-0.5 shrink-0 text-[#D6B36A]" />

                <span>Київська, 4, м. Вінниця</span>
              </a>
              {/* Phone */}
              <a
                href="tel:+380982746415"
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
                +380 98 274 64 15
              </a>
              {/* Email */}
              <div className="flex items-center gap-3">
                <Mail size={18} className="shrink-0 text-[#D6B36A]" />

                {!emailVisible ? (
                  <button
                    type="button"
                    onClick={() => setEmailVisible(true)}
                    className="
                      cursor-pointer
                      text-sm
                      text-[#F5F1E8]/65
                      transition-colors
                      hover:text-[#D6B36A]
                    "
                  >
                    {hiddenEmail}
                  </button>
                ) : (
                  <a
                    href={`mailto:${email}`}
                    className="
                      text-sm
                      text-[#F5F1E8]/65
                      transition-colors
                      hover:text-[#D6B36A]
                    "
                  >
                    {email}
                  </a>
                )}
              </div>
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
