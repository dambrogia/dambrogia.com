import Link from 'next/link'
import {MouseEventHandler, PropsWithChildren} from 'react'

function ContactIconText({icon, children}: PropsWithChildren<{ icon: string }>) {
  return <div className="flex items-center justify-start pb-4">
    <i className={`text-primary text-3xl pr-4 uil ${icon}`}></i>
    {children}
  </div>
}

async function submit (e: MouseEventHandler<HTMLButtonElement>) {
  const inputs = ['name', 'email', 'phone', 'message']

  const values = inputs.map(i => {
      return {[i]: (document.querySelector(`[name="${i}"]`) as HTMLInputElement)?.value}
  })

  const response = await fetch('/api/email', {
    headers: {'Content-Type': 'application/json'},
    method: 'POST',
    body: JSON.stringify(values),
  })

  const data = await response.json()
  console.log(data)
}

export default function Contact() {
  return <section className='c-contact' id="contact">
    <div className="u-container pb-24 md:pb-48">
      <h3 className='text-3xl font-bold text-center mb-12 md:mb-24'><span className="text-primary">Contact</span> Me</h3>
      <div className="flex flex-wrap u-row">
        <div className="u-col w-full md:w-1/2 text-lg mb-8 md:mb-0">
          <p className="mb-12">If you&apos;re looking to get in touch &mdash; this form goes directly to my personal email. My cell is also listed below.</p>

          <ContactIconText icon='uil-map-marker-alt'>
            <span>San Francisco Bay Area, California</span>
          </ContactIconText>
          <ContactIconText icon='uil-envelope'>
            <Link href='mailto:domdambrogia@gmail.com'>domdambrogia@gmail.com</Link>
          </ContactIconText>
          <ContactIconText icon='uil-phone'>
            <Link href='tel:9258130399'>(925) 813-0399</Link>
          </ContactIconText>
        </div>
        <div className="u-col w-full md:w-1/2">
          <input type="text" placeholder="Name" name="name" className="input input-bordered w-full mb-6" />
          <input type="text" placeholder="Email" name="email" className="input input-bordered w-full mb-6" />
          <input type="text" placeholder="Phone" name="phone" className="input input-bordered w-full mb-6" />
          <textarea className="textarea textarea-bordered w-full mb-6" name="message" placeholder="Message" rows={5}></textarea>
          <div className="flex justify-end ">
            <button className="btn btn-primary" onClick={submit}>Submit</button>
          </div>
        </div>
      </div>
    </div>

  </section>
}
