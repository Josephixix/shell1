export async function POST(req: Request) {
  const { email } = await req.json();

  const response = await fetch(
    `https://api.convertkit.com/v3/forms/${process.env.CONVERTKIT_FORM_ID}/subscribe`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        api_key: process.env.CONVERTKIT_API_KEY,
        email,
      }),
    }
  );

  const data = await response.json();

  return Response.json(data);
}