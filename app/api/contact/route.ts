import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, phone, message } = body;

    console.log("API called with:", { name, email, phone, message });
    console.log("RESEND key exists:", !!process.env.RESEND_API_KEY);

    const data = await resend.emails.send({
      from: "Website Form <onboarding@resend.dev>",
      to: ["bharathsg99@gmail.com"],
      replyTo: email,
      subject: "New Website Inquiry",
      html: `
        <h2>New Contact Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    });

    console.log("Resend success:", data);

    return Response.json({ success: true, data });
  } catch (error) {
    console.error("Resend error:", error);
    return Response.json(
      {
        success: false,
        error: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 },
    );
  }
}
