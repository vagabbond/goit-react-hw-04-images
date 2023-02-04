import PropTypes from 'prop-types';

import { AiOutlineSearch } from 'react-icons/ai';
import { IconContext } from 'react-icons';
import { useState } from 'react';

import {
  Header,
  SearchForm,
  SearchFormButton,
  SearchFormButtonLabel,
  SearchFormInput,
} from './Searchbar.styled';

const SearchBar = ({ onSubmit }) => {
  const [name, setName] = useState('');
  return (
    <Header>
      <SearchForm
        onSubmit={e => {
          e.preventDefault();
          onSubmit(name);
        }}
      >
        <SearchFormButton type="submit">
          <IconContext.Provider value={{ size: '20' }}>
            <AiOutlineSearch />
          </IconContext.Provider>
          <SearchFormButtonLabel>Search</SearchFormButtonLabel>
        </SearchFormButton>
        <SearchFormInput
          type="text"
          autoComplete="off"
          autoFocus
          value={name}
          onChange={e => setName(e.target.value)}
          placeholder="Search images and photos"
        />
      </SearchForm>
    </Header>
  );
};

export default SearchBar;
// export class SearchBar extends Component {
//   state = {
//     name: '',
//   };
//   hendelChange = event => {
//     this.setState({ name: event.currentTarget.value });
//   };
//   hendelSubmit = event => {
//     event.preventDefault();
//     this.props.onSubmit(this.state.name);
//   };
//   render() {
//     const { name } = this.state;
//     return (
//       <Header>
//         <SearchForm onSubmit={this.hendelSubmit}>
//           <SearchFormButton type="submit">
//             <IconContext.Provider value={{ size: '20' }}>
//               <AiOutlineSearch />
//             </IconContext.Provider>
//             <SearchFormButtonLabel>Search</SearchFormButtonLabel>
//           </SearchFormButton>
//           <SearchFormInput
//             type="text"
//             autoComplete="off"
//             autoFocus
//             value={name}
//             onChange={this.hendelChange}
//             placeholder="Search images and photos"
//           />
//         </SearchForm>
//       </Header>
//     );
//   }
// }

SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
