

const PortfolioPage = (props) => {
  return (
    <main className="text-center container-fluid">
      <h1>Portfolio</h1>
      <section className="row">
        <div className="project col-12 col-lg-6">
          <h3>ListenIn</h3>
          <img src={require('../assets/images/listenIn.png')} alt="ListenIn preview"/>
          <br/>
          <a href="https://listeninlistenin.herokuapp.com/" className="m-2">Live Site</a>
          <a href="https://github.com/nickrearl/ListenIn">GitHub Repo</a>
        </div>
        <div className="project col-12 col-lg-6">
          <h3>Casting director</h3>
          <img src={require('../assets/images/casting-director.png')} alt="Casting Director preview"/>
          <br/>
          <a href="https://nickrearl.github.io/podcast-project/" className="m-2">Live Site</a>
          <a href="https://github.com/nickrearl/podcast-project ">GitHub Repo</a>
        </div>
        <div className="project col-12 col-lg-6">
          <h3>Weather Dashboard</h3>
          <img src={require('../assets/images/weather-dash-board.png')} alt="Weather Dashboard preview"/>
          <br/>
          <a href="https://nickrearl.github.io/weather-dashboard/" className="m-2">Live Site</a>
          <a href="https://github.com/nickrearl/weather-dashboard">GitHub Repo</a>
        </div>
        <div className="project col-12 col-lg-6">
          <h3>Daily Scheduler</h3>
          <img src={require('../assets/images/daily-scheduler.png')} alt="daily scheduler preview"/>
          <br/>
          <a href="https://nickrearl.github.io/daily-scheduler/" className="m-2">Live Site</a>
          <a href="https://github.com/nickrearl/daily-scheduler">GitHub Repo</a>
        </div>
      </section>
    </main>
  )
}

export default PortfolioPage