import styled from 'styled-components';

export const PageArea = styled.div`
  min-height: 80vh;
  margin-top: 40px;
  
  form {
    max-width: 600px;
    width: 100%;
    margin: 0 auto;
    background-color: #fff;
    border-radius: 3px;
    padding: 10px;
    box-shadow: 0 0 3px #2c3e50;

    button{
      padding: 10px 25px;
      background-color: #3498db;
      color: #fff;
      font-weight: 700;
      border-radius: 8px;
      font-size: 1rem;
      transition: all ease .4s;
      display: inline-block;
      position:relative;
      left: 50%;
      transform: translate(-50%);

      &:hover{
        background-color: #2980b9;
        color:#ccc;
      }
      &:disabled{
        opacity: .5;
        cursor: wait;
      }
    }

    .area {
      max-width: 500px;

      display: flex;
      padding: 10px;
      align-items: center;

      .area-title {
        width: 200px;
        text-align: right;
        font-weight: 700;
        padding-right: 10px;
      }
      .area-input {
        flex: 1;

        input {
          width: 100%;
          height: 30px;
          font-size: 0.8rem;
          padding: 5px;
          border-radius: 4px;
          border: 1px solid #ccc;
          transition: all ease 0.4s;

          &:focus {
            border: 1px solid #333;
            color: #333;
          }
        }
      }
    }
  }
`;
