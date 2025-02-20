import dotenv from 'dotenv';

dotenv.config();

export const URLs = {
    homepage: process.env.BASE_URL,
    apiurl: process.env.API_URL,
    
};

export const Text = {
    About: 'About',
    Aboutpage: 'About Arqiva',
    AcceptAll:'Acccept All'
  };
  export const tabs = [
    { menu: 'About', subMenu: 'About Arqiva' },
    { menu: 'Utilities', subMenu: 'Our utilities services' },
    { menu: 'Media', subMenu: 'Our Media Services' },
  ];