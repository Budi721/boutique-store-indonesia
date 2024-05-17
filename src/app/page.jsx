import {Author} from '@/components/Author'
import {Footer} from '@/components/Footer'
import {FreeChapters} from '@/components/FreeChapters'
import {Hero} from '@/components/Hero'
import {Introduction} from '@/components/Introduction'
import {NavBar} from '@/components/NavBar'
import {Pricing} from '@/components/Pricing'
import {Resources} from '@/components/Resources'
import {Screencasts} from '@/components/Screencasts'
import {TableOfContents} from '@/components/TableOfContents'
import {Testimonial} from '@/components/Testimonial'
import {Testimonials} from '@/components/Testimonials'
import avatarImage1 from '@/images/avatars/avatar-1.png'
import avatarImage2 from '@/images/avatars/avatar-2.png'
import avatarBlank from '@/images/avatars/avatar-blank.webp'

export default function Home() {
  return (
    <>
      <Hero/>
      <Introduction/>
      <NavBar/>
      <TableOfContents/>
      <Testimonial
        id="testimonial-from-agus-santoso"
        author={{
          name: 'Agus Santoso',
          role: 'Penggemar Batik',
          image: avatarBlank,
        }}
      >
        <p>
          “Boutique.id membantu saya menemukan batik-batik langka yang sulit saya dapatkan di tempat lain. Pengalaman
          berbelanja yang menyenangkan!”
        </p>
      </Testimonial>
      <Screencasts/>
      <Testimonial
        id="testimonial-from-dewi-rahayu"
        author={{
          name: 'Dewi Rahayu',
          role: 'Pembeli Batik',
          image: avatarBlank,
        }}
      >
        <p>
          “Saya sangat senang dengan kualitas batik yang saya beli di Boutique.id. Desainnya unik dan sangat berkualitas
          tinggi.”
        </p>
      </Testimonial>
      <Resources/>
      <FreeChapters/>
      <Pricing/>
      <Testimonials/>
      <section id="author"
               aria-labelledby="author-title" className="p-6 bg-white shadow-lg rounded-lg max-w-2xl mx-auto my-10">
        <p className="mb-2">
          Semua produk batik di <span className="font-semibold">Boutique.id</span> merupakan hasil kerajinan tangan
          pengrajin lokal, sehingga setiap produk memiliki sentuhan unik dan mungkin sedikit berbeda satu sama lain.
        </p>
        <p className="mb-2">
          Pengiriman gratis berlaku untuk wilayah Indonesia dengan pembelian minimal <span
          className="font-semibold">Rp500.000</span>.
        </p>
      </section>
      {/*<Author/>*/}

      <Footer/>
    </>
  )
}
