import { Container } from '@/components/Container'
import {
  Expandable,
  ExpandableButton,
  ExpandableItems,
} from '@/components/Expandable'
import { SectionHeading } from '@/components/SectionHeading'

const tableOfContents = {
  'Getting started': {
    'Getting started': 1,
    'Intro to Figma': 15,
    'Setting up your first artboard': 20,
  },
  Fundamentals: {
    'Strokes and fills': 21,
    'End points': 22,
    'Bezier curves': 26,
    'Designing on a grid': 31,
    'Vector shapes': 45,
  },
  'Boolean operations': {
    'Combining shapes': 50,
    'Subtracting shapes': 57,
    'Intersecting shapes': 66,
    Flattening: 78,
  },
  'Optimizing for production': {
    'Preparing for SVG': 82,
    'Configuring your export settings': 88,
    'Minifying and removing metadata': 95,
  },
}

export function TableOfContents() {
  return (
    <section
      id="table-of-contents"
      aria-labelledby="table-of-contents-title"
      className="scroll-mt-14 py-16 sm:scroll-mt-32 sm:py-20 lg:py-32"
    >
      <Container>
        <SectionHeading number="1" id="table-of-contents-title">
          Mengapa Memilih Boutique.id?
        </SectionHeading>
        <p className="mt-8 font-display text-4xl font-bold tracking-tight text-slate-900">
          Temukan Keindahan Batik Indonesia di Boutique.id.
        </p>
        <p className="mt-4 text-lg tracking-tight text-slate-700">
          Nikmati pengalaman berbelanja batik terbaik dengan koleksi eksklusif kami.
          Di Boutique.id, kami menyediakan berbagai pilihan batik elegan dan modern yang tidak hanya memukau secara visual,
          tetapi juga memberikan berbagai manfaat bagi Anda.
        </p>
        <ul className="space-y-4 mt-5">
          <li>
            <h3 className="text-lg font-semibold mb-2">Kualitas Terbaik</h3>
            <p className=" text-lg tracking-tight text-slate-700">Di Boutique.id, kami mengangkat standar kualitas batik dengan memilih bahan terbaik yang tersedia di
              pasaran.</p>
          </li>
          <li>
            <h3 className="text-lg font-semibold mb-2">Desain Eksklusif</h3>
            <p className=" text-lg tracking-tight text-slate-700">Kami bekerja sama dengan para desainer batik terkemuka di Indonesia untuk menciptakan koleksi yang
              eksklusif dan memukau.</p>
          </li>
          <li>
            <h3 className="text-lg font-semibold mb-2">Produk Asli Indonesia</h3>
            <p className=" text-lg tracking-tight text-slate-700">Di Boutique.id, kami berkomitmen untuk mendukung industri batik lokal dan memperkenalkan keindahan budaya
              Indonesia ke seluruh dunia.</p>
          </li>
          <li>
            <h3 className="text-lg font-semibold mb-2">Pelayanan Prima</h3>
            <p className=" text-lg tracking-tight text-slate-700">Kepuasan pelanggan adalah prioritas utama kami di Boutique.id. Tim layanan pelanggan kami siap membantu
              Anda dengan senang hati.</p>
          </li>
        </ul>
        {/*
        <Expandable>
          <ol role="list" className="mt-16 space-y-10 sm:space-y-16">
            <ExpandableItems>
              {Object.entries(tableOfContents).map(([title, pages]) => (
                <li key={title}>
                  <h3 className="font-display text-3xl font-bold tracking-tight text-slate-900">
                    {title}
                  </h3>
                  <ol
                    role="list"
                    className="mt-8 divide-y divide-slate-300/30 rounded-2xl bg-slate-50 px-6 py-3 text-base tracking-tight sm:px-8 sm:py-7"
                  >
                    {Object.entries(pages).map(([title, pageNumber]) => (
                      <li
                        key={title}
                        className="flex justify-between py-3"
                        aria-label={`${title} on page ${pageNumber}`}
                      >
                        <span
                          className="font-medium text-slate-900"
                          aria-hidden="true"
                        >
                          {title}
                        </span>
                        <span
                          className="font-mono text-slate-400"
                          aria-hidden="true"
                        >
                          {pageNumber}
                        </span>
                      </li>
                    ))}
                  </ol>
                </li>
              ))}
            </ExpandableItems>
          </ol>
          <ExpandableButton>See more</ExpandableButton>

        </Expandable>
         */}
      </Container>

    </section>
  )
}
