import { createSelector } from '@reduxjs/toolkit';

export const getContacts = state => state.contacts;
export const getFilterValue = state => state.filter.filter;

// оптимізуємо за допомогою reateSelector
export const selectVisibleContacts = createSelector(
  [getContacts, getFilterValue],
  (contacts, filter) => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.items.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  }
);
