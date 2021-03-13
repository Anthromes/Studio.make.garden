import styled from 'styled-components'
import colors from '../../constants/colors'

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background-color: ${props => (props.isDragActive ? colors.blue : 'transparent')};
  position: relative;
`

export const InactiveWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 15px;
`

export const DropItTextPrimary = styled.p`
  font-size: 30px;
  margin-bottom: 10px;
`
export const DropItTextSecondary = styled.p`
  font-size: 15px;
`

export const ActiveWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${colors.blue};
  color: white;
`

export const UploadButton = styled.button`
  cursor: pointer;
  margin-bottom: 10px;
  color: white;
  background-color: ${colors.blue};
  border: none;
  outline: none;
  display: flex;
  align-items: center;
  padding: 10px 20px;
  padding-right: 40px;
  font-weight: 300;
  transition: background-color 0.2s ease;

  & > svg {
    margin-right: 10px;
    width: 25px;
    height: 25px;
    padding: 5px;
    fill: white;
  }

  &:hover {
    background-color: ${colors.hoverBlue};
  }
`
