"use client"
import React, { useState, useEffect } from 'react';
import cls from './Header.module.scss'
import logoDesktop from '@/public/logo.svg';
import Image from 'next/image';
import Link from 'next/link';
import { classNames } from '@/components/lib/classNames/classNames';

const Header = React.memo(() => {
    const [isHeaderFixed, setIsHeaderFixed] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 800) {
                setIsHeaderFixed(true);
            } else {
                setIsHeaderFixed(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (

        <div className={classNames(cls.headerFixed, { [cls.visible]: isHeaderFixed }, [])}>
            <div className={cls.headerContent}>
                <Image
                    src={logoDesktop}
                    alt={'ADKB'}
                    loading="lazy"
                />
                <div className={cls.headerLinks}>
                    <Link className={cls.link} href={'a'}>Home</Link>
                    <Link className={cls.link} href={'a'}>About us</Link>
                    <Link className={cls.link} href={'a'}>Contact</Link>
                </div>
            </div>
        </div>
    );

});
Header.displayName = 'Header';
export default Header;