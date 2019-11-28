import React, { useState } from 'react';
import styled from 'styled-components'

import { Button, Main } from '@aragon/ui'

import Step  from './components/Step'
import timeline from './timeline'

function App() {

  const [current, setCurrent] = useState(0)

  return (
    <Main>
      <div style={{ margin: '100px auto', width: '300px' }}>
        <Wrapper>
          {timeline.map((step, index) => {
            return <Step key={index} {...step} current={index === current}/>
          })}
        </Wrapper>
        <div>
          <Button onClick={() => setCurrent(current - 1)} disabled={current === 0}>Previous</Button>
          <Button onClick={() => setCurrent(current + 1)} disabled={current === timeline.length - 1}>Next</Button>
        </div>
      </div>
    </Main>
  );
}

const Wrapper = styled.div`
  width: 300px;
  background: white;
  box-shadow: 0px 0px 3px 1px rgb(206,206,206,0.4);
  border-radius: 6px;
  z-index: 1;
  position: relative;
  margin-bottom: 16px;
`

export default App;
