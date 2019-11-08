import React from 'react'
import styled from 'styled-components';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
const Nav1 = styled.nav`
display:flex;
justify-content: space-evenly;

`

export default class NavMenu extends React.Component {
    constructor(props) {
      super(props);
  
      this.toggle = this.toggle.bind(this);
      this.state = {
        dropdownOpen: false
      };
    }
  
    toggle() {
      this.setState({
        dropdownOpen: !this.state.dropdownOpen
      });
    }
  
    render() {
      return (
        <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
          <DropdownToggle caret>
            Menu
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem href='https://www.nasa.gov'>Nasa</DropdownItem>
            <DropdownItem href='https://api.nasa.gov/'>Nasa API</DropdownItem>
            <DropdownItem>About</DropdownItem>
            <DropdownItem divider />
            <DropdownItem>Another Action</DropdownItem>
          </DropdownMenu>
        </ButtonDropdown>
      );
    }
  }
 

// const NavMenu = () => {

//     return (
//         <div>

//             <Nav1>
//                 <a href='Home'>Home</a>
//                 <a href='More Stars'>More Stars</a>
//                 <a href='About'>About</a>
//             </Nav1>

//         </div>

//     )
// }
// export default NavMenu;