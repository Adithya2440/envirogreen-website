import { Resend } from "resend";

export async function POST(req: Request) {
  try {
    const resendApiKey = process.env.RESEND_API_KEY;

    if (!resendApiKey) {
      return new Response(
        JSON.stringify({
          success: false,
          error: "Missing RESEND_API_KEY",
        }),
        { status: 500 },
      );
    }

    const resend = new Resend(resendApiKey);

    const body = await req.json();
    const { name, fullName, email, phone, message } = body;
    const senderName = fullName || name || "";

    const data = await resend.emails.send({
      from: "Website Inquiry <onboarding@resend.dev>",
      to: ["adith2440@gmail.com"], // for testing only
      replyTo: email,
      subject: "New Website Inquiry",
      html: `
        <h2>New Contact Request</h2>
        <p><b>Name:</b> ${senderName}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Phone:</b> ${phone}</p>
        <p><b>Message:</b> ${message}</p>
      `,
    });

    return new Response(JSON.stringify({ success: true, data }), {
      status: 200,
    });
  } catch (error) {
    return new Response(
      JSON.stringify({
        success: false,
        error: error instanceof Error ? error.message : "Unknown error",
      }),
      { status: 500 },
    );
  }
}
