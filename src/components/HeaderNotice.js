const SpinningText = styled.span`
  display: inline-block;
  animation: spin 1s linear infinite;
  margin-left: 5px;

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`; 