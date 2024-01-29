import React from 'react'
import { Card, Progress } from 'flowbite-react'
import { SiMega } from 'react-icons/si'
export const Mega = () => {
  return (
    <Card className="rounded-3xl shadow-xl px-5  mx-5 bg-gradient-to-r  from-[#ca1205] via-[#dd1405] to-[#fa3223] opacity-70">
                <SiMega className=" h-36 w-36 invert" />
                <p className="text-2xl -my-2 invert">MEGA</p>
                <Progress progress={90} className="border" color="red" />
                <p className="invert opacity-65">45 GB / 50 GB</p>
              </Card>
  )
}