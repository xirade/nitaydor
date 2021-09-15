require("dotenv").config();
const {
  MAILGUN_API_KEY,
  MAILGUN_DOMAIN,
  MAILGUN_URL,
  CONTACT_TO_EMAIL_ADDRESS
} = process.env;
const mailgun = require("mailgun-js")({
  apiKey: MAILGUN_API_KEY,
  domain: MAILGUN_DOMAIN,
  url: MAILGUN_URL
});

const handler = async event => {
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: "Method Not Allowed",
      headers: { Allow: "POST" }
    };
  }

  const data = JSON.parse(event.body);
  if (!data.message || !data.contactName || !data.contactEmail || !data.phone) {
    return {
      statusCode: 422,
      body: "Name, email, phone and message are required."
    };
  }

  const mailgunData = {
    from: data.contactEmail,
    to: CONTACT_TO_EMAIL_ADDRESS,
    "h:Reply-To": data.contactEmail,
    subject: `New mail from ${data.contactName}`,
    html: `
    <h4>Email from ${data.contactName}. Phone: ${data.phone}</h4>
    <p>${data.message}</p>
    `
  };

  try {
    await mailgun.messages().send(mailgunData);

    return {
      statusCode: 200,
      body: "Your message was sent successfully!"
    };
  } catch (error) {
    return {
      statusCode: 422,
      body: `Error: ${error}`
    };
  }
};

module.exports = { handler };
