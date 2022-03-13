import '@/scss/main.scss';
import './globals';
import README from './README.md';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  notes: { Introduction: README, 'How to?': 'test' },
  backgrounds: {
    default: 'Light',
    values: [
      { name: 'Light', value: '#fff' },
      // Same as our brand #161843e6 or rgba(22, 24, 67, .9) on white
      { name: 'Background', value: '#161843' },
      { name: 'Dark', value: '#101522' },
      { name: 'Darkest', value: '#040919' },
    ],
  },
};
