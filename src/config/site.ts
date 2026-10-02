/**
 * Все тексты-константы, контакты и ссылки сайта в одном месте.
 * Ссылка со значением null не выводится на сайте: так не будет «мёртвых» кнопок.
 */

export const contacts = {
  email: 'alexanderkoldin@mail.ru',
  telegram: 'https://t.me/AlexanderKolDin',
  telegramHandle: '@AlexanderKolDin',
} as const;

export const links: { resume: string | null; github: string | null } = {
  resume: '/Koldin_Frontend.pdf',
  github: 'https://github.com/AlexanderKoldin',
};

export const status = 'Открыт к работе · Москва · офис или удалёнка';

export const typedWords = ['React', 'TypeScript', 'Redux Toolkit', 'React Router'];

export const marqueeWords = [
  'React',
  'TypeScript',
  'Redux Toolkit',
  'JavaScript',
  'Vite',
  'React Router',
  'HTML · CSS',
  'Git',
];

export interface Rule {
  title: string;
  text: string;
}

export const rules: Rule[] = [
  {
    title: 'Качество не обсуждается',
    text: 'В премиальном сегменте к этому привыкаешь. Пишу код, который не стыдно отдать на ревью: строгие типы, понятная структура, обработанные ошибки и состояния загрузки.',
  },
  {
    title: 'Мы, а не я',
    text: 'Привык работать на общий результат. Договариваюсь без конфликтов, спокойно принимаю критику и не тяну одеяло на себя.',
  },
  {
    title: 'Сказал – сделал',
    text: 'Годами работал на ежемесячный план. Если взял задачу, она будет сделана в срок, а о рисках предупрежу заранее.',
  },
];

export interface CoreTech {
  name: string;
  note: string;
}

export const coreStack: CoreTech[] = [
  { name: 'React', note: 'Компоненты, хуки, композиция, React Router.' },
  { name: 'TypeScript', note: 'Типизация пропсов, состояния и ответов API.' },
  { name: 'Redux Toolkit', note: 'Слайсы, асинхронные запросы, нормализация данных.' },
];

export const extraStack = [
  'JavaScript ES6+',
  'HTML5 · CSS3 · BEM',
  'REST API',
  'Vite',
  'Git',
  'Jest',
  'Playwright',
];
