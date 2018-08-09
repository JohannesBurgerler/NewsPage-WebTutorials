import React from 'react'
import { Link } from 'react-router'

//const Header = ({ data, user }) => { bu aslında class header ile aynı ama diğerinin statei var ki
//bir stateten diğerine geçebilsin
/*var text = "Latest News"
HandleHover(e) {
 e.fontcolor('black')
hover olduğunda text rengini değiştirmeye çalıştım ama yapamadım
}
HandleExitHover(e){
 e.fontcolor('white')
}*/
class Header extends React.Component {
  constructor () {
    super()

    this.state = {
      isNavOpen: false
    }
  }
  ButtonClicked () {
    this.setState({
      isNavOpen: !this.state.isNavOpen
      //isNavOpen: this.props.isNavOpen ? 'false' : 'true'
      //isNavOpen : this.props.isNavOpen ? 'false' : 'true' ----bu niye olmuyo
    })
  } //  bind(this) neden konulyor öğren
  render () {
    console.log('RENDERING')
    return (
      <div>
        <header>
          <nav className="navbar navbar-expand-lg navbar-light justify-content-between">
            <a className="navbar-header" href='#'><h3>BestNewsChannel</h3></a>
            <button className="navbar-toggler" type="button" onClick={this.ButtonClicked.bind(this)}>
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="navbar-collapse" style={{ display: this.state.isNavOpen ? 'block' : 'none' }}>
              <a className="navbar-brand" href="#"> <h5>Latest News</h5></a>
              <div style={{ display: 'flex' }}>
                <ul className="navbar-nav ">
                  <li className="nav-item1">
                    <Link to="/Message Box" activeclassName="active" className="nav-link" href="#"><h5>Message Box</h5> </Link>
                  </li>
                  <li className="nav-item2">
                    <Link to="/" activeclassName="nav-link" className="nav-link"><h5>Homepage</h5></Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </header>
      </div>
    )
  }
}

export default Header;
/*  import React from 'react'

const Header = ({data, user}) => { // props yerine istediğimiz değişken adı yazabiliriz.
     Ama yine de PageLayouttan title, props olarak gelir
  return (
    <div>
      {data}-{user}
    </div>
  )
}

export default Header;  */
//  ya da Header = (data)
//  let {title,user} = data ------->buradaki title ile pagelayout yani parent componenttaki title smi aynı olması lazım
//  {title}-{user}
