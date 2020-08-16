import React, { ReactElement } from 'react';

interface Props {
    text: string,
    size: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6',
    type: 'primary' | 'secondary'
}

const getComponent: (props: Props) => ReactElement = (props) => {
    switch(props.size) {
        case 'h1': return <h1 className={props.type}>{props.text}</h1>
        case 'h2': return <h2 className={props.type}>{props.text}</h2>
        case 'h3': return <h3 className={props.type}>{props.text}</h3>
        case 'h4': return <h4 className={props.type}>{props.text}</h4>
        case 'h5': return <h5 className={props.type}>{props.text}</h5>
        case 'h6': return <h6 className={props.type}>{props.text}</h6>
    }
}

const Title: React.FC<Props> = (props) => {  
    return (
        getComponent(props)
    )
}

export default Title;