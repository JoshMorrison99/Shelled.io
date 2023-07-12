import ReactGA from 'react-ga';

export const initGA = () => {
  console.log('init')
  ReactGA.initialize('G-P3S8Q6NMY4');
};

export const logPageView = () => {
  console.log('viewed')
  ReactGA.set({ page: window.location.pathname });
  ReactGA.pageview(window.location.pathname);
};