import sgMail from "@sendgrid/mail";

sgMail.setApiKey(process.env.SENDGRID_API_KEY as string);

export async function POST(req: Request) {
  try {
    const { name, email, phone, message } = await req.json();

    const msg = {
      to: "akasuki5953@gmail.com", // client email
      from: "ADHI <akasuki5953@gmail.com>", // MUST be verified
      replyTo: email,
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <h2>New Contact Request</h2>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Phone:</b> ${phone || "Not provided"}</p>
        <p><b>Message:</b></p>
        <p>${message}</p>
      `,
    };

    await sgMail.send(msg);

    return Response.json({ success: true });
  } catch (error) {
    console.error("SendGrid error:", error);
    return Response.json({ success: false });
  }
}
