import Image from 'next/image'

import { Container } from '@/components/Container'
import { SectionHeading } from '@/components/SectionHeading'
import abstractBackgroundImage from '@/images/resources/abstract-background.png'
import discordImage from '@/images/resources/discord.svg'
import figmaImage from '@/images/resources/figma.svg'
import videoPlayerImage from '@/images/resources/video-player.svg'

const resources = [
  {
    title: 'Banyak Promo',
    description:
      'Jangan lewatkan kesempatan untuk mendapatkan penawaran menarik di Boutique.id. ' +
      'Dengan promo-promo berkala, Anda dapat menikmati keuntungan lebih saat berbelanja batik di sini.',
    image: function FigmaImage() {
      return (
        <div className="absolute inset-0 flex bg-gradient-to-r from-stone-600 to-zinc-200">
          <Image src={figmaImage} alt="" unoptimized />
        </div>
      )
    },
  },
  {
    title: 'Varian Banyak',
    description:
      'Temukan kepuasan belanja dengan beragam pilihan batik di Boutique.id. Dari motif klasik hingga desain modern, kami menawarkan varian yang sesuai dengan selera Anda.',
    image: function VideoPlayerImage() {
      return (
        <div className="absolute inset-0 flex">
          <Image
            className="absolute inset-0 h-full w-full object-cover"
            src={abstractBackgroundImage}
            alt=""
            sizes="(min-width: 1280px) 21rem, (min-width: 1024px) 33vw, (min-width: 768px) 19rem, (min-width: 640px) 50vw, 100vw"
          />
          <Image
            className="relative"
            src={videoPlayerImage}
            alt=""
            unoptimized
          />
        </div>
      )
    },
  },
  {
    title: 'Aman Terpercaya',
    description:
      "Kami mengutamakan keamanan dan kepercayaan dalam setiap transaksi Anda. " +
      "Dengan sistem pembayaran yang aman dan layanan pelanggan yang responsif, belanja di Boutique.id menjadi pengalaman tanpa khawatir.",
    image: function DiscordImage() {
      return (
        <div className="absolute inset-0 flex bg-gradient-to-r from-cyan-300 via-violet-600 to-zinc-200">
          <Image src={discordImage} alt="" unoptimized />
        </div>
      )
    },
  },
]

export function Resources() {
  return (
    <section
      id="resources"
      aria-labelledby="resources-title"
      className="scroll-mt-14 py-16 sm:scroll-mt-32 sm:py-20 lg:py-32"
    >
      <Container>
        <SectionHeading number="3" id="resources-title">
          Kenapa Boutique?
        </SectionHeading>
        <p className="mt-8 font-display text-4xl font-bold tracking-tight text-slate-900">
          Mengapa Harus Boutique?
        </p>
        <p className="mt-4 text-lg tracking-tight text-slate-700">
          Boutique.id untuk pengalaman belanja batik yang mudah dan memuaskan.
          Temukan batik berkualitas, tambahkan ke keranjang dengan mudah, nikmati pengiriman cepat, dan berikan feedback untuk pengalaman belanja yang lebih baik.
        </p>
      </Container>
      <Container size="lg" className="mt-16">
        <ol
          role="list"
          className="-mx-3 grid grid-cols-1 gap-y-10 lg:grid-cols-3 lg:text-center xl:-mx-12 xl:divide-x xl:divide-slate-400/20"
        >
          {resources.map((resource) => (
            <li
              key={resource.title}
              className="grid auto-rows-min grid-cols-1 items-center gap-8 px-3 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-1 xl:px-12"
            >
              <div className="relative h-48 overflow-hidden rounded-2xl shadow-lg sm:h-60 lg:h-40">
                <resource.image />
              </div>
              <div>
                <h3 className="text-base font-medium tracking-tight text-slate-900">
                  {resource.title}
                </h3>
                <p className="mt-2 text-sm text-slate-600">
                  {resource.description}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  )
}
