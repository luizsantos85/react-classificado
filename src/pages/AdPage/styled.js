import styled from 'styled-components';

export const Fake = styled.div`
  background-color: #ddd;
  border-radius: 5px;
  height: ${(props) => props.height || 20}px;
  animation: animaFake 3s linear infinite;

  @keyframes animaFake {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

export const PageArea = styled.div`
  min-height: 85vh;
  margin-top: 40px;
  display: flex;

  .box {
    background-color: #fff;
    border-radius: 5px;
    box-shadow: 0 0 4px #999;
    margin-bottom: 20px;
    padding: 2%;
  }

  .left-side {
    flex: 1;
    margin-right: 20px;

    .ad-image {
    }
    .ad-info {
      .ad-name {
        margin: 20px 0;
      }
      .ad-description {
      }
    }
  }

  .right-side {
    width: 250px;
  }
`;
