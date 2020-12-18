import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom'
import MyProjectApp from './App';

test('renders learn react link', () => {
  const div = document.createElement('div');
    ReactDOM.render(<MyProjectApp/>,div);
    ReactDOM.unmountComponentAtNode(div);
});
