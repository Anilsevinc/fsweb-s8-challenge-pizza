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
    border-bottom: none;
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
    font-size: 34px;
    color: #fdc913;
    font-style: italic;
    margin: 0 0 8px 0;
  }
  h1 {
    font-family: 'Barlow', sans-serif;
    font-size: 60px;
    font-weight: 200;
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
    max-width: 220px;
    border: 1px solid rgba(255, 255, 255, 0.6);
    border-radius: 8px;
    padding: 28px 18px;
    margin-top: 8px;
    font-family: 'Barlow', sans-serif;
    color: #fff;
    box-sizing: border-box;
  }
  .summary h3 {
    font-size: 18px;
    font-weight: 600;
    text-align: center;
    margin: 0 0 20px 0;
  }
  .summary-row {
    display: flex;
    justify-content: space-between;
    margin-bottom: 18px;
  }
  .summary-row.total-row {
    font-weight: 700;
    font-size: 18px;
    margin-top: 16px;
    padding-top: 16px;
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

  /* 480px altında: esnek, taşmayan düzen */
  @media (max-width: 480px) {
    padding-bottom: 32px;

    header {
      min-height: 160px;
      padding: 16px;
    }
    header img {
      max-width: 85%;
    }

    > div {
      width: 100%;
      max-width: 100%;
      padding: 24px 16px;
      box-sizing: border-box;
    }

    .tagline {
      font-size: 28px;
      margin-bottom: 6px;
    }

    h1 {
      font-size: 42px;
      margin-bottom: 20px;
      letter-spacing: 1px;
    }

    hr {
      margin-bottom: 20px;
    }

    h2 {
      font-size: 18px;
      margin-bottom: 20px;
      text-align: center;
    }

    .details {
      width: 100%;
      max-width: 100%;
    }
    .details > div {
      font-size: 14px;
      flex-wrap: wrap;
      gap: 4px;
    }
    .details .value {
      word-wrap: break-word;
      overflow-wrap: break-word;
    }

    .summary {
      width: 100%;
      max-width: 220px;
      padding: 26px 16px;
      margin-top: 8px;
      box-sizing: border-box;
    }
    .summary h3 {
      font-size: 16px;
      margin-bottom: 18px;
    }
    .summary-row {
      font-size: 14px;
      margin-bottom: 16px;
    }
    .summary-row.total-row {
      font-size: 16px;
      margin-top: 14px;
      padding-top: 14px;
    }

    .back-btn {
      width: 100%;
      max-width: 280px;
      margin-top: 20px;
      padding: 14px 20px;
      font-size: 15px;
      box-sizing: border-box;
    }
  }
`
