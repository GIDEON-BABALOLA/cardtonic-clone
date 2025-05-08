import React from 'react';
import Intercom from '@intercom/messenger-js-sdk';
const baseURL = import.meta.env.VITE_REACT_INTERCOM
export default function ChatBot() {
  Intercom({
    app_id: baseURL,
  });

  return <div></div>;
}