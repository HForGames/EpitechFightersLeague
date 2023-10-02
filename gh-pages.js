import { publish } from 'gh-pages';

publish(
 'build', // path to public directory
 {
  branch: 'gh-pages',
  repo: 'https://github.com/HForGames/EpitechFightersLeague.git', // Update to point to your repository
  user: {
   name: 'Hugo GALAN', // update to use your name
   email: 'hugo.galan8@gmail.com' // Update to use your email
  },
  dotfiles: true
  },
  () => {
   console.log('Deploy Complete!');
  }
);