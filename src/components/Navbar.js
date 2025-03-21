const Logo = styled.div`
  font-size: 24px;
  font-weight: bold;
  color: var(--accent-color);
  transition: all 0.3s ease;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  transform-origin: center;
  will-change: transform;

  &:hover {
    transform: scale(1.1) rotate(5deg);
    text-shadow: 0 0 10px rgba(74, 144, 226, 0.5);
  }

  span {
    color: var(--text-color);
  }
`; 