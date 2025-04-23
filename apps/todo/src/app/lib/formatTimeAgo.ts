import {
    differenceInMinutes,
    differenceInHours,
    differenceInDays,
  } from 'date-fns';
  
  export function formatShortTimeAgo(date: Date): string {
    const now = new Date();
    const mins = differenceInMinutes(now, date);
    if (mins < 1) return 'Just now';
    if (mins < 60) return `${mins}m ago`;
  
    const hrs = differenceInHours(now, date);
    if (hrs < 24) return `${hrs}h ago`;
  
    const days = differenceInDays(now, date);
    return `${days}d ago`;
  }
  