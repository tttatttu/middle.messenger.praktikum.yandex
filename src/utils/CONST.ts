export const API_URL = 'https://ya-praktikum.tech/api/v2/';

export const PATTERN_VALIDATION = {
  login: /^[A-Z][a-z0-9-_]{1,29}$/,
  email: /^[A-Za-z0-9,.-]{1,}[@]([A-Za-z0-9,.-]{1,}[.][A-Za-z]{1,}){1,2}$/,
  password: /^(?=.*?[A-ZА-ЯЁ])(?=.*?[0-9]).{8,40}$/,
  password_again: /^(?=.*?[A-ZА-ЯЁ])(?=.*?[0-9]).{8,40}$/,
  oldPassword: /^(?=.*?[A-ZА-ЯЁ])(?=.*?[0-9]).{8,40}$/,
  newPassword: /^(?=.*?[A-ZА-ЯЁ])(?=.*?[0-9]).{8,40}$/,
  newPassword_again: /^(?=.*?[A-ZА-ЯЁ])(?=.*?[0-9]).{8,40}$/,
  phone: /([+]7[(]\d{3}[)]\s?\d{3}[-]\d{2}[-]\d{2})|([+]7\s\d{3}[-]\d{3}[-]\d{2}[-]\d{2})|(([+]7|8)\d{10})/,
  first_name: /^[А-ЯЁA-Z][a-zа-яё-]{1,29}$/,
  second_name: /^[А-ЯЁA-Z][a-zа-яё-]{1,29}$/,
  display_name: /^[А-ЯЁA-Z][a-zа-яё-]{1,29}$/,
  message: /./,
};

export const avatar = 'https://pixelbox.ru/wp-content/uploads/2021/05/ava-vk-animal-91.jpg';
