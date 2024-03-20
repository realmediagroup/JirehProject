'use client'

import { useEffect, useState } from 'react'

const useImageCar = () => {
   let min = 1
   let max = 36
   const [count, setCount] = useState(1)
   const [img, setImg] = useState()
   const add = () => {
      if (count < max) {
         setCount(count + 1)
      } else {
         setCount(min)
      }
   }
   const sub = () => {
      if (count > min) {
         setCount(count - 1)
      } else {
         setCount(max)
      }
   }
   useEffect(() => {
      setImg('/image/car/' + count + '.png')
   }, [count])
   return { img, add, sub }
}

export default useImageCar
