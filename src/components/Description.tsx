import React, { useState, useEffect } from 'react';
import { TimeDisplay } from './TimeDisplay';
import { getRandomWeeks, calculateDateFromWeeks } from '../utils/dateUtils';

export function Description() {
  const [weeks, setWeeks] = useState(0);
  const [date, setDate] = useState('');

  useEffect(() => {
    const randomWeeks = getRandomWeeks();
    setWeeks(randomWeeks);
    setDate(calculateDateFromWeeks(randomWeeks));
  }, []);

  return (
    <p className="text-xl text-gray-600 mb-12 leading-relaxed">
      Do you find yourself scrolling through Instagram on your desktop or PC, too lazy to hover over posts or comments just to see when they were actually shared? Well, this extension is made just for you. The extension automatically changes those annoying and vague{' '}
      <TimeDisplay weeks={weeks} date={date} />
      {' '}for all posts and comments older than a day, saving you the hassle.
    </p>
  );
}