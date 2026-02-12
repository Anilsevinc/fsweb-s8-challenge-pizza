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
  height: 207px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
`

const LogoWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-bottom: 32px;
`

const Logo = styled.img`
  width: 362px;
  max-width: 100%;
  height: auto;
`

const Nav = styled.nav`
  display: flex;
  gap: 4px;
  align-items: center;
  justify-content: flex-start;
  height: 29px;
  width: 100%;
`

const NavButton = styled.button`
  background: transparent;
  border: none;
  color: #ffffff;
  font-family: 'Barlow', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI',
    sans-serif;
  font-size: 14px;
  cursor: pointer;
  padding: 4px 8px;

  &:hover {
    text-decoration: underline;
  }
`

const BoldNavButton = styled(NavButton)`
  font-weight: bold;
`

const Separator = styled.span`
  color: #ffffff;
`

function OrderHeader({ onNavigateHome }) {
  return (
    <HeaderWrapper>
      <HeaderContainer>
        <LogoWrapper>
          <Logo src={logoSrc} alt="Teknolojik Yemekler" />
        </LogoWrapper>
        <Nav>
          <NavButton type="button" onClick={onNavigateHome}>Anasayfa</NavButton>
          <Separator>-</Separator>
          <NavButton type="button">Seçenekler</NavButton>
          <Separator>-</Separator>
          <BoldNavButton type="button">Sipariş Oluştur</BoldNavButton>
        </Nav>
      </HeaderContainer>
    </HeaderWrapper>
  )
}

export default OrderHeader
