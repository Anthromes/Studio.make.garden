import styled from 'styled-components'
import colors from '../constants/colors'

export const ProjectSidebar = styled.div`
  width: 20vw;
  height: 100%;
  border-right: 1px solid #eaeaea;
  padding-left: 20px;
  padding-top: 20px;
  overflow-y: auto;
`

export const CanvasArea = styled.div`
  width: 80vw;
  height: 100%;
  padding-bottom: 36px;
  overflow-y: auto;
`

export const ProjectListing = styled.div`
  font-weight: 600;
  font-size: 12px;
  line-height: 13px;
  color: #000000;
  padding: 15px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 62px;

  ${props => props.active && 'background-color: #F0F3F4;'}
`

export const CreateCanvas = styled.div`
  background-color: ${colors.blue};
  border-radius: 3px;
  display: inline-block;
  width: 220px;
  height: 220px;
  padding: 100px 0;
  text-align: center;
  font-weight: 600;
  font-size: 15px;
  line-height: 20px;
  color: #ffffff;
  margin-right: 36px;
  margin-bottom: 36px;
  cursor: pointer;
`

export const Title = styled.span`
  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  line-height: 17px;
  color: #202020;
  padding: 10px;
`

export const CreateButton = styled.button`
  border: 1px solid #000000;
  box-sizing: border-box;
  border-radius: 4px;
  background-color: #fff;
  padding: 10px 30px;
  margin-left: 30px;
  cursor: pointer;
  margin-right: 10px;
`

export const ProjectTitle = styled.div`
  display: inline-block;
  font-style: normal;
  font-weight: 800;
  font-size: 17px;
  line-height: 19px;
  color: #202020;
  text-decoration: underline;
`

export const ProjectsTopBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 36px 36px 0;
`

export const ProjectBarRight = styled.div``

export const CanvasesWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`

export const ProjectSidebarControls = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.7em;
`

export const OtherProjects = styled.div`
  width: 100%;
  border-top: 1px solid #d8dfe5;
  padding: 20px 0 0 36px;
`

export const MyProjects = styled.div`
  width: 100%;
  padding: 24px 0 0 36px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`

export const Wrapper = styled.div`
  margin-right: 36px;
  margin-bottom: 36px;
  text-align: center;
  width: 220px;
  height: 220px;
  display: inline-flex;
  flex-direction: column;
  position: relative;
  background-color: ${props => props.bgColor};
`

export const CanvasesTitle = styled.div`
  font-style: normal;
  font-weight: 600;
  display: block;
  font-size: 12px;
  line-height: 16px;
  width: 100%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`

export const UserName = styled.div`
  font-size: 10px;
  line-height: 14px;
  width: 100%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`

export const ImageWrapper = styled.div`
  display: block;
  position: relative;
  height: 100%;
`

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  width: 100%;
  opacity: 0;
  transition: 0.5s ease;
  background-color: rgba(${colors.rgbaGray});
  ${ImageWrapper}:hover & {
    opacity: 1;
  }
`

export const Icons = styled.div`
  position: absolute;
  display: none;
  top: 0;
  right: 15px;
  padding-top: 4px;
  padding-left: 7px;
  transform: translateY(-26px);
  transition: transform ease-in 0.3s;

  ${ImageWrapper}:hover & {
    display: block;
    transform: translateY(0px);
  }
`

export const InfoOverlay = styled.div`
  text-align: left;
  position: absolute;
  bottom: 0;
  padding: 10px 12px;
  width: 100%;
  color: ${props => (props.bgColor ? '#ffffff' : '#000000')};
  background-color: ${props => (props.bgColor ? 'rgba(0, 0, 0, 0.6)' : 'rgba(77, 161, 255, 0.6)')};
`

export const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`

export const ErrorText = styled.div`
  color: red;
  font-size: 12px;
`
