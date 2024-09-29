import { DateFormat } from '../../constants.js';
import { getFormattedDate, getDuration } from '../../utils.js';

const createOfferViewTemplate = (offer) => {
  const {
    title,
    price,
  } = offer;

  return `
  <li class="event__offer">
    <span class="event__offer-title">${title}</span>
    &plus;&euro;&nbsp;
    <span class="event__offer-price">${price}</span>
  </li>`;
};

const createPointViewTemplate = (point, destination, offers) => {

  const {
    basePrice,
    dateFrom,
    dateTo,
    isFavorite,
    type,
  } = point;


  const isFavoriteClass = isFavorite ? 'event__favorite-btn--active' : '';
  const currentDate = getFormattedDate(new Date(), DateFormat.DATE);
  const dateFromFormatted = getFormattedDate(dateFrom, DateFormat.TIME);
  const dateToFormatted = getFormattedDate(dateTo, DateFormat.TIME);
  const duration = getDuration(dateFrom, dateTo);

  return`
  <li class="trip-events__item">
    <div class="event">
      <time class="event__date" datetime=${new Date()}>${currentDate}</time>
      <div class="event__type">
        <img class="event__type-icon" width="42" height="42" src='img/icons/${type}.png' alt="Event type icon">
      </div>
      <h3 class="event__title">${type} ${destination.name}</h3>
      <div class="event__schedule">
        <p class="event__time">
          <time class="event__start-time" datetime="${dateFrom}">${dateFromFormatted}</time>
          &mdash;
          <time class="event__end-time" datetime="${dateTo}">${dateToFormatted}</time>
        </p>
        <p class="event__duration">${duration}</p>
      </div>
      <p class="event__price">
        &euro;&nbsp;<span class="event__price-value">${basePrice}</span>
      </p>
      <h4 class="visually-hidden">Offers:</h4>
      <ul class="event__selected-offers">
        ${offers.map((offer) => createOfferViewTemplate(offer)).join('')}
      </ul>
      <button class="event__favorite-btn ${isFavoriteClass}" type="button">
        <span class="visually-hidden">Add to favorite</span>
        <svg class="event__favorite-icon" width="28" height="28" viewBox="0 0 28 28">
          <path d="M14 21l-8.22899 4.3262 1.57159-9.1631L.685209 9.67376 9.8855 8.33688 14 0l4.1145 8.33688 9.2003 1.33688-6.6574 6.48934 1.5716 9.1631L14 21z"/>
        </svg>
      </button>
      <button class="event__rollup-btn" type="button">
        <span class="visually-hidden">Open event</span>
      </button>
    </div>
  </li>
`;
};

export { createPointViewTemplate };
