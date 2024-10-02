let idCount = 0;
let photoIdx = 0;
const LIKES_MIN = 15;
const LIKES_MAX = 200;
const COMMENTS_MIN = 0;
const COMMENTS_MAX = 30;
const AVATAR_MIN_INDEX = 1;
const AVATAR_MAX_INDEX = 6;
const NUMBEROFPHOTOS = 25;

const DESCRIPTION = [
  'фото парка с прудом',
  'фото указателя к морю',
  'фото морского берега',
  'фото девушки с фотоаппаратом в руке на пляже',
  'фото супа с рисовым человеком',
  'фото чёрной машины с вертикально открывающейся дверью',
  'фото блюда с клубникой разрезанной на две части',
  'фото двух стаканов с напитками',
  'фото самолёта пролетающего над пляжем',
  'фото выдвигающейся полки для обуви',
  'фото проход к морю',
  'фото белой ауди',
  'фото ресторанного блюда',
  'фото кота в виде начинки суши',
  'фото домашних тапочек в виде сапог',
  'фото самолёта пролетающего над горами',
  'фото хора',
  'фото коллекционной машины',
  'фото тапочек с фонариками',
  'фото двор с пальмами',
  'фото азиатского блюда с лаймом',
  'фото моря на восходе',
  'фото краба',
  'фото феерверков на концерте',
  'фото внедорожника рядом с бегемотом в луже'
];

const AUTORSNAME = [
  'Артём',
  'Александр',
  'Екатерина',
  'Дмитрий',
  'Анна',
  'Сергей',
  'Мария',
  'Алексей',
  'Ольга',
  'Михаил',
  'Наталья',
  'Андрей',
  'Татьяна',
  'Игорь',
  'Юлия',
  'Владислав'
];

const MESSAGES = ['Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const getRandomInteger = (upper, lower) =>
  Math.floor(Math.random() * (upper - lower + 1)) + lower;

const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];

function generateComment() {
  return {
    id: (idCount += 1),
    avatar: `img/avatar/${getRandomInteger(AVATAR_MIN_INDEX, AVATAR_MAX_INDEX)}.svg`,
    message: getRandomArrayElement(MESSAGES),
    name: getRandomArrayElement(AUTORSNAME)
  };
}

function generatePhoto() {
  const description = getRandomArrayElement(DESCRIPTION);
  const likes = getRandomInteger(LIKES_MIN, LIKES_MAX);
  const commentsCount = getRandomInteger(COMMENTS_MIN, COMMENTS_MAX);
  const comments = Array.from({ length: commentsCount }, generateComment);

  return {
    url: `img/photos/${(photoIdx += 1)}.jpg`,
    description,
    likes,
    comments,
  };
}

const similarPhotos = Array.from({ length: NUMBEROFPHOTOS }, generatePhoto);
console.log(similarPhotos);

