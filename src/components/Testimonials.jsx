import Image from 'next/image'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  Expandable,
  ExpandableButton,
  ExpandableItems,
} from '@/components/Expandable'
import avatarBlank from '@/images/avatars/avatar-blank.webp'

const testimonials = [
  [
    {
      content:
        'Saya sangat senang dengan kualitas batik yang saya beli di Boutique.id. Desainnya unik dan sangat berkualitas tinggi.',
      author: {
        name: 'Dewi Rahayu',
        role: 'Pelanggan',
        image: avatarBlank,
      },
    },
  ],
  [
    {
      content:
        'Boutique.id membantu saya menemukan batik-batik langka yang sulit saya dapatkan di tempat lain. Pengalaman berbelanja yang menyenangkan!',
      author: {
        name: 'Agus Santoso',
        role: 'Pelanggan',
        image: avatarBlank,
      },
    },
  ],
  [
    {
      content:
        'Saya selalu puas dengan pelayanan Boutique.id. Pengiriman cepat dan batik-batiknya selalu sesuai dengan ekspektasi saya.',
      author: {
        name: 'Siti Nurhaliza',
        role: 'Pelanggan',
        image: avatarBlank,
      },
    },
  ],
]

function Testimonial({ author, children }) {
  return (
    <figure className="rounded-4xl p-8 shadow-md ring-1 ring-slate-900/5">
      <blockquote>
        <p className="text-lg tracking-tight text-slate-900 before:content-['“'] after:content-['”']">
          {children}
        </p>
      </blockquote>
      <figcaption className="mt-6 flex items-center">
        <div className="overflow-hidden rounded-full bg-slate-50">
          <Image
            className="h-12 w-12 object-cover"
            src={author.image}
            alt=""
            width={48}
            height={48}
          />
        </div>
        <div className="ml-4">
          <div className="text-base font-medium leading-6 tracking-tight text-slate-900">
            {author.name}
          </div>
          <div className="mt-1 text-sm text-slate-600">{author.role}</div>
        </div>
      </figcaption>
    </figure>
  )
}

export function Testimonials() {
  return (
    <section className="py-8 sm:py-10 lg:py-16">
      <Container className="text-center">
        <h2 className="font-display text-4xl font-bold tracking-tight text-slate-900">
          Beberapa testimoni baik dari pelanggan sebelumnya...
        </h2>
        <p className="mt-4 text-lg tracking-tight text-slate-600">
          Kami telah menerima umpan balik yang luar biasa dari pelanggan kami di Boutique.id.
          Mari kita lihat apa yang mereka katakan tentang pengalaman berbelanja mereka dengan kami.
        </p>
      </Container>
      <Expandable className="group mt-16">
        <ul
          role="list"
          className="mx-auto grid max-w-2xl grid-cols-1 gap-8 px-4 lg:max-w-7xl lg:grid-cols-3 lg:px-8"
        >
          {testimonials
            .map((column) => column[0])
            .map((testimonial, testimonialIndex) => (
              <li key={testimonialIndex} className="lg:hidden">
                <Testimonial author={testimonial.author}>
                  {testimonial.content}
                </Testimonial>
              </li>
            ))}
          {testimonials.map((column, columnIndex) => (
            <li
              key={columnIndex}
              className="hidden group-data-[expanded]:list-item lg:list-item"
            >
              <ul role="list">
                <ExpandableItems>
                  {column.map((testimonial, testimonialIndex) => (
                    <li
                      key={testimonialIndex}
                      className={clsx(
                        testimonialIndex === 0 && 'hidden lg:list-item',
                        testimonialIndex === 1 && 'lg:mt-8',
                        testimonialIndex > 1 && 'mt-8',
                      )}
                    >
                      <Testimonial author={testimonial.author}>
                        {testimonial.content}
                      </Testimonial>
                    </li>
                  ))}
                </ExpandableItems>
              </ul>
            </li>
          ))}
        </ul>
        <ExpandableButton>Lebih banyak</ExpandableButton>
      </Expandable>
    </section>
  )
}
