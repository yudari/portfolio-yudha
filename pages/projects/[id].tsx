/* eslint-disable @next/next/no-css-tags */
import Head from 'next/head'
import Link from 'next/link'
import React from 'react'

const data = [
  {
    _id: 1,
    titleProject: 'Yuvoci Dengan Next JS dan Express JS',
    tahun: 2022,
    desc: 'YuVoci adalah aplikasi FullStack Javascript berbasis web yang dimana user dapat membeli voucher top up game dengan metode yang cepat dan aman Yuvoci dibangun dengan teknologi pada sisi frontend dengan menggunakan framework pada react js yaitu Next JS, kemudian pada sisi backend menggunakan Express JS  untuk pembuatan REST API serta database menggunakan Mongo DB',
    jenisProject: 'website',
    linkProject: 'https://yuvoci.vercel.app/',
    repoProject: 'https://github.com/yudari/yuvoci',
    platformProject: 'web',
    toolsProject:
      'Next JS, React JS, Express JS, Bootstrap 5, JWT Authentication, AOS, MongoDB',
    itemImgPort: [
      '/img/yuvoci-1.png',
      '/img/yuvoci-2.png',
      '/img/yuvoci-3.png',
      '/img/yuvoci-4.png',
      '/img/yuvoci-5.png',
      '/img/yuvoci-6.png',
      '/img/yuvoci-7.png',
      '/img/yuvoci-8.png',
    ],
  },
  {
    _id: 2,
    titleProject: 'Yuban Todo App dengan Drag and Drop',
    tahun: 2022,
    desc: 'Yuban adalah sebuah aplikasi berbasis web yang dimana user dapat mencatat progress atau hal-hal yang ingin dilakukan ke dalam sebuah board. Yuban dibangun dengan framework React JS dan data ToDo disimpan didalam localStorage dan aplikasi ini mengimplementasikan fitur drag and drop menggunakan library DND agar mempermudah user untuk merapikan tugas yang ingin dilakukan kedalam sebuah board',
    jenisProject: 'website',
    linkProject: 'https://yuban.vercel.app/',
    repoProject: 'https://github.com/yudari/yuban',
    platformProject: 'web',
    toolsProject: 'Javascript, localStorage, DnD',
    itemImgPort: ['/img/yuban-1.png', '/img/yuban-2.png', '/img/yuban-3.png'],
  },
]
interface DetailProjectProps {
  _id: number
  titleProject: string
  tahun: string
  desc: string
  jenisProject: string
  linkProject: string
  repoProject: string
  platformProject: string
  toolsProject: string
  itemImgPort: []
}

const DetailProject = ({
  _id,
  titleProject,
  tahun,
  desc,
  jenisProject,
  linkProject,
  repoProject,
  platformProject,
  toolsProject,
  itemImgPort,
}: DetailProjectProps) => {
  return (
    <>
      <main className='main'>
        <div className='section__glob__portfolio container grid'>
          <Link href='/' className='back__home'>
            Home
          </Link>
          <i className='uil uil-angle-double-right icon__blob'></i>
          <span className='title__glob'>{titleProject}</span>{' '}
          <span className='year__glob'>{tahun}</span>
        </div>

        <section className='home section' id='home'>
          <div className='home__container container grid'>
            <p>{desc}</p>
          </div>
          <div className='container__detail__app__stack container'>
            <div className='item__stack'>
              <p>{jenisProject}</p>
              <Link target='_blank' href={`${linkProject}`}>
                {' '}
                {linkProject}{' '}
                <i className='uil uil-external-link-alt icon__stack'></i>
              </Link>
            </div>
            <div className='item__stack'>
              <p>Repository</p>
              <Link target='_blank' href={repoProject}>
                {repoProject}
                <i className='uil uil-external-link-alt icon__stack'></i>
              </Link>
            </div>
            <div className='item__stack'>
              <p>Platform</p>
              <a className='disable__link__stack'>{platformProject}</a>
            </div>
            <div className='item__stack'>
              <p>Tools</p>
              <a className='disable__link__stack'>{toolsProject}</a>
            </div>
          </div>
        </section>

        <section className='item__portfolio__app container'>
          <div className='item__portfolio'>
            {itemImgPort?.map((item: string, index) => {
              return <img key={index} src={`${item}`} alt='item__portfolio' />
            })}
          </div>
        </section>
      </main>
      <footer>
        <p className='footer__copy'>
          &#169; Yudhacode 2022. All right reserved
        </p>
      </footer>
    </>
  )
}

export async function getStaticPaths() {
  const dataProject = data

  const paths = dataProject.map((item) => {
    return {
      params: {
        id: item._id.toString(),
      },
    }
  })
  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params }: any) {
  const { id } = params
  const dataProject = data.filter((item) => item._id == id)

  return {
    props: {
      _id: dataProject[0]._id,
      titleProject: dataProject[0].titleProject,
      tahun: dataProject[0].tahun,
      desc: dataProject[0].desc,
      jenisProject: dataProject[0].jenisProject,
      linkProject: dataProject[0].linkProject,
      repoProject: dataProject[0].repoProject,
      platformProject: dataProject[0].platformProject,
      toolsProject: dataProject[0].toolsProject,
      itemImgPort: dataProject[0].itemImgPort,
    },
  }
}
export default DetailProject
