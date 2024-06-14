import React, { useEffect } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './calender.css';

function Card() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = import.meta.env.VITE_script_src;
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup: Remove the script when the component unmounts
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div
      className="calendly-inline-widget"
      data-url= {import.meta.env.VITE_script_data_url}
      style={{ minWidth: '320px', height: '700px' }}
    ></div>)
}

export default Card;
