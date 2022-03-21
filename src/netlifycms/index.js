import CMS from 'netlify-cms-app';
import LocationPreview from './LocationPreview';
import '@/scss/main.scss';

CMS.init({
  config: {
    backend: {
      name: 'git-gateway',
    },
  },
});

CMS.registerPreviewTemplate('locations', LocationPreview);
