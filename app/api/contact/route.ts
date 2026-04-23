import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, phone, message } = body;

    if (!name || !email || !message) {
      return Response.json(
        {
          success: false,
          error: "Name, email, and message are required.",
        },
        { status: 400 },
      );
    }

    const data = await resend.emails.send({
      from: "Website Contact <noreply@envirogreenpest.com>",
      to: ["adith2440@gmail.com"],
      replyTo: email,
      subject: `New Website Contact Form Submission from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #111;">
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
          <p><strong>Message:</strong></p>
          <p>${message}</p>
        </div>
      `,
    });

    return Response.json({
      success: true,
      message: "Email sent successfully.",
      data,
    });
  } catch (error) {
    console.error("Resend error:", error);

    return Response.json(
      {
        success: false,
        error: "Something went wrong while sending the email.",
      },
      { status: 500 },
    );
  }
}
