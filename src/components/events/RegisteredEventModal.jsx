import {
  Button,
  ModalContainer,
  Section,
  TextContainer,
  TextContent,
  TextHead,
  TextHead1,
  TextContainer2
} from './registeredEventModal.styles'
import { Container } from './registerModal.style'
import PropTypes from 'prop-types'

export const RegisteredEventModal = ({ closeModal, isTeamEvent, registerdEvent }) => {
  return (
    <Container>
      <Section>
        <Button onClick={closeModal}>Back</Button>
        <ModalContainer>
          {isTeamEvent ? (
            <div>
              <TextContainer2>
                <TextHead1>TeamName:&nbsp;</TextHead1>
                {registerdEvent.teamName}
              </TextContainer2>
              {registerdEvent.users.map((user, index) => (
                <div key={index}>
                  <TextContainer>
                    <TextHead>{index === 0 ? 'Team Lead:' : `Member ${index + 1}:`}</TextHead>
                    {user.name + ' - ' + user.college}
                  </TextContainer>
                </div>
              ))}
            </div>
          ) : (
            <TextContainer>
              <TextContent>Congratulations you have registered!</TextContent>
            </TextContainer>
          )}
        </ModalContainer>
      </Section>
    </Container>
  )
}

RegisteredEventModal.propTypes = {
  closeModal: PropTypes.func.isRequired,
  isTeamEvent: PropTypes.bool.isRequired,
  eventId: PropTypes.string.isRequired,
  registerdEvent: PropTypes.any
}