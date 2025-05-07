import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import { HelloWorld } from './app/hello-world';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <StrictMode>
    <HelloWorld />
  </StrictMode>
);
