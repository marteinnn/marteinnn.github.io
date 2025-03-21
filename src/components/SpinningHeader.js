const SpinningHeader = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--background-color);
  z-index: 1000;
  animation: spin 2s ease-in-out forwards;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
      opacity: 1;
    }
    100% {
      transform: rotate(360deg);
      opacity: 0;
    }
  }
`; 