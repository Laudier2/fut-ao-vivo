import React, { useEffect, useState } from 'react'
import { API } from '../api'

export default function Index() {

  const [img, setImg] = useState([])
  const [video, setVideo] = useState([])
  const [title, setTitle] = useState([])
  const [data, setData] = useState([])

  useEffect(() => {
    (async () => {
      const req = await API.get("/")
      const res = await req.data.dados

      setData(res)
      setTitle(res.title)
      setVideo(res.video)
      setImg(res.img)
    })()
  }, [])

  const l = JSON.stringify(img)
  const l2 = JSON.parse(l)

  console.log(l2)

  return (
    <div className="container" style={{ marginTop: 110 }}>
      <div>
        <br /><br /><br /><br />
        <div className='card-deck mt-5'>
          <div>
            {img.map((f) => (
              <div key={f} className='card-deck mt-5'>
                {title.map((t) => (
                  <div>
                    {video.map((r) => (
                      <div key={r}>
                        <div className="card">
                          <a href={r}>
                            <img src={f} alt="img" className="mr-4 mt-2" />
                          </a>
                        </div>
                        <div class="card-body">
                          <a href={r}>
                            <h5 className="text-white">{t}</h5>
                          </a>
                          <div />
                        </div>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            ))}
            {/*img.map((f) => (
              <div key={f} className='card-deck mt-5' >
                <div>
                  <div key={f}>
                    <div className="card">
                      <a href={f}>
                        <img src={f} alt="img" className="mr-4 mt-2" />
                      </a>
                    </div>
                    <div class="card-body">
                      <a href={f}>
                        <h5 className="text-white">{f}</h5>
                      </a>
                      <div />
                    </div>
                  </div>
                </div>
              </div>
            ))*/}
          </div>
        </div>


        {/*img.map((f) => (
        <div key={f} className='card-deck mt-5'>
          {title.map((t) => (
            <div>
              {video.map((r) => (
                <div key={r}>
                  <div className="card">
                    <a href={r}>
                      <img src={f} alt="img" className="mr-4 mt-2" />
                    </a>
                  </div>
                  <div class="card-body">
                    <a href={r}>
                      <h5 className="text-white">{t}</h5>
                    </a>
                    <div />
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
              ))*/}

      </div>
    </div >
  )
}
