import { Resend } from "resend";

export async function POST(req: Request) {
  try {
    const resendApiKey = process.env.RESEND_API_KEY;

    if (!resendApiKey) {
      console.error("Missing RESEND_API_KEY");
      return new Response(
        JSON.stringify({
          success: false,
          error: "Missing RESEND_API_KEY in environment variables",
        }),
        { status: 500 },
      );
    }

    const resend = new Resend(resendApiKey);

    const body = await req.json();
    const { fullName, email, phone, message } = body;

    console.log("Form data received:", { fullName, email, phone, message });

    const data = await resend.emails.send({
      from: "Website Inquiry <onboarding@resend.dev>",
      to: ["adith2440@gmail.com"],
      replyTo: email,
      subject: "New Website Inquiry",
      html: `
        <h2>New Contact Request</h2>
        <p><b>Name:</b> ${fullName}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Phone:</b> ${phone}</p>
        <p><b>Message:</b> ${message}</p>
      `,
    });

    console.log("Resend success:", data);

    return new Response(JSON.stringify({ success: true, data }), {
      status: 200,
    });
  } catch (error) {
    console.error("Resend error:", error);

    return new Response(
      JSON.stringify({
        success: false,
        error: error instanceof Error ? error.message : "Unknown error",
      }),
      { status: 500 },
    );
  }
}
