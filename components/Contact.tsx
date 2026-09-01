import { MapPin, Phone } from "lucide-react";

export default function Contact() {
  return (
    <section id="contacts" className="bg-[#F5F1E8]">
      <div
        className="
          mx-auto
          grid
          w-full
          max-w-[1440px]
          items-center
          gap-12
          px-5
          py-16
          sm:px-8
          sm:py-20
          lg:grid-cols-[1fr_0.8fr]
          lg:gap-20
          lg:px-12
        "
      >
        {/* CONTACTS */}
        <div>
          <p
            className="
              text-sm
              font-semibold
              uppercase
              tracking-[0.2em]
              text-[#8A6F3F]
              sm:text-base
            "
          >
            Контакти
          </p>

          <div className="mt-10 space-y-10">
            {/* Вінниця */}
            <div>
              <div className="flex items-start gap-5">
                <div
                  className="
                    flex
                    h-12
                    w-12
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    bg-[#C0A264]/15
                    text-[#8A6F3F]
                  "
                >
                  <MapPin size={22} />
                </div>

                <div>
                  <h3
                    className="
                      text-2xl
                      font-semibold
                      tracking-tight
                      text-[#29231F]
                      sm:text-3xl
                    "
                  >
                    Вінниця
                  </h3>

                  <a
                    href="https://www.google.com/maps/search/?api=1&query=Київська%204%2C%20Вінниця%2C%20Україна"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      mt-1
                      block
                      text-lg
                      text-[#6A6058]
                      transition-colors
                      hover:text-[#8A6F3F]
                      sm:text-xl
                    "
                  >
                    вул. Київська, 4
                  </a>
                </div>
              </div>

              <div className="ml-[68px] mt-5">
                <p
                  className="
                    text-lg
                    font-semibold
                    text-[#29231F]
                    sm:text-xl
                  "
                >
                  Баришев Семен Олегович
                </p>

                <a
                  href="tel:+380982746415"
                  className="
                    mt-2
                    flex
                    items-center
                    gap-3
                    text-lg
                    font-medium
                    text-[#4A3528]
                    transition-colors
                    hover:text-[#8A6F3F]
                    sm:text-xl
                  "
                >
                  <Phone size={19} />
                  +380 98 274 64 15
                </a>
              </div>
            </div>

            {/* Ямпіль */}
            <div>
              <div className="flex items-start gap-5">
                <div
                  className="
                    flex
                    h-12
                    w-12
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    bg-[#C0A264]/15
                    text-[#8A6F3F]
                  "
                >
                  <MapPin size={22} />
                </div>

                <div>
                  <h3
                    className="
                      text-2xl
                      font-semibold
                      tracking-tight
                      text-[#29231F]
                      sm:text-3xl
                    "
                  >
                    м. Ямпіль
                  </h3>

                  <a
                    href="https://www.google.com/maps/search/?api=1&query=вул.%20Б.%20Хмельницького%2C%2059%2C%20Ямпіль%2C%20Україна"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      mt-1
                      block
                      text-lg
                      text-[#6A6058]
                      transition-colors
                      hover:text-[#8A6F3F]
                      sm:text-xl
                    "
                  >
                    вул. Б. Хмельницького, 59
                  </a>
                </div>
              </div>

              <div className="ml-[68px] mt-5">
                <p
                  className="
                    text-lg
                    font-semibold
                    text-[#29231F]
                    sm:text-xl
                  "
                >
                  Майбородюк Василь Миколайович
                </p>

                <a
                  href="tel:+380679549436"
                  className="
                    mt-2
                    flex
                    items-center
                    gap-3
                    text-lg
                    font-medium
                    text-[#4A3528]
                    transition-colors
                    hover:text-[#8A6F3F]
                    sm:text-xl
                  "
                >
                  <Phone size={19} />
                  +380 67 954 94 36
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* MAP */}
        <div
          className="
            relative
            h-[320px]
            overflow-hidden
            rounded-[1.75rem]
            bg-[#4A3528]
            sm:h-[380px]
            lg:h-[430px]
          "
        >
          <iframe
            title="Офіс ZemVn у Вінниці"
            src="https://www.google.com/maps?q=Київська+4,+Вінниця&output=embed"
            className="
              absolute
              inset-0
              h-full
              w-full
              border-0
            "
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
