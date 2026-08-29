import { services } from "@/data/services";
import ServiceCard from "./ServiceCard";

export default function Services() {
  return (
    <section id="services" className="bg-[#F5F1E8]">
      <div
        className="
          mx-auto
          w-full
          max-w-[1440px]
          px-5
        "
      >
        {/* Заголовок */}
        <div className="mb-12 max-w-2xl lg:mb-16">
          <p
            className="
              mb-4
              text-xs
              font-semibold
              uppercase
              tracking-[0.2em]
              text-[#8A6F3F]
              sm:text-sm
            "
          >
            Наші послуги
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
            Геодезичні та
            <span className="block text-[#C0A264]">землевпорядні роботи</span>
          </h2>
        </div>

        {/* Cards */}
        <div
          className="
            grid
            grid-cols-1
            gap-5
            md:grid-cols-2
            lg:grid-cols-3
          "
        >
          {services.map((service, index) => (
            <ServiceCard
              key={service.slug}
              title={service.title}
              href={`/services/${service.slug}`}
              image={service.image}
              description={service.description}
              number={String(index + 1).padStart(2, "0")}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
