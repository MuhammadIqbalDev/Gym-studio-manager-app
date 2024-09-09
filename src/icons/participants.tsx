import React from 'react'
import { IconProps } from './types'

const ParticipantsIcon: React.FC<IconProps> = ({ size = 24, ...rest }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="black" {...rest}>
    <path
      fill="#241f1f"
      d="M16 11a3 3 0 10-3-3 2.987 2.987 0 003 3zm-8 0a3 3 0 10-3-3 2.987 2.987 0 003 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05A4.22 4.22 0 0117 16.5V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"
      transform="translate(-1 -5)"
    />
  </svg>
)

export default ParticipantsIcon
