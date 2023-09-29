import { FC } from 'react'
import Link from 'next/link'
import React from 'react'
import cls from './Request.module.scss'



interface RequestProps {
}

export const RequestConsulting: FC<RequestProps> = ({ }) => {
    return (
        <div className={cls.Request}>
            <h1 className={cls.Header}>
                How to request Consulting?
            </h1>
            <div className={cls.RequestItems}>
                <div className={cls.Line1}></div>
                <div className={cls.Line2}></div>
                <div className={cls.Line3}></div>
                <div className={cls.Line4}></div>
                <div className={cls.Line5}></div>
                <div className={`${cls.item} ${cls.item1}`}>
                    <p>1</p>
                    <p>Explain your problem over a quick call</p>
                </div>
                <div className={`${cls.item} ${cls.item2}`}>
                    <p>2</p>
                    <p>Get a quote on consultation</p>
                </div>
                <div className={`${cls.item} ${cls.item3}`}>
                    <p>3</p>
                    <p>Pay a deposit</p>
                </div>
            </div>
            <div className={cls.RequestBtnContainer}>
                <p className={cls.RequestAuditText}>
                    We will make it fast and furious, just like in a movie
                </p>
                <Link
                    href={'/contact'}
                    className={cls.RequestBtn}
                >
                    Request Consulting
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="13" viewBox="0 0 14 13" fill="none">
                        <path d="M1.58118 12.1562L12.7374 1M12.7374 1H0.737427M12.7374 1V13" stroke="black" strokeWidth="1.8" strokeLinejoin="bevel" />
                    </svg>
                </Link>
            </div>
        </div>
    )
}