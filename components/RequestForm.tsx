"use client";

import { useState } from "react";
import { Send } from "lucide-react";
import { services } from "@/data/services";

export default function RequestForm() {
  const [isSent, setIsSent] = useState(false);
  const [isSending, setIsSending] = useState(false);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    const data = {
      name: formData.get("name"),
      phone: formData.get("phone"),
      service: formData.get("service"),
      comment: formData.get("comment"),
    };

    setIsSending(true);

    try {
      const response = await fetch("/api/request", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const text = await response.text();

      console.log("API STATUS:", response.status);
      console.log("API RESPONSE:", text);

      if (!response.ok) {
        let message = "Не вдалося відправити заявку";

        try {
          const result = JSON.parse(text);
          message = result.error || message;
        } catch {
          message = text || message;
        }

        throw new Error(message);
      }

      setIsSent(true);
      form.reset();
    } catch (error) {
      console.error("FORM ERROR:", error);

      alert(
        error instanceof Error
          ? error.message
          : "Не вдалося відправити заявку. Спробуйте ще раз."
      );
    } finally {
      setIsSending(false);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="
        rounded-[2rem]
        bg-[#F5F1E8]
        p-6
        sm:p-8
        lg:p-10
      "
    >
      <div className="grid gap-6 sm:grid-cols-2">
        {/* Name */}
        <div>
          <label
            htmlFor="name"
            className="
              mb-2
              block
              text-sm
              font-medium
              text-[#4A3528]
            "
          >
            Ваше ім`я
          </label>

          <input
            id="name"
            name="name"
            type="text"
            placeholder="Іван"
            required
            className="
              h-12
              w-full
              rounded-xl
              border
              border-[#4A3528]/15
              bg-white/50
              px-4
              text-[#29231F]
              outline-none
              transition
              placeholder:text-[#6A6058]/50
              focus:border-[#C0A264]
              focus:ring-2
              focus:ring-[#C0A264]/20
            "
          />
        </div>

        {/* Phone */}
        <div>
          <label
            htmlFor="phone"
            className="
              mb-2
              block
              text-sm
              font-medium
              text-[#4A3528]
            "
          >
            Номер телефону
          </label>

          <input
            id="phone"
            name="phone"
            type="tel"
            placeholder="+380 XX XXX XX XX"
            required
            className="
              h-12
              w-full
              rounded-xl
              border
              border-[#4A3528]/15
              bg-white/50
              px-4
              text-[#29231F]
              outline-none
              transition
              placeholder:text-[#6A6058]/50
              focus:border-[#C0A264]
              focus:ring-2
              focus:ring-[#C0A264]/20
            "
          />
        </div>

        {/* Service */}
        <div className="sm:col-span-2">
          <label
            htmlFor="service"
            className="
              mb-2
              block
              text-sm
              font-medium
              text-[#4A3528]
            "
          >
            Яка послуга вас цікавить?
          </label>

          <select
            id="service"
            name="service"
            required
            defaultValue=""
            className="
              h-12
              w-full
              rounded-xl
              border
              border-[#4A3528]/15
              bg-white/50
              px-4
              text-[#29231F]
              outline-none
              transition
              focus:border-[#C0A264]
              focus:ring-2
              focus:ring-[#C0A264]/20
            "
          >
            <option value="" disabled>
              Оберіть послугу
            </option>

            {services.map((service) => (
              <option key={service.slug} value={service.title}>
                {service.title}
              </option>
            ))}
          </select>
        </div>

        {/* Comment */}
        <div className="sm:col-span-2">
          <label
            htmlFor="comment"
            className="
              mb-2
              block
              text-sm
              font-medium
              text-[#4A3528]
            "
          >
            Коментар
          </label>

          <textarea
            id="comment"
            name="comment"
            rows={5}
            placeholder="Коротко опишіть ваше завдання..."
            className="
              w-full
              resize-none
              rounded-xl
              border
              border-[#4A3528]/15
              bg-white/50
              px-4
              py-4
              text-[#29231F]
              outline-none
              transition
              placeholder:text-[#6A6058]/50
              focus:border-[#C0A264]
              focus:ring-2
              focus:ring-[#C0A264]/20
            "
          />
        </div>
      </div>

      {/* Submit */}
      <div
        className="
          mt-7
          flex
          flex-col
          gap-4
          sm:flex-row
          sm:items-center
          sm:justify-between
        "
      >
        <p className="text-xs leading-5 text-[#6A6058]">
          Натискаючи кнопку, ви погоджуєтесь на обробку наданих даних.
        </p>

        <button
          type="submit"
          disabled={isSending}
          className="
            group
            flex
            h-12
            shrink-0
            items-center
            justify-center
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
            disabled:cursor-not-allowed
            disabled:opacity-60
          "
        >
          {isSending ? "Надсилання..." : "Надіслати заявку"}

          {!isSending && (
            <Send
              size={17}
              className="
                transition-transform
                duration-300
                group-hover:translate-x-1
              "
            />
          )}
        </button>
      </div>

      {/* Success */}
      {isSent && (
        <div
          className="
            mt-6
            rounded-xl
            bg-[#C0A264]/15
            px-5
            py-4
            text-sm
            font-medium
            text-[#4A3528]
          "
        >
          Дякуємо! Вашу заявку отримано. Ми зв`яжемося з вами найближчим часом.
        </div>
      )}
    </form>
  );
}
