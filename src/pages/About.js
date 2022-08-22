import Container from "react-bootstrap/Container"

const AboutPage = (props) => {
  return (
    <Container className="text-center">
      <h1>About Me</h1>
      <img src={require('../assets/images/headshot.jpg')} alt="Nick's headshot" className="headshot"/>
      <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam recusandae tenetur, laborum quis 
      iste maiores quasi impedit cupiditate vero reprehenderit fugit repellendus doloremque aliquam. Quidem debitis ipsa optio magni. Fugit.
      </p>
    </Container>
  )
}

export default AboutPage