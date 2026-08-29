import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import { services } from "@/data/services";
import ServiceRequestButton from "@/components/ServiceRequestButton";

type ServicePageProps = {
  params: Promise<{
    slug: string;
  }>;
};

// SEO для кожної сторінки послуги
export async function generateMetadata({
  params,
}: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;

  const service = services.find((item) => item.slug === slug);

  if (!service) {
    return {};
  }

  return {
    title: service.title,
    description: service.description,

    alternates: {
      canonical: `/services/${service.slug}`,
    },

    openGraph: {
      type: "website",
      url: `https://zem.vn.ua/services/${service.slug}`,
      title: service.title,
      description: service.description,
      siteName: "ЗемВін",
      locale: "uk_UA",
      images: [
        {
          url: service.image,
          width: 1200,
          height: 630,
          alt: service.title,
        },
      ],
    },

    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;

  const service = services.find((item) => item.slug === slug);

  if (!service) {
    notFound();
  }

  return (
    <main className="bg-[#F8F5EF] text-[#29231F]">
      {/* HERO */}
      <section className="px-6 py-16 md:px-10 lg:px-16 lg:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-[#C0A264]">
              Послуги
            </p>

            <h1 className="text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
              {service.title}
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-[#6B625B]">
              {service.description}
            </p>

            <ServiceRequestButton
              className="
                mt-8
                inline-flex
                rounded-lg
                bg-[#C0A264]
                px-7
                py-4
                font-medium
                text-white
                transition
                hover:bg-[#A98B4F]
              "
            >
              Замовити послугу
            </ServiceRequestButton>
          </div>

          <div className="relative min-h-[350px] overflow-hidden rounded-2xl">
            <Image
              src={service.image}
              alt={service.title}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* ПРО ПОСЛУГУ */}
      <section className="px-6 py-16 md:px-10 lg:px-16 lg:py-24">
        <div className="mx-auto max-w-5xl">
          <p className="mb-3 text-sm uppercase tracking-[0.2em] text-[#C0A264]">
            Детальніше
          </p>

          <h2 className="text-3xl font-bold md:text-4xl">Про послугу</h2>

          <p className="mt-6 max-w-4xl text-lg leading-relaxed text-[#6B625B]">
            {service.about}
          </p>
        </div>
      </section>

      {/* ЩО ВХОДИТЬ */}
      <section className="bg-white px-6 py-16 md:px-10 lg:px-16 lg:py-24">
        <div className="mx-auto max-w-5xl">
          <p className="mb-3 text-sm uppercase tracking-[0.2em] text-[#C0A264]">
            Послуга включає
          </p>

          <h2 className="text-3xl font-bold md:text-4xl">
            Що входить у послугу
          </h2>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {service.includes.map((item, index) => (
              <div
                key={item}
                className="rounded-xl border border-[#E8E1D5] p-6"
              >
                <span className="text-2xl text-[#C0A264]">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <p className="mt-4 text-lg font-medium">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ЕТАПИ */}
      <section className="px-6 py-16 md:px-10 lg:px-16 lg:py-24">
        <div className="mx-auto max-w-5xl">
          <p className="mb-3 text-sm uppercase tracking-[0.2em] text-[#C0A264]">
            Як ми працюємо
          </p>

          <h2 className="text-3xl font-bold md:text-4xl">Етапи роботи</h2>

          <div className="mt-10 space-y-6">
            {service.steps.map((step, index) => (
              <div
                key={step}
                className="flex items-center gap-6 border-b border-[#E8E1D5] pb-6"
              >
                <span className="text-2xl font-semibold text-[#C0A264]">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <p className="text-lg font-medium">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ЧОМУ МИ */}
      <section className="bg-[#29231F] px-6 py-16 text-white md:px-10 lg:px-16 lg:py-24">
        <div className="mx-auto max-w-5xl">
          <p className="mb-3 text-sm uppercase tracking-[0.2em] text-[#C0A264]">
            Наша перевага
          </p>

          <h2 className="text-3xl font-bold md:text-4xl">Чому обирають нас</h2>

          <div className="mt-10 grid gap-8 md:grid-cols-3">
            <div>
              <h3 className="text-xl font-semibold">Професіоналізм</h3>
              <p className="mt-3 leading-relaxed text-white/60">
                Працюємо уважно та відповідально на кожному етапі.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold">Точність</h3>
              <p className="mt-3 leading-relaxed text-white/60">
                Дотримуємося вимог та працюємо з точними даними.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold">Надійність</h3>
              <p className="mt-3 leading-relaxed text-white/60">
                Допомагаємо пройти весь процес від консультації до результату.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-20 md:px-10 lg:px-16">
        <div className="mx-auto max-w-5xl rounded-2xl bg-[#C0A264] px-6 py-12 text-center text-white md:px-12 md:py-16">
          <h2 className="text-3xl font-bold md:text-4xl">
            Потрібна ця послуга?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/80">
            Залиште заявку, і ми зв’яжемося з вами для консультації.
          </p>

          <ServiceRequestButton
            className="
              mt-8
              inline-flex
              rounded-lg
              bg-white
              px-7
              py-4
              font-medium
              text-[#4A3528]
              transition
              hover:bg-[#F8F5EF]
            "
          >
            Залишити заявку
          </ServiceRequestButton>
        </div>
      </section>
    </main>
  );
}
