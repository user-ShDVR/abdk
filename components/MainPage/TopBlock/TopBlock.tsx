import { FC } from 'react'
import cls from './TopBlock.module.scss'
import BgVideo from '@/components/common/Video/BgVideo'

interface TopBlockProps {
}

export const TopBlock: FC<TopBlockProps> = ({ }) => {
    return (
        <div className={cls.TopBlock}>
            <BgVideo />
            <div className={cls.TopBlockHeader}>
                Your <span className={cls.TopBlockGuide}>Guide </span> 
                in the World
                of Crypto
            </div>
            <div className={cls.TopBlockFooter}>
            <div className={cls.TopBlockText}>
                <p className={cls.text}>Audit</p>
                <div className={cls.line}></div>
                <p className={cls.text}>Consulting</p>
                <div className={cls.line}></div>
                <p className={cls.text}>Research</p>
                <div className={cls.line}></div>
                <p className={cls.text}>Evaluation</p>
            </div>
            <div className={cls.TopBlockButton}>
                Contact Us 
                <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
                    <path d="M1.57191 15.7969L15.7821 1.58667M15.7821 1.58667H0.497189M15.7821 1.58667V16.8716" stroke="white" strokeWidth="2.29274" strokeLinejoin="bevel"/>
                </svg>
            </div>
            </div>

        </div>
    )
}