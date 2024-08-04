import React from 'react'
import { useState, useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
  const data = useLoaderData()

  //   const [data, setdata] = useState([])

  //   useEffect(() => {
  //     fetch('https://api.github.com/users/ajaySingh2615')
  //       .then((res) => res.json())
  //       .then((data) => {
  //         console.log(data)
  //         setdata(data)
  //       })
  //   }, [])

  return (
    <div className="text-center m-4 bg-gray-700 text-white p-4 text-3xl">
      Github followers: {data.followers}
      <img src={data.avatar_url} alt="github avatar" width={300} />
    </div>
  )
}

export default Github

export const githubInfoLoader = async () => {
  const response = await fetch('https://api.github.com/users/ajaySingh2615')
  return response.json()
}
