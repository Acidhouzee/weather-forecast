export function changeIcons(url) {
  const newUrl = url.split('/');
  const dayOrNight = newUrl[newUrl.length - 2].split('.');
  const iconCode = newUrl[newUrl.length - 1].split('.');
  const iconPath = require(`../images/${dayOrNight[0]}/${iconCode[0]}.svg`);

  return iconPath;
}
