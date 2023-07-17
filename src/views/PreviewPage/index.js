import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import dataControllers from '../../api/user'

function Preview() {
    const prams = useParams()
    const[htmldata,setHtmldata] = useState([])
    useEffect(()=>{
    dataControllers.priviewProposal(prams.id).then((res)=>{
        setHtmldata(res.data.htmldata);
    }) 
    })
  return (
    <div className='preview_Proposal'>


    {htmldata?htmldata.map((c,index)=>(
        <div key={index} className='p-4'>
            <p className='text-2xl font-semibold'>{c.title}</p>
             <div  dangerouslySetInnerHTML={{__html: c.content}}></div>
        </div>
    )):<>
  <main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
        <div className="text-center">
          <p className="text-base font-semibold text-rose-600">404</p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">Page not found</h1>
          <p className="mt-6 text-base leading-7 text-gray-600">Sorry, we couldn’t find the page you’re looking for.</p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="#"
              className="rounded-md bg-gray-900 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Go back home
            </a>
            <a href="#" className="text-sm font-semibold text-gray-900">
              Contact support <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </div>
      </main>
    
    </>}
    </div>
  )
}

export default Preview