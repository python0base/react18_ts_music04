import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'

import HYHotAlbum from './c-cpns/hot-album'
import HYTopAlbum from './c-cpns/top-album'
import { AblumWrapper } from './style'

interface IProps {
  children?: ReactNode
}

const Album: FC<IProps> = () => {
  return (
    <AblumWrapper className="wrap-v2">
      <HYHotAlbum />
      <HYTopAlbum />
    </AblumWrapper>
  )
}

export default memo(Album)
