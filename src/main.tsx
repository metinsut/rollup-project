import ReactDOM from 'react-dom/client'
import App from './app';
import './index.css'

const mount = (el: HTMLElement | Element | null) => {
    const root = ReactDOM.createRoot(el as HTMLElement);
    root.render(<App/>)
};

export {mount};