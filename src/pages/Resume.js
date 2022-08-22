import Container from "react-bootstrap/Container"

const ResumePage = (props) => {
  return (
    <Container className="text-center">
      <h1>Resume</h1>
      <a href={require('../assets/resume/resume.pdf')} download>Click Here to download my resume</a>
    </Container>
  )
}

export default ResumePage