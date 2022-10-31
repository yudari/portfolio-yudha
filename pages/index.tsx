import Head from 'next/head'
import Link from 'next/link'
import Script from 'next/script'
export default function Home() {
  return (
    <>
      <Head>
        <title>Portfolio - Yudha</title>
        <meta name='description' content='Berisi portfolio saya' />
        <meta property='og:title' content='Portfolio - Yudha' />
        <meta property='og:description' content='Berisi portfolio saya' />
        <meta property='og:image' content='https://imageurl' />
        <meta property='og:url' content='https://portfolio-yudha.vercel.app' />
      </Head>
      <header className='header' id='header'>
        <nav className='nav container'>
          <a href='#' className='nav__logo'>
            Yudha
          </a>
          <div className='nav__menu' id='nav-menu'>
            <ul className='nav__list grid'>
              <li className='nav__item'>
                <a href='#about' className='nav__link active-link'>
                  <i className='uil uil-user nav__icon'></i> About
                </a>
              </li>
              <li className='nav__item'>
                <a href='#portfolio' className='nav__link'>
                  <i className='uil uil-scenery nav__icon'></i> Portfolio
                </a>
              </li>
              <li className='nav__item'>
                <a href='#skills' className='nav__link'>
                  <i className='uil uil-scenery nav__icon'></i> Skills
                </a>
              </li>
            </ul>
            <i className='uil uil-times nav__close' id='nav-close'></i>
          </div>
          <div className='nav__btns'>
            <Link href='https://github.com/yudari' target='_blank'>
              <i className='uil uil-github icon__about'></i>
            </Link>

            <div className='nav__toggle' id='nav-toggle'>
              <i className='uil uil-apps'></i>
            </div>
          </div>
        </nav>
      </header>
      <main>
        <section className='about section' id='about'>
          <h2 className='section__title'>Halo, Saya Yudha Satria</h2>
          <span className='section__subtitle'>Web Developer</span>

          <div className='about__container container grid'>
            <img src='/img/foto-diri.JPG' alt='' className='about__img' />

            <div className='about__data'>
              <p className='about__description'>
                <span className='about__description__par'>
                  Saya adalah lulusan dari perguruan tinggi dengan gelar sarjana
                  komputer di bidang Teknik Informasi. Saya sangat menyukai
                  hal-ha mengenai IT dan pemrograman. Saya seorang programmer
                  energik yang terampil dalam menggunakan HTML, CSS, Javascript
                  dan menggunakan framework seperti React JS dan Express untuk
                  membangun aplikasi web. Di waktu luang, saya belajar dan
                  mempelajari teknologi web yang terbaru dengan membuat dan
                  mengembangkan proyek pribadi, membaca novel dan mendengarkan
                  lagu.
                </span>
              </p>

              <div className='about__buttons'>
                <a href='/pdf/Alexa-Cv.pdf' className='button button--flex'>
                  Download CV
                  <i className='uil uil-download-alt button__icon'></i>
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className='portfolio section' id='portfolio'>
          <h2 className='section__title'>Portfolio</h2>
          <span className='section__subtitle'>Project Terbaru</span>

          <div className='portfolio__container container swiper-container'>
            <h4 className='header__portfolio__project'>Projek</h4>
            <div className='container__portfolio__project'>
              <div className='kotak__item__portfolio'>
                <div className='box__image__portfolio'>
                  <img src='/img/yuvoci-1.png' alt='' />
                </div>
                <div className='container__item__portfolio'>
                  <h1 className='header__item__portfolio'>YuVoci</h1>
                  <p className='desc__item__portfolio'>
                    YuVoci adalah aplikasi berbasis web yang dimana user dapat
                    membeli voucher top up game. aplikasi ini adalah project
                    akhir yang saya buat pada matkul pemrograman web.
                  </p>
                  <Link
                    href={`/projects/${1}`}
                    className='btn__item__portfolio'
                  >
                    Lihat Detail <i className='uil uil-angle-double-right'></i>
                  </Link>
                </div>
              </div>
              <div className='kotak__item__portfolio'>
                <div className='box__image__portfolio'>
                  <img src='/img/yuban-1.png' alt='' />
                </div>
                <div className='container__item__portfolio'>
                  <h1 className='header__item__portfolio'>Yuban</h1>
                  <p className='desc__item__portfolio'>
                    Yuban adalah sebuah aplikasi drag and drop yang dimana user
                    dapat mencatat progress atau hal-hal yang ingin dilakukan
                    dan memasukkannya ke dalam sebuah board.
                  </p>
                  <Link
                    href={`/projects/${2}`}
                    className='btn__item__portfolio'
                  >
                    Lihat Detail <i className='uil uil-angle-double-right'></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className='skills section' id='skills'>
          <h2 className='section__title'>My Skills</h2>
          <span className='section__subtitle'>
            Kemampuan yang saya kuasai dalam bidang pemrograman
          </span>

          <div className='skills__container container grid'>
            <div className='skills__icons icons__top'>
              <img src='/img/html5.png' alt='skill__icon' />
              <img src='/img/css3.png' alt='skill__icon' />
              <img src='/img/javascript.png' alt='skill__icon' />
              <img src='/img/php.png' alt='skill__icon' />
            </div>
            <div className='skills__icons icons__bottom'>
              <img src='/img/react.png' alt='skill__icon' />
              <img src='/img/Next_js.png' alt='skill__icon' />
              <img src='/img/express.png' alt='skill__icon' />
              <img src='/img/mongodb.png' alt='skill__icon' />
              <img src='/img/mysql.png' alt='skill__icon' />
            </div>
          </div>
        </section>
      </main>

      <footer className='footer' id='footer'>
        <div className='footer__bg'>
          <p className='footer__copy'>
            &#169; Yudhacode 2022. All right reserved
          </p>
        </div>
      </footer>

      <a href='#about' className='scrollup' id='scroll-up'>
        <i className='uil uil-arrow-up scrollup__icon'></i>
      </a>
    </>
  )
}
