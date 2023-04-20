import React from 'react'
import {bannerData} from '../../assets/fakeData/banner'
const HomeBanner = () => {
  return (
    <section>
        <div className='px-[15px]'>
            <div className=' tablet:my-[20px] my-[10px] grid tablet:grid-cols-2 grid-cols-1 target:gap-[2%]'>
                {
                    bannerData.map((item,index)=>{
                        return(
                            <a key={index} href={item.href}>
                                <img className=' tablet:my-0 my-[5px]' src={item.src} alt="" />
                            </a>
                        )
                    })
                }
            </div>
        </div>
    </section>
  )
}

export default HomeBanner