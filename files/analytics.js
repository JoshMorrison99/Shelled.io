import ReactGA from 'react-ga';

export const initGA = () => {
  ReactGA.initialize('G-P3S8Q6NMY4');
};

export const logPageView = () => {
  ReactGA.set({ page: window.location.pathname });
  ReactGA.pageview(window.location.pathname);
};