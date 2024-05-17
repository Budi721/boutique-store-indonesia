import Link from 'next/link'

import { CheckIcon } from '@/components/CheckIcon'
import { Container } from '@/components/Container'

export function Introduction() {
  return (
    <section
      id="introduction"
      aria-label="Introduction"
      className="pb-16 pt-20 sm:pb-20 md:pt-36 lg:py-32"
    >
      <Container className="text-lg tracking-tight text-slate-700">
        <p className="font-display text-4xl font-bold tracking-tight text-slate-900">
          Selamat datang di Boutique.id,
        </p>
        <p className="mt-4">
          Platform eksklusif untuk koleksi batik terbaik Indonesia.
          Kami bangga menyajikan keindahan dan kerajinan tangan asli Nusantara melalui berbagai pilihan busana batik yang elegan dan modern.
          Nikmati pengalaman berbelanja yang mudah dan memuaskan bersama kami.
        </p>
        <p className="mt-4">
          Dengan visi dan misi yang jelas, Boutique.id bertujuan untuk menjadi lebih dari sekadar platform e-commerce,
          tetapi juga sebagai agen perubahan yang positif dalam mempromosikan dan melestarikan warisan budaya Indonesia.
        </p>
        <ul role="list" className="mt-8 space-y-3">
          {[
            'Menjadi destinasi utama bagi pecinta batik di Indonesia.',
            'Menyediakan akses mudah ke koleksi batik berkualitas tinggi yang memukau.',
            'Membanggakan keindahan dan kerajinan tangan asli Nusantara.',
            'Menyediakan beragam pilihan batik elegan dan modern.',
            'Berperan aktif dalam mendukung ekonomi kreatif di Indonesia',
          ].map((feature) => (
            <li key={feature} className="flex">
              <CheckIcon className="h-8 w-8 flex-none fill-primer" />
              <span className="ml-4">{feature}</span>
            </li>
          ))}
        </ul>
        <p className="mt-10">
          <Link
            href="#free-chapters"
            className="text-base font-medium text-primer hover:text-stone-500"
          >
            Dapatkan sampel katalog langsung melalui email anda{' '}
            <span aria-hidden="true">&rarr;</span>
          </Link>
        </p>
      </Container>
    </section>
  )
}
