import React from 'react'
import styled from 'styled-components'
import logoSrc from '../../../images/iteration-1-images/logo.svg'

const HeaderWrapper = styled.header`
  width: 100%;
  min-height: 207px;
  background-color: #ce2829;
  border-bottom: 1px solid #c20608;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
`

const HeaderContainer = styled.div`
  width: 530px;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 24px 16px;
`

const Logo = styled.img`
  width: 362px;
  max-width: 100%;
  height: auto;
`

function OrderHeader() {
  return (
    <HeaderWrapper>
      <HeaderContainer>
        <Logo src={logoSrc} alt="Teknolojik Yemekler" />
      </HeaderContainer>
    </HeaderWrapper>
  )
}

export default OrderHeader
