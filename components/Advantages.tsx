import { Crosshair, MapPinned, Ruler, ShieldCheck } from "lucide-react";

const advantages = [
  {
    number: "01",
    icon: Crosshair,
    title: "Точність",
    text: "Уважно виконуємо кожне вимірювання та працюємо з точними геодезичними даними.",
  },
  {
    number: "02",
    icon: Ruler,
    title: "Професійний підхід",
    text: "Підбираємо оптимальне рішення відповідно до завдання та особливостей земельної ділянки.",
  },
  {
    number: "03",
    icon: ShieldCheck,
    title: "Надійність",
    text: "Відповідально ставимося до кожного етапу роботи та дотримуємося погоджених термінів.",
  },
  {
    number: "04",
    icon: MapPinned,
    title: "Вінниця та область",
    text: "Працюємо у Вінниці та населених пунктах Вінницької області.",
  },
];

export default function Advantages() {
  return (
    <section className="w-full bg-[#F5F1E8]">
      <div className="grid w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {advantages.map((advantage, index) => {
          const Icon = advantage.icon;

          return (
            <article
              key={advantage.title}
              className={`
                group
                relative
                min-h-[220px]
                overflow-hidden
                bg-[#4A3528]
                p-7
                text-[#F5F1E8]
                transition-all
                duration-300
                hover:bg-[#3D2C22]
                sm:p-8
                lg:min-h-[240px]
                lg:p-9
                ${
                  index !== advantages.length - 1
                    ? "border-b border-[#F5F1E8]/10 md:border-r"
                    : ""
                }
              `}
            >
              {/* Number */}
              <span
                className="
                  absolute
                  right-7
                  top-6
                  text-xs
                  font-medium
                  tracking-[0.15em]
                  text-[#C0A264]
                  sm:right-8
                  sm:top-7
                  lg:right-9
                  lg:top-8
                "
              >
                {advantage.number}
              </span>

              {/* Icon */}
              <div
                className="
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-[#C0A264]/40
                  text-[#C0A264]
                  transition-all
                  duration-300
                  group-hover:bg-[#C0A264]
                  group-hover:text-[#4A3528]
                "
              >
                <Icon size={18} strokeWidth={1.6} />
              </div>

              {/* Content */}
              <div className="mt-7 max-w-xs">
                <h3
                  className="
                    text-lg
                    font-semibold
                    tracking-tight
                    text-[#F5F1E8]
                    sm:text-xl
                  "
                >
                  {advantage.title}
                </h3>

                <p
                  className="
                    mt-2
                    text-sm
                    leading-5
                    text-[#F5F1E8]/60
                  "
                >
                  {advantage.text}
                </p>
              </div>

              {/* Hover line */}
              <div
                className="
                  absolute
                  bottom-0
                  left-0
                  h-[2px]
                  w-0
                  bg-[#C0A264]
                  transition-all
                  duration-500
                  group-hover:w-full
                "
              />
            </article>
          );
        })}
      </div>
    </section>
  );
}
