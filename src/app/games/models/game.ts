export class Game {
  id: string = '';
  slug: string = '';
  title: string = '';
  tag: string = '';
  providerName: string = '';
  startUrl: string = '';
  thumb: {
    url: string;
    title: string;
  } = {
    url: '',
    title: '',
  };
}
