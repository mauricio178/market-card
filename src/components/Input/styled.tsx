import styled from 'styled-components'

export const Container = styled.div`
  padding: 1rem;
  border-radius: 4px;
  width: 100%;
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1em;
  border: 1px solid transparent;
  background: var(--primary-color);
  
  input {
    border: 1px solid transparent;
    font-family: sans-serif;
    font-size: 16px;
    margin-left: 8px;
    font-weight: 600;
    color: var(--text-color);
    background: transparent;
    flex: 1;
    &:focus {
    border: 1px solid transparent;
    outline: 0;
    transition: .8s;
  }
}
`;