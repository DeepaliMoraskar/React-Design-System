import React, { ReactNode } from 'react'
import { FontSize } from '@react.ds/foundation'

export interface TextProps {
    size?: keyof typeof FontSize,
    children?: ReactNode
}

const Text: React.FC<TextProps> = ({ size = FontSize.base, children }) => {
    const className = `dse-text dse-text-${size}`

    return <p className={className}>{children}</p>
}

export default Text