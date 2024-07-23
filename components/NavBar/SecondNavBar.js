import React from 'react'
import secondNavBar from '@/ultilities/navBarObj'


export default function SecondNavBar() {
  return (
    <div className={`flex flex-row items-center  h-[50px] justify-around text-white bg-blue-950/50 font-medium tracking-wider`}>
      {
        secondNavBar.map((mainItem, index) => (
          <div key={`mainItem ${index}`} className='relative cursor-pointer hover:text-green-300 group'>
            <div>{mainItem.name}</div>
            <div className={`absolute top-[100%] -left-[200px] bg-white text-black invisible group-hover:visible group-hover:block`}>
              <div className={`grid ${mainItem.numCols === "13" ? "grid-rows-13" : "grid-rows-5"}  grid-flow-col `}>
                {
                  mainItem.submenu.map((subItem, i) => (
                    <div key={`submenu ${i}`} className={`flex flex-row h-[30px] items-center space-x-2 ${(subItem.textColor == "red") && "text-red-700"} w-[150px] p-1 hover:text-purple-600`}>
                      <span className='h-[12px] w-[12px]'>{subItem.icon}</span>
                      <span>{subItem.name}</span>

                    </div>
                  ))
                }
              </div>
            </div>
          </div>
        ))
      }
    </div>
  )
}
