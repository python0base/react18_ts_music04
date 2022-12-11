import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import HYRadioCategory from './c-cpns/radio-category'
import HYRadioRecommend from './c-cpns/radio-recommend'
import HYRadioRanking from './c-cpns/radio-ranking'

import { DjRadioWrapper } from './style'

interface IProps {
  children?: ReactNode
}

const Djradio: FC<IProps> = () => {
  return (
    <DjRadioWrapper className="wrap-v2">
      <HYRadioCategory />
      <HYRadioRecommend />
      <HYRadioRanking />
    </DjRadioWrapper>
  )
}

export default memo(Djradio)
