import { NextResponse } from 'next/server';

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(req: Request) {
  const body = await req.json();
  const { name, email, company, projectType, budget, message } = body ?? {};

  if (!name || !email || !projectType || !message) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
  }
  if (!emailRegex.test(email)) {
    return NextResponse.json({ error: 'Invalid email' }, { status: 400 });
  }

  const to = process.env.CONTACT_TO_EMAIL || 'hanni6015@gmail.com';
  const subject = `New Portfolio Inquiry from ${name}`;
  const content = `Name: ${name}\nEmail: ${email}\nCompany: ${company || '-'}\nProject Type: ${projectType}\nBudget: ${budget || '-'}\nMessage:\n${message}`;

  // Optional LINE Messaging API notify (non-blocking)
  const lineToken = process.env.LINE_CHANNEL_ACCESS_TOKEN;
  const lineUserId = process.env.LINE_USER_ID;
  if (lineToken && lineUserId) {
    fetch('https://api.line.me/v2/bot/message/push', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${lineToken}` },
      body: JSON.stringify({ to: lineUserId, messages: [{ type: 'text', text: `New inquiry: ${name} / ${projectType}` }] })
    }).catch(() => undefined);
  }

  const resendKey = process.env.RESEND_API_KEY;
  if (!resendKey) {
    return NextResponse.json({ ok: true, message: 'Received (email provider not configured)', preview: { to, subject, content } });
  }

  const sendRes = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${resendKey}` },
    body: JSON.stringify({ from: 'Portfolio Contact <onboarding@resend.dev>', to, subject, text: content, reply_to: email })
  });

  if (!sendRes.ok) {
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
