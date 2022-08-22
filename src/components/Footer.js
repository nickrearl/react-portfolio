
import Container from "react-bootstrap/Container"

const Footer = (props) => {
  return (
    <Container className="text-center footer">
      <a href="mailto:nick.r.earl@gmail.com" target="_blank" rel="noreferrer" className="m-1 p-1">
        <img src={require('../assets/images/email.png')} alt="email icon"/>
      </a>

      <a href="https://github.com/nickrearl" target="_blank" rel="noreferrer" className="m-1 p-1">
        <img src={require("../assets/images/github-icon.png")} alt="git hub icon"/>
      </a>

      <a href="https://www.instagram.com/fakenickearl/" target="_blank" rel="noreferrer" className="m-1 p-1">
        <img src={require("../assets/images/instagram-icon.png")} alt="instagram icon"/>
      </a>
    </Container>
  )
}

export default Footer
