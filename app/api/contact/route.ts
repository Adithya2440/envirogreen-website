export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { name, email, phone, message } = body;

    // Log form data (for now)
    console.log("Form submission received:");
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Phone:", phone);
    console.log("Message:", message);

    // TEMP response (no email sending yet)
    return new Response(
      JSON.stringify({
        success: true,
        message: "Form submitted successfully",
      }),
      { status: 200 },
    );
  } catch (error) {
    console.error("Error handling form:", error);

    return new Response(
      JSON.stringify({
        success: false,
        message: "Something went wrong",
      }),
      { status: 500 },
    );
  }
}
