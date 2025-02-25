import Icon from '@/icons'
import React from 'react'
import './index.css'

const AppName = () => {
    return (
        <div className='app-name inline-block'>
            <div className=' text-xl font-bold flex items-center'>
                <span>Zesty</span>
                <Icon.Restaurant size={25} className='text-yellow-600' />
                <span>Zone</span>
            </div>
            <p className='restaurent leading-3 uppercase text-[0.6rem] text-center font-bold tracking-widest'>Restaurent</p>
        </div>
    )
}

export default AppName