import React from 'react';

interface Props { text: string }

const Subtitle: React.FC<Props> = ({text}) => <h6 className="subtitle">{text}</h6>

export default Subtitle;