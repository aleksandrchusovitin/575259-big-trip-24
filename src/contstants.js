const SORT_FILTERS = [
  {name: 'day', isChecked: true},
  {name: 'event', isChecked: false},
  {name: 'time', isChecked: false},
  {name: 'price', isChecked: false},
  {name: 'offers', isChecked: false},
];

const FILTERS = [
  {name: 'everything', isChecked: true},
  {name: 'future', isChecked: false},
  {name: 'present', isChecked: false},
  {name: 'past', isChecked: false},
];

const EVENT_TYPES = [
  'taxi',
  'bus',
  'train',
  'ship',
  'drive',
  'flight',
  'check-in',
  'sightseeing',
  'restaurant',
];

const POINTS_COUNT = 10;

const MAX_DATE_DIFF = 86400000;

const MIN_PRICE = 1000;
const MAX_PRICE = 100000;

export {
  SORT_FILTERS,
  FILTERS,
  EVENT_TYPES,
  POINTS_COUNT,
  MAX_DATE_DIFF,
  MIN_PRICE,
  MAX_PRICE,
};
