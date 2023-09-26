"use client"
import React, { useState, useEffect } from 'react';
import cls from './StaticHeader.module.scss'
import logoDesktop from '@/public/logo.svg';
import Image from 'next/image';
import Link from 'next/link';

const StaticHeader = React.memo(() => {

    return (
        <div className={cls.headerStatic}>
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
StaticHeader.displayName = 'StaticHeader';
export default StaticHeader;