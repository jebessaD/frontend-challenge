import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RecoilRoot } from 'recoil';
import App from './app/app';
// In apps/todo/src/main.tsx
import { BrowserRouter } from 'react-router-dom';

const root = createRoot(document.getElementById('root')!);
root.render(
  <StrictMode>
    <BrowserRouter>
      <RecoilRoot>
        <App />
      </RecoilRoot>
    </BrowserRouter>
  </StrictMode>
);