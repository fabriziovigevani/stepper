import React from 'react'
import styled from 'styled-components'

import { ReactComponent as Icon } from '../assets/icon.svg'

export default function Step({ label, date, current }) {
  return (
    <Wrapper active={current}> 
      <IconContainer active={current}>
        <Icon width='24' style={{ fill: 'white !important' }}/>
      </IconContainer>
      <div>
        <Label>{label}</Label>
        <Date>{date}</Date> 
        {current && <Current>current</Current>}
      </div> 
    </Wrapper>
  )
}

const Label = styled.span`
  font-style: normal;
  font-weight: 300;
  font-size: 18px;
  line-height: 23px;
  color: #212B36;
`

const Date = styled.p`
font-style: normal;
font-weight: 300;
font-size: 14px;
line-height: 24px;
color: #637381;
opacity: 0.6;
margin: 0;
`

const Current = styled.span`
  text-transform: Uppercase;
  font-weight: 300;
  font-size: 10px;
  background: rgba(200, 215, 234, 0.4);
  border-radius: 100px;
  padding: 5px 10px;
`

const IconContainer = styled.div`
  background: ${(props) => props.active ? '#8FA4B5' : '#ECEFF4'} ;
  border-radius: 80%;
  padding: 9px;
  height: 24px;
  margin-right: 20px;
  box-sizing: content-box;
  z-index: 2;
`

const Wrapper = styled.div`
  padding: 15px 20px;
  display: flex; 
  align-items: flex-start;
  position: relative;
  background: ${(props) => props.active? '#F9FAFC': ''};

  &:not(:last-child)::after {
    position: absolute;
    content: '';
    width: 1px;
    height: 75%;
    background: #8FA4B5;
    top: 50%;
    left: 40px;
    z-index: 1;
  }
`