import { FC } from 'react'
import cls from './TopBlock.module.scss'
import Link from 'next/link'
import Image from 'next/image'
import Evaluation from '@/public/Evaluation.webp';

interface TopBlockProps {
}

export const TopBlockEvaluation: FC<TopBlockProps> = ({ }) => {
    return (
        <div className={cls.TopBlock}>
            <Image
                src={Evaluation}
                className={cls.TopBlockImage}
                alt='TopBlockImage'
            />
            <div className={cls.TopBlockHeader}>
                <div className={cls.TopBlockContainer}>
                    <div className={cls.purpleLine}></div>
                    <h1 className={cls.Header}>
                        Evaluation
                    </h1>
                    <p className={cls.Text}>
                        Request an evaluation of your
                        project or technology
                    </p>
                </div>

                <Link 
                className={cls.TopBlockButton}
                    href={'/contact'}
                >
                    Request Evaluation
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="13" viewBox="0 0 14 13" fill="none">
                        <path d="M1.58118 12.1562L12.7374 1M12.7374 1H0.737427M12.7374 1V13" strokeWidth="1.8" strokeLinejoin="bevel" />
                    </svg>
                </Link>
            </div>
            <div className={cls.TopBlockFooter}>
                <div className={cls.TopBlockText}>
                    <Link href={'/audit'} className={cls.text}>Audit</Link>
                    <div className={cls.line}></div>
                    <Link href={'/research'} className={cls.text}>Research</Link>
                    <div className={cls.line}></div>
                    <Link href={'/consulting'} className={cls.text}>Consulting</Link>
                    <div className={cls.line}></div>
                    <Link href={'/evaluation'} className={cls.text}>Evaluation</Link>
                </div>
            </div>

        </div>
    )
}