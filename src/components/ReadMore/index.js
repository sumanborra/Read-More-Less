// Write your code here
import {useState} from "react";
import {
  MainContainer,
  Heading,
  HookPara,
  Image,
  CustomButton,
} from './styledComponents'

const ReadMore = props => {
  const[isReadMore, setIsReadMore] = useState(false)
  const changeButton = () =>{
    setIsReadMore(prevIsMore =>!prevIsMore);
  }
  const {reactHooksDescription} = props
  const firstHundredAndSeventy = reactHooksDescription.slice(0, 171)
  const buttonText = isReadMore?"Read Less":"Read More";
  const paraText = isReadMore?reactHooksDescription:firstHundredAndSeventy;
  return (
    <MainContainer>
      <Heading>React Hooks</Heading>
      <HookPara>Hooks are a new addition to React</HookPara>
      <Image
        src="https://assets.ccbp.in/frontend/hooks/react-hooks-img.png"
        alt="react hooks"
      />
      <HookPara>{paraText}</HookPara>
      <CustomButton type="button" onClick={changeButton}>{buttonText}</CustomButton>
    </MainContainer>
  )
}
export default ReadMore
