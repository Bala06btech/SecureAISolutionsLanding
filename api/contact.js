import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, message, subject } = req.body;

  try {
    const response = await resend.emails.send({
      from: process.env.TO_EMAIL,           // verified email in Resend
      to: [process.env.TO_EMAIL],           // your email to receive messages
      subject: subject || 'New Contact Form Submission',
      reply_to: email,
      html: `
        <h2>New message from ${name}</h2>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong><br/>${message}</p>
      `,
    });

    res.status(200).json({ status: 'ok', id: response.id });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to send email' });
  }
}
