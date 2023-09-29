'use client'
import { FC } from 'react'
import cls from './TopBlock.module.scss'
import Link from 'next/link'
import Image from 'next/image'
import X from '@/public/xMini.svg';
import LinkedIn from '@/public/linkedInMini.svg';
import GhLink from '@/public/GithubMini.svg';
import EmailLink from '@/public/emailLink.svg';
import GetInTouch from '@/public/getInTouch.svg';

interface TopBlockProps {
}

export const TopBlockContact: FC<TopBlockProps> = ({ }) => {
    return (
        <div className={cls.TopBlock}>
            <div className={cls.TopBlockHeader}>
                <h1 className={cls.ApproachHeader}>
                    <Image 
                    src={GetInTouch}
                    alt='get in touch'
                    />
                </h1>
                <div className={`${cls.Evaluation} ${cls.Evaluation1}`}>
                    <Image
                        src={X}
                        alt='X'
                        loading='lazy'
                    />
                    <Link href={"https://x.com/ABDKconsulting?s=20"} className={cls.EvaluationText} target="_blank">
                        Link
                        <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 11 11" fill="none">
                            <path d="M0.703125 10.2969L10 1M10 1H-3.72529e-08M10 1V11" strokeWidth="1.6" strokeLinejoin="bevel" />
                        </svg>
                    </Link>
                </div>
                <div className={`${cls.Evaluation} ${cls.Evaluation2}`}>
                    <Image
                        src={LinkedIn}
                        alt='LinkedIn'
                        loading='lazy'
                    />
                    <Link href={"https://www.linkedin.com/company/abdk-consulting/about/"} className={cls.EvaluationText} target="_blank">
                        Link
                        <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 11 11" fill="none">
                            <path d="M0.703125 10.2969L10 1M10 1H-3.72529e-08M10 1V11" strokeWidth="1.6" strokeLinejoin="bevel" />
                        </svg>
                    </Link>
                </div>
                <div className={`${cls.Evaluation} ${cls.Evaluation3}`}>
                    <Image
                        src={GhLink}
                        alt='GhLink'
                        loading='lazy'
                    />
                    <Link className={cls.EvaluationText} href={'https://github.com/abdk-consulting'} target="_blank" >
                        Link
                        <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 11 11" fill="none">
                            <path d="M0.703125 10.2969L10 1M10 1H-3.72529e-08M10 1V11" strokeWidth="1.6" strokeLinejoin="bevel" />
                        </svg>
                    </Link>
                </div>
                <div className={`${cls.Evaluation} ${cls.Evaluation4}`}>
                    <Image
                        src={EmailLink}
                        alt='EmailLink'
                        loading='lazy'
                    />
                    <div className={cls.EvaluationFooterEmail}>
                        <p>Email</p>
                        <div className={cls.FooterBtn}>
                            <a className={cls.EvaluationFooterEmailLink} href="mailto:dmitry@abdkconsulting.com">dmitry@abdkconsulting.com</a>
                            <button
                                className={cls.EmailCopy}
                                onClick={() => navigator.clipboard.writeText('dmitry@abdkconsulting.com')}
                            >
                                Copy
                            </button>
                        </div>

                    </div>
                </div>
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