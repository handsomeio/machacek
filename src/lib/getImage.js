export const getImage = (number) => {
  switch(number) {
    case 1:
      return require('../assets/1.png');
    break;
    case 2:
      return require('../assets/2.png');
    break;
    case 3:
      return require('../assets/3.png');
    break;
    case 4:
      return require('../assets/4.png');
    break;
    case 5:
      return require('../assets/5.png');
    break;
    case 6:
      return require('../assets/6.png');
    break;
  }
}
