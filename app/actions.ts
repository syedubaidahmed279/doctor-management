"use server";

export async function getCountry() {
  const response = await fetch("https://api.country.is/");
  const data = await response.json();

  return data.country;
}

export async function sendMessage(name: string, phone: string, url: string) {
  const response = await fetch("https://api.wassenger.com/v1/messages", {
    method: "POST",
    body: JSON.stringify({
      phone: phone,
      message: `Thank you ${name} for choosing our service! 🙌 We hope you had a great experience. If you have a moment, please leave us a review on Google Maps — it really helps us grow! 🌟\n\n📍 Review us here: ${url}`,
    }),
    headers: {
      "Content-Type": "application/json",
      Token: `${process.env.NEXT_PUBLIC_WASSENGER_API_KEY}`,
    },
  });

  return response.json();
}
