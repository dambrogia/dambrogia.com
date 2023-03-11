import Link from 'next/link'

export default function Footer() {
  const y = new Date().getFullYear()

  return <footer className="py-12 bg-base-200">
    <div className="text-sm text-content text-center flex items-center justify-center mb-4">
      <span className="text-2xl pr-2">&copy;</span> {y} Dominic D&apos;Ambrogia
    </div>
    <div className="text-sm text-content flex items-center justify-center">
      <Link href='https://github.com/dambrogia/dambrogia.com'><i className=" text-2xl pr-2 uil uil-code-branch"></i>Source Code</Link>
    </div>
  </footer>
}
