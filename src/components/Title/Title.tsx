import React from 'react';

interface Props {
    text: string
}

const Title: React.FC<Props> = ({text}) => <h1 className="title">{text}</h1>

export default Title;