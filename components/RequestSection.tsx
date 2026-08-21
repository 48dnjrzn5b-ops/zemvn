import RequestForm from "./RequestForm";

export default function RequestSection() {
  return (
    <section className="bg-[#4A3528]">
      <div
        className="
          mx-auto
          w-full
          max-w-[1440px]
          px-5
          py-16
          sm:px-8
          sm:py-20
          lg:px-12
          lg:py-24
        "
      >
        <div className="mx-auto max-w-4xl">
          {/* Heading */}
          <div className="mb-10 text-center">
            <p
              className="
                text-xs
                font-semibold
                uppercase
                tracking-[0.2em]
                text-[#D6B36A]
                sm:text-sm
              "
            >
              Заявка
            </p>

            <h2
              className="
                mt-4
                text-[clamp(2rem,4vw,3.5rem)]
                font-bold
                leading-tight
                text-[#F5F1E8]
              "
            >
              Розкажіть, що вам потрібно
            </h2>

            <p
              className="
                mx-auto
                mt-4
                max-w-xl
                text-sm
                leading-6
                text-[#F5F1E8]/60
                sm:text-base
              "
            >
              Залиште свої контакти та коротко опишіть завдання. Ми зв`яжемося з
              вами для уточнення деталей.
            </p>
          </div>

          <RequestForm />
        </div>
      </div>
    </section>
  );
}
