import React from 'react';

import { SITE_URL_MAP } from '@/constants/config';
import { Calendar, MapPin, DollarSign, Clock } from '@/components/icon';
import type { Event } from '../../typing';
import {
  formatTimeRange,
  getEventStatus,
  getEventStatusText,
  getEventStatusClass,
  getPriceClass
} from '../../helper';

interface EventListProps {
  events: Event[];
  emptyMessage: string;
  isPast?: boolean;
}

const EventList: React.FC<EventListProps> = ({ events, emptyMessage, isPast = false }) => {
  return (
    <div>
      {events.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event, index) => {
            const status = getEventStatus(event.timeRange[0], event.timeRange[1]);
            const statusText = getEventStatusText(status);
            const statusClass = getEventStatusClass(status);
            const priceClass = getPriceClass(event.price);
            const formattedTime = formatTimeRange(event.timeRange[0], event.timeRange[1]);

            return (
              <div key={event.id} className="relative">
                <a
                  href={`/events/${event.id}/`}
                  className="block text-inherit bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow hover:bg-gray-50"
                >
                  <div className="pb-2">
                    <h4 className="text-lg font-semibold md:truncate">{event.name}</h4>
                  </div>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 text-gray-500 mr-2" />
                        <span className="text-sm">{formattedTime}</span>
                      </div>
                      {event.place && (
                        <div className="flex items-center">
                          <MapPin className="w-4 h-4 text-gray-500 mr-2" />
                          <span className="text-sm">{event.place}</span>
                        </div>
                      )}
                      <div className="flex items-center">
                        <DollarSign className="w-4 h-4 text-gray-500 mr-2" />
                        <span className={`inline-block px-2 py-1 rounded-full text-xs ${priceClass}`}>
                          ¥{event.price}
                        </span>
                      </div>
                      {!isPast && (
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 text-gray-500 mr-2" />
                          <span className={`inline-block px-2 py-1 rounded-full text-xs ${statusClass}`}>
                            {statusText}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                </a>
                {isPast && index === events.length - 1 && (
                  <a
                    className="absolute inset-0 bg-black/50 hover:bg-black/70 rounded-lg flex items-center justify-center text-white font-medium transition-all"
                    href={SITE_URL_MAP.digitalYinhuApp}
                    target="_blank"
                    rel="external"
                    title="到「数字银湖（暂名）」查看更多活动"
                  >
                    查看更多活动
                  </a>
                )}
              </div>
            );
          })}
        </div>
      ) : (
        <div className="flex justify-center items-center py-20 bg-gray-50 rounded-lg">
          <p className="text-gray-500 text-lg">{emptyMessage}</p>
        </div>
      )}
    </div>
  );
}

export default EventList;
