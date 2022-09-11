import person from '../../images/default-person.png'
import { faGlobe, faPhone, faEnvelope, faBuilding } from "@fortawesome/free-solid-svg-icons"
import { Card, Avatar, StyledFontAwesomeIcon, StyledFontAwesomeContainer, StyledSpan, HighOrderName } from './User.styled';

const User = ({ user }) => {
    return ( 
        <Card>
            
            <Avatar src={person} alt="Default person picture" title='Picture of person' />
            <HighOrderName>Name: { user.name } </HighOrderName>
            <p>Username: { user.username } </p>
            <HighOrderName>Company: { user.company.name } </HighOrderName>
            <p>Catchphrase: { user.company.catchPhrase } </p>

            <StyledFontAwesomeContainer> <StyledFontAwesomeIcon icon={ faEnvelope } /> <StyledSpan> { user.email } </StyledSpan> </StyledFontAwesomeContainer>
            <StyledFontAwesomeContainer> <StyledFontAwesomeIcon icon={ faBuilding } /> <StyledSpan> { user.company.name } </StyledSpan> </StyledFontAwesomeContainer>
            <StyledFontAwesomeContainer> <StyledFontAwesomeIcon icon={ faPhone } /> <StyledSpan> { user.phone } </StyledSpan> </StyledFontAwesomeContainer>
            <StyledFontAwesomeContainer> <StyledFontAwesomeIcon icon={ faGlobe } /> <StyledSpan> { user.website } </StyledSpan> </StyledFontAwesomeContainer>
            
        </Card>
     );
}
 
export default User;