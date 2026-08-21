import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const { name, phone, service, comment } = body;

    if (!name || !phone || !service) {
      return Response.json(
        {
          error: "Заповніть обов'язкові поля.",
        },
        { status: 400 }
      );
    }

    const { data, error } = await resend.emails.send({
      from: "ZemVN <onboarding@resend.dev>",
      to: ["simon8497@gmail.com"],
      subject: `Нова заявка — ${service}`,
      html: `
    <h2>Нова заявка із сайту zem.vn.ua</h2>

    <p><strong>Ім'я:</strong> ${name}</p>
    <p><strong>Телефон:</strong> ${phone}</p>
    <p><strong>Послуга:</strong> ${service}</p>
    <p><strong>Коментар:</strong></p>
    <p>${comment || "Коментар не вказано"}</p>
  `,
    });

    console.log("🔥 RESEND DATA:", data);
    console.log("🔥 RESEND ERROR:", error);

    if (error) {
      console.error("RESEND ERROR:", error);

      return Response.json(
        {
          error: error.message,
        },
        { status: 500 }
      );
    }

    console.log("EMAIL SENT:", data);

    return Response.json({
      success: true,
    });
  } catch (error) {
    console.error("🔥 API ERROR:", error);

    return Response.json(
      {
        error: error instanceof Error ? error.message : String(error),
      },
      { status: 500 }
    );
  }
}
