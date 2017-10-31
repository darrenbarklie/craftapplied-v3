import React from 'react'

import LogoBlock from '../../../assets/svg/logo-block-green.svg';
import LogoInline from '../../../assets/svg/logo-inline-green.svg';

export const Brand = () => {
  return (
    <div className="brand">
      <img src={LogoBlock} className="logo-block" alt="Craft Applied logo" />
    </div>
  )
}
