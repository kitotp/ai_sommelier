import { type PropsWithChildren } from 'react'

type CardProps = PropsWithChildren<{
    classname?: string;
}>

const Card = ({ children, classname }: CardProps) => {
    return (
        <div className={classname}>
            {children}
        </div>
    )
}

export default Card