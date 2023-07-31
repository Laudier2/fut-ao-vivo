import React, { useEffect, useState } from 'react'
import { API } from '../api'

export default function Index() {

  const [img, setImg] = useState([])
  const [video, setVideo] = useState([])
  const [title, setTitle] = useState([])

  useEffect(() => {
    (async () => {
      const req = await API.get("/")
      const res = await req.data.dados

      setTitle(res.title)
      setImg(res.imagem)
      setVideo(res.video)
    })()
  }, [])

  console.log(img)

  return (
    <div className="" style={{ marginTop: 110 }}>
      <div>
        <br /><br />
        {img == false ? <div className="container">
          <h1>A api não estar fornecendo os dados corretamente!</h1>
        </div> :
          <div className='card-deck col-sm-12'>
            <div>
              <div className='row row-cols-1 row-cols-md-2 g-4'>
                <div className="card bg-dark">
                  <a href={video[0]}>
                    <img src={img[0]} alt="img" className='col-sm-12' />
                  </a>
                  <div className="card-body bg-dark">
                    <a href={video[0]}>
                      <h5 className="text-white">{title[0]}</h5>
                    </a>
                    <div />
                  </div>
                </div>
                <div className="card bg-dark">
                  <a href={video[1]}>
                    <img src={img[1]} alt="img" className='col-sm-12' />
                  </a>
                  <div className="card-body bg-dark">
                    <a href={video[1]} className='bg-dark'>
                      <h5 className="text-white">{title[1]}</h5>
                    </a>
                    <div />
                  </div>
                </div>
                <div className="card bg-dark">
                  <a href={video[2]}>
                    <img src={img[2]} alt="img" className='col-sm-12' />
                  </a>
                  <div className="card-body bg-dark">
                    <a href={video[2]} className='bg-dark'>
                      <h5 className="text-white">{title[2]}</h5>
                    </a>
                    <div />
                  </div>
                </div>
                <div className="card bg-dark">
                  <a href={video[3]}>
                    <img src={img[3]} alt="img" className='col-sm-12' />
                  </a>
                  <div className="card-body bg-dark">
                    <a href={video[3]} className='bg-dark'>
                      <h5 className="text-white">{title[3]}</h5>
                    </a>
                    <div />
                  </div>
                </div>

              </div>
              <div className='row row-cols-1 row-cols-md-2 g-4'>
                <div className="card bg-dark">
                  <a href={video[4]}>
                    <img src={img[4]} alt="img" className='col-sm-12' />
                  </a>
                  <div className="card-body bg-dark">
                    <a href={video[4]}>
                      <h5 className="text-white">{title[4]}</h5>
                    </a>
                    <div />
                  </div>
                </div>
                <div className="card bg-dark">
                  <a href={video[5]}>
                    <img src={img[5]} alt="img" className='col-sm-12' />
                  </a>
                  <div className="card-body bg-dark">
                    <a href={video[5]} className='bg-dark'>
                      <h5 className="text-white">{title[5]}</h5>
                    </a>
                    <div />
                  </div>
                </div>
                <div className="card bg-dark">
                  <a href={video[6]}>
                    <img src={img[6]} alt="img" className='col-sm-12' />
                  </a>
                  <div className="card-body bg-dark">
                    <a href={video[6]} className='bg-dark'>
                      <h5 className="text-white">{title[6]}</h5>
                    </a>
                    <div />
                  </div>
                </div>
                <div className="card bg-dark">
                  <a href={video[7]}>
                    <img src={img[7]} alt="img" className='col-sm-12' />
                  </a>
                  <div className="card-body bg-dark">
                    <a href={video[7]} className='bg-dark'>
                      <h5 className="text-white">{title[7]}</h5>
                    </a>
                    <div />
                  </div>
                </div>

              </div>
              <div className='row row-cols-1 row-cols-md-2 g-4'>
                <div className="card bg-dark">
                  <a href={video[8]}>
                    <img src={img[8]} alt="img" className='col-sm-12' />
                  </a>
                  <div className="card-body bg-dark">
                    <a href={video[8]}>
                      <h5 className="text-white">{title[8]}</h5>
                    </a>
                    <div />
                  </div>
                </div>
                <div className="card bg-dark">
                  <a href={video[9]}>
                    <img src={img[9]} alt="img" className='col-sm-12' />
                  </a>
                  <div className="card-body bg-dark">
                    <a href={video[9]} className='bg-dark'>
                      <h5 className="text-white">{title[9]}</h5>
                    </a>
                    <div />
                  </div>
                </div>
                <div className="card bg-dark">
                  <a href={video[10]}>
                    <img src={img[10]} alt="img" className='col-sm-12' />
                  </a>
                  <div className="card-body bg-dark">
                    <a href={video[10]} className='bg-dark'>
                      <h5 className="text-white">{title[10]}</h5>
                    </a>
                    <div />
                  </div>
                </div>
                <div className="card bg-dark">
                  <a href={video[11]}>
                    <img src={img[11]} alt="img" className='col-sm-12' />
                  </a>
                  <div className="card-body bg-dark">
                    <a href={video[11]} className='bg-dark'>
                      <h5 className="text-white">{title[11]}</h5>
                    </a>
                    <div />
                  </div>
                </div>

              </div>
              <div className='row row-cols-1 row-cols-md-2 g-4'>
                <div className="card bg-dark">
                  <a href={video[12]}>
                    <img src={img[12]} alt="img" className='col-sm-12' />
                  </a>
                  <div className="card-body bg-dark">
                    <a href={video[12]}>
                      <h5 className="text-white">{title[12]}</h5>
                    </a>
                    <div />
                  </div>
                </div>
                <div className="card bg-dark">
                  <a href={video[13]}>
                    <img src={img[13]} alt="img" className='col-sm-12' />
                  </a>
                  <div className="card-body bg-dark">
                    <a href={video[13]} className='bg-dark'>
                      <h5 className="text-white">{title[13]}</h5>
                    </a>
                    <div />
                  </div>
                </div>
                <div className="card bg-dark">
                  <a href={video[14]}>
                    <img src={img[14]} alt="img" className='col-sm-12' />
                  </a>
                  <div className="card-body bg-dark">
                    <a href={video[14]} className='bg-dark'>
                      <h5 className="text-white">{title[14]}</h5>
                    </a>
                    <div />
                  </div>
                </div>
                <div className="card bg-dark">
                  <a href={video[15]}>
                    <img src={img[15]} alt="img" className='col-sm-12' />
                  </a>
                  <div className="card-body bg-dark">
                    <a href={video[15]} className='bg-dark'>
                      <h5 className="text-white">{title[15]}</h5>
                    </a>
                    <div />
                  </div>
                </div>
              </div>
            </div>
          </div>}
      </div>
    </div>
  )
}
