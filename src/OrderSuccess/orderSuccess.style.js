import styled from 'styled-components'

export const SuccessPage = styled.section`
  width: 100%;
  min-height: 100vh;
  background-color: #ce2829;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  padding-bottom: 48px;

  header {
    width: 100%;
    min-height: 207px;
    background-color: #ce2829;
    border-bottom: 1px solid #c20608;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  header img {
    width: 362px;
    max-width: 90%;
    height: auto;
  }

  > div {
    width: 530px;
    max-width: 100%;
    padding: 32px 16px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .tagline {
    font-family: 'Satisfy', cursive;
    font-size: 28px;
    color: #fdc913;
    font-style: italic;
    margin: 0 0 8px 0;
  }
  h1 {
    font-family: 'Barlow', sans-serif;
    font-size: 42px;
    font-weight: 700;
    color: #fff;
    text-transform: uppercase;
    margin: 0 0 24px 0;
  }
  hr {
    width: 100%;
    border: none;
    border-top: 1px solid rgba(255, 255, 255, 0.5);
    margin: 0 0 24px 0;
  }
  h2 {
    font-family: 'Barlow', sans-serif;
    font-size: 20px;
    font-weight: 600;
    color: #fff;
    margin: 0 0 24px 0;
  }
  .details > div {
    display: flex;
    gap: 8px;
    margin-bottom: 12px;
    font-family: 'Barlow', sans-serif;
    font-size: 16px;
    color: #fff;
  }
  .details .value {
    font-weight: 600;
  }
  .summary {
    width: 100%;
    max-width: 400px;
    border: 1px solid rgba(255, 255, 255, 0.6);
    border-radius: 8px;
    padding: 24px;
    margin-top: 8px;
    font-family: 'Barlow', sans-serif;
    color: #fff;
  }
  .summary h3 {
    font-size: 18px;
    font-weight: 600;
    text-align: center;
    margin: 0 0 16px 0;
  }
  .summary-row {
    display: flex;
    justify-content: space-between;
    margin-bottom: 8px;
  }
  .summary-row.total-row {
    font-weight: 700;
    font-size: 18px;
    margin-top: 12px;
    padding-top: 12px;
    border-top: 1px solid rgba(255, 255, 255, 0.4);
  }
  .back-btn {
    margin-top: 24px;
    padding: 12px 24px;
    font-family: 'Barlow', sans-serif;
    font-weight: 600;
    font-size: 16px;
    color: #292929;
    background: #fdc913;
    border: none;
    border-radius: 50px;
    cursor: pointer;
  }
`
