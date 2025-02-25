"use client"
import { Avatar, Badge, Button, theme, Tooltip } from 'antd'
import { Header as AntHeader } from 'antd/es/layout/layout'
import React from 'react'
import Icon from '@/icons'
import AppName from '../AppName'
import '@/styles/header.css'
import NavLinks from '../NavLinks'
import { useDispatch } from 'react-redux'
import { setAuthModalState } from '@/store/features/auth/authSlice'
import { useRouter } from 'next/navigation'


const Header = () => {
    const router = useRouter();
    const dispatch = useDispatch();
    const {
        // token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

    const handleLoginClick = () => {
        dispatch(setAuthModalState({ open: true, type: 'login' }));  // Open modal and set to login form
    };
    return (
        <AntHeader style={{ width: '100%', background: "#F4EEE0", position: 'sticky', top: 0, zIndex: 999 }}
            className='header flex justify-between items-center !pl-6 !pr-3 md:!pr-0 border-b backdrop-blur-lg'>
            <AppName />

            {/* Menu */}
            <div className="flex-1 flex justify-center">
                <NavLinks />
            </div>

            <div className='flex items-center gap-2'>
                <Tooltip title="Search">
                    <Button type='text' shape="circle" icon={<Icon.Search size={18} />} size={'large'} />
                </Tooltip>
                <Tooltip title="Cart">
                    <Badge count={5} size='small' overflowCount={99} offset={[-5, 5]}>
                        <Button type='text' shape="circle" icon={<Icon.ShoppingBag size={18} />} size={'large'}
                            // className='!w-[35px] !min-w-[35px] !h-[35px] flex justify-center items-center'
                            onClick={() => router.push('/cart')}
                        />
                    </Badge>
                </Tooltip>

                <div className='hidden md:flex items-center gap-1 text-white bg-yellow-600 hover:bg-yellow-500 hover:cursor-pointer rounded-l-full px-1 py-1 pr-2 transition-all'
                    onClick={handleLoginClick}
                >
                    <Avatar size={35} icon={<Icon.User />} className='!bg-lightFg !text-gray-800' />
                    {
                        false ? <Icon.ArrowDown /> : (
                            <div className='uppercase divide-y divide-solid'>
                                <p className='leading-3 font-semibold text-[0.7rem] text-center'>Log In</p>
                                <p className='leading-3 font-semibold text-[0.6rem] text-center'>Sign Up</p>
                            </div>
                        )
                    }
                </div>

                <div className="md:hidden flex items-center">
                    <Tooltip title="Menu">
                        <Button
                            type="text"
                            shape="circle"
                            icon={<Icon.Menu size={24} />}
                            size="large"
                            className="text-gray-700 hover:text-yellow-600"
                        />
                    </Tooltip>
                </div>
            </div>
        </AntHeader>
    )
}

export default Header