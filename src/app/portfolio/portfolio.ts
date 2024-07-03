export interface portfolio {
    name: string;
    description: string;
    picture_portfolio: string;
    button: string;
  }
  
  export const PORTFOLIO: portfolio[] = [
    { name: 'Nasi Rice Trading', description: 'Wordpress', picture_portfolio: '/assets/nasi.jpg' , button: ''},
    { name: 'University Research Office (EMS)', description: 'Angular, Laravel, MySql', picture_portfolio: '/assets/uro.jpg' , button: 'https://hauresearchoffice.com/account/login'},
    { name: 'Resto Search', description: 'Html, CSS, JavaScript, No-Sql', picture_portfolio: '/assets/resto.png' , button: ''},
    { name: 'Izakaya Island', description: 'Html, CSS, TypeScript, Angular', picture_portfolio: '/assets/izakaya.jpg' , button: 'https://angular-midterm-exams-fqtzzs-16ckeu.stackblitz.io/home'},
    { name: 'The Bakery', description: 'Figma, UI/UX', picture_portfolio: '/assets/thebakery.jpg' , button: 'https://www.figma.com/design/l5iJpwTRDF4qx5BNd9kxkS/Portfolio?node-id=0-1&t=Mvw3KLwEOwKOh3P1-1'},
    { name: 'Franz Leon Discography Website', description: 'Wordpress, UI/UX', picture_portfolio: '/assets/franz.jpg' , button: 'https://www.figma.com/design/l5iJpwTRDF4qx5BNd9kxkS/Portfolio?node-id=0-1&t=Mvw3KLwEOwKOh3P1-1'},

  ];