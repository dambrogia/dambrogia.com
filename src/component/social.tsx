import {socialLinks} from '@/model/social'
import Link from 'next/link'

export default function Social() {
  return <section className="c-social bg-secondary-content py-16">
    <ul className="max-w-full w-full md:w-[800px] flex flex-wrap items-center justify-center flex-row mx-auto">
      {socialLinks.map(l => {
        return <li key={l.label} className="social__item px-2 py-8 sm:px-8 md:px-12 text-center">
          <Link href={l.link} target="_blank" className="h-16 block text-5xl text-secondary">{l.icon}</Link>
          <span className='text-xs text-secondary block w-24'>{l.label}</span>
        </li>
      })}
    </ul>
  </section>
}
