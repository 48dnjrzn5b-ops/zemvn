"use client";
import { services } from "@/data/services";
import { useState } from "react";
import Link from "next/link";
import { ChevronDown, Menu, X, Mail, MapPin } from "lucide-react";
import { FaTelegramPlane, FaViber, FaWhatsapp } from "react-icons/fa";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <header className="relative z-50 w-full bg-[#F5F1E8]">
      <div className="mx-auto flex min-h-[76px] w-full max-w-[1440px] items-stretch">
        {/* LOGO */}
        <Link href="/" className="flex items-center px-5 sm:px-8 lg:px-10">
          <span className="text-2xl font-bold tracking-tight text-[#4A3528] sm:text-3xl">
            Zem
            <span className="text-[#C0A264]">Vn</span>
          </span>
        </Link>

        {/* DESKTOP NAVIGATION */}
        <nav className="hidden flex-1 items-center justify-center lg:flex">
          <div className="flex items-center gap-7 xl:gap-10">
            <Link
              href="/"
              className="text-xl font-medium text-[#29231F] transition-colors hover:text-[#C0A264]"
            >
              Головна
            </Link>

            <Link
              href="#about"
              className="text-xl font-medium text-[#29231F] transition-colors hover:text-[#C0A264]"
            >
              Про нас
            </Link>

            {/* SERVICES */}
            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button
                type="button"
                onClick={() => setServicesOpen((prev) => !prev)}
                className="flex items-center gap-1 text-xl font-medium text-[#29231F] transition-colors hover:text-[#C0A264]"
              >
                Послуги
                <ChevronDown
                  size={16}
                  className={`transition-transform duration-200 ${
                    servicesOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* DROPDOWN */}
              <div
                className={`absolute left-1/2 top-full w-72 -translate-x-1/2 pt-6 transition-all duration-200 ${
                  servicesOpen
                    ? "pointer-events-auto visible translate-y-0 opacity-100"
                    : "pointer-events-none invisible -translate-y-2 opacity-0"
                }`}
              >
                <div className="overflow-hidden rounded-2xl border border-[#C0A264]/20 bg-[#F5F1E8] p-2 shadow-xl">
                  {services.map((service) => (
                    <Link
                      key={service.slug}
                      href={`/services/${service.slug}`}
                      className="block rounded-xl px-6 py-3 text-xl text-[#29231F] transition-colors hover:bg-[#C0A264]/10 hover:text-[#4A3528]"
                    >
                      {service.title}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link
              href="#contacts"
              className="flex items-center gap-1 text-xl font-medium text-[#29231F] transition-colors hover:text-[#C0A264]"
            >
              Адреса
            </Link>

            <Link
              href="#contacts"
              className="text-xl font-medium text-[#29231F] transition-colors hover:text-[#C0A264]"
            >
              Контакти
            </Link>
          </div>
        </nav>

        {/* SOCIAL LINKS */}
        <div className="hidden items-center gap-2 px-5 sm:px-7 lg:flex xl:px-9">
          {/* Telegram */}
          <a
            href="https://t.me/0982746415"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Telegram"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F5F1E8] text-[#4A3528] transition-all duration-200 hover:-translate-y-1 hover:bg-[#C0A264]"
          >
            <FaTelegramPlane size={22} />
          </a>

          {/* Viber */}
          <a
            href="viber://chat?number=%2B380982746415"
            aria-label="Viber"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F5F1E8] text-[#4A3528] transition-all duration-200 hover:-translate-y-1 hover:bg-[#C0A264]"
          >
            <FaViber size={22} />
          </a>

          {/* WhatsApp */}
          <a
            href="https://wa.me/380982746415"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F5F1E8] text-[#4A3528] transition-all duration-200 hover:-translate-y-1 hover:bg-[#C0A264]"
          >
            <FaWhatsapp size={22} />
          </a>

          {/* Email */}
          <a
            href="mailto:simon8497@gmail.com"
            aria-label="Email"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F5F1E8] text-[#4A3528] transition-all duration-200 hover:-translate-y-1 hover:bg-[#C0A264]"
          >
            <Mail size={22} />
          </a>
        </div>

        {/* MOBILE BUTTON */}
        <button
          type="button"
          aria-label="Відкрити меню"
          onClick={() => setMobileMenuOpen((prev) => !prev)}
          className="ml-auto flex items-center justify-center px-5 text-[#4A3528] lg:hidden"
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`overflow-hidden border-t border-[#4A3528]/10 bg-[#F5F1E8] transition-all duration-300 lg:hidden ${
          mobileMenuOpen ? "max-h-[700px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="px-5 py-5 sm:px-8">
          <Link
            href="/"
            onClick={() => setMobileMenuOpen(false)}
            className="block border-b border-[#4A3528]/10 py-4 text-base font-medium text-[#29231F]"
          >
            Головна
          </Link>

          <Link
            href="/about"
            onClick={() => setMobileMenuOpen(false)}
            className="block border-b border-[#4A3528]/10 py-4 text-base font-medium text-[#29231F]"
          >
            Про нас
          </Link>

          {/* MOBILE SERVICES */}
          <button
            type="button"
            onClick={() => setServicesOpen((prev) => !prev)}
            className="flex w-full items-center justify-between border-b border-[#4A3528]/10 py-4 text-left text-base font-medium text-[#29231F]"
          >
            <span>Послуги</span>

            <ChevronDown
              size={19}
              className={`transition-transform duration-200 ${
                servicesOpen ? "rotate-180" : ""
              }`}
            />
          </button>

          <div
            className={`overflow-hidden transition-all duration-300 ${
              servicesOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <div className="border-b border-[#4A3528]/10 py-2">
              {services.map((service) => (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block rounded-lg px-4 py-3 text-sm text-[#4A3528] hover:bg-[#C0A264]/10"
                >
                  {service.title}
                </Link>
              ))}
            </div>
          </div>

          <Link
            href="/location"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center gap-2 border-b border-[#4A3528]/10 py-4 text-base font-medium text-[#29231F]"
          >
            <MapPin size={17} />
            Адреса
          </Link>

          <Link
            href="/contacts"
            onClick={() => setMobileMenuOpen(false)}
            className="block border-b border-[#4A3528]/10 py-4 text-base font-medium text-[#29231F]"
          >
            Контакти
          </Link>

          {/* MOBILE SOCIALS */}
          <div className="mt-6 flex gap-3">
            <a
              href="https://t.me/0982746415"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Telegram"
              className="flex h-11 w-11 items-center justify-center rounded-full bg-[#4A3528] text-[#F5F1E8] transition hover:bg-[#5A4030]"
            >
              <FaTelegramPlane size={19} />
            </a>
            <a
              href="viber://chat?number=%2B380982746415"
              aria-label="Viber"
              className="flex h-11 w-11 items-center justify-center rounded-full bg-[#4A3528] text-[#F5F1E8] transition hover:bg-[#5A4030]"
            >
              <FaViber size={19} />
            </a>
            <a
              href="https://wa.me/380982746415"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="flex h-11 w-11 items-center justify-center rounded-full bg-[#4A3528] text-[#F5F1E8] transition hover:bg-[#5A4030]"
            >
              <FaWhatsapp size={19} />
            </a>
            <a
              href="mailto:simon8497@gmail.com"
              aria-label="Email"
              className="flex h-11 w-11 items-center justify-center rounded-full bg-[#4A3528] text-[#F5F1E8] transition hover:bg-[#5A4030]"
            >
              <Mail size={19} />
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
