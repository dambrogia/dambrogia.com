// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type {NextApiRequest, NextApiResponse} from 'next'
import mailer from '@sendgrid/mail'

type Data = {
  data: {
    status: 'failure' | 'success';
    message: string;
  }
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const config = {
    apiKey: process.env.SENDGRID_API_KEY as string,
    mailTo: process.env.MAIL_TO as string,
    mailFrom: process.env.MAIL_FROM as string,
    mailSubject: process.env.MAIL_SUBJECT as string,
  }

  const msg = {
    to: config.mailTo,
    from: config.mailFrom,
    subject: config.mailSubject,
    text: JSON.stringify(req.body, null, 4),
  }

  const makeData = (s: 'success' | 'failure', m: string): Data => ({data: {status: s, message: m}})

  try {
    mailer.setApiKey(config.apiKey)
    await mailer.send(msg)
    res.status(201).json(makeData('success', 'Contact submission was successful.'))
  } catch (e) {
    res.status(500).json(makeData('failure', 'Contact submission failed.'))
  }
}
