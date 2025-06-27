import { Resend } from 'resend';

import {EmailTemplate} from "../../_components/EmailTemplate.jsx";
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST() {
  try {
    const { data, error } = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: ['shereenshawky2001@gmail.com'],
      subject: 'Hello world',
      react: EmailTemplate({ firstName: 'John' }),
    });

    if (error) {
            console.log('Resend error:', error); // <-- Add this line

      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
        console.log('Catch error:', error); // <-- Add this line

    return Response.json({ error }, { status: 500 });
  }
}