import Head from 'next/head'
import Link  from "next/link";

export default function Home() {
  return (
      <>
      <Head>
      <title>Stack Overflow - Where Developers Learn, Share, & Build Careers</title>
      <meta name="description" content="Stack Overflow is the largest, most trusted online community for developers to learn, share their programming knowledge, and build their careers." />
      <link rel="icon" href="/Stack_Overflow_icon.svg.png" />
    </Head>
    <div>
      <div className='d-flex'>
      <h1 className='flex--item fl1 fs-headline1'>Top Questions</h1>
      <div className="ml12 aside-cta flex--item print:d-none">
      <Link href="/questions/ask">
      <a className='ws-nowrap s-btn s-btn__primary'>Ask Question</a>
      </Link>
      </div>

      <div>
        <div className='flex--item fl1 fs-body3'></div>
        <div className='flex--item'>
          <div className='d-flex s-btn-group js-filter-btn'>
            <a className='js-sort-preference-change flex--item s-btn s-btn__muted s-btn__outlined'>Interesting</a>
            <a className='js-sort-preference-change flex--item s-btn s-btn__muted s-btn__outlined'>Hot</a>
            <a className='js-sort-preference-change flex--item s-btn s-btn__muted s-btn__outlined'>Week</a>
            <a className='js-sort-preference-change flex--item s-btn s-btn__muted s-btn__outlined'>Month</a>
          </div>ç
        </div>
      </div>

      <style jsx>{`
      /* h1 {
        font-size: 2.07692308rem;
        line-height: 1.3;
         margin: 0 0 1em;
         flex: 1 auto !important;
      } */
      .btn {
        margin-left: 1 !important;
      }
      .d-flex {
        display: flex !important;
      }
      `}</style>
      </div>

    </div>
    </>
  )
}
