import React from 'react';
import dayjs from 'dayjs';

import { SITE_URL_MAP } from '@/constants/config';
import { Calendar, MapPin, DollarSign, Clock } from '@/components/icon';

interface EventData {
  id: string;
  name: string;
  description: string;
  price: string;
  timeRange: [number, number];
  place?: string;
  source?: string | string[];
}

interface EventListProps {
  events: EventData[];
  emptyMessage: string;
  isPast?: boolean;
}

const EventList: React.FC<EventListProps> = ({ events, emptyMessage, isPast = false }) => {
  return (
    <div>
      {events.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event, index) => (
            <div key={event.id} className="relative">
              <a
                href={`/events/${event.id}/`}
                className="block text-inherit bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow hover:bg-gray-50"
              >
                <div className="pb-2">
                  <h4 className="text-lg font-semibold md:truncate">{event.name}</h4>
                </div>
                <div className="space-y-4">
                  {event.description && (
                    <p className="text-gray-600">
                      {event.description}
                    </p>
                  )}
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 text-gray-500 mr-2" />
                      <span className="text-sm">
                        {(() => {
                          const startTime = dayjs(event.timeRange[0]);
                          const endTime = dayjs(event.timeRange[1]);
                          const isSameDay = startTime.isSame(endTime, 'day');

                          if (isSameDay) {
                            return `${startTime.format('YYYY-MM-DD HH:mm')} - ${endTime.format('HH:mm')}`;
                          } else {
                            return `${startTime.format('YYYY-MM-DD HH:mm')} - ${endTime.format('YYYY-MM-DD HH:mm')}`;
                          }
                        })()}
                      </span>
                    </div>
                    {event.place && (
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 text-gray-500 mr-2" />
                        <span className="text-sm">{event.place}</span>
                      </div>
                    )}
                    <div className="flex items-center">
                      <DollarSign className="w-4 h-4 text-gray-500 mr-2" />
                      <span className={`inline-block px-2 py-1 rounded-full text-xs ${parseFloat(event.price) > 0 ? 'bg-yellow-50 text-amber-600' : 'bg-gray-100 text-gray-800'}`}>
                        ¥{event.price}
                      </span>
                    </div>
                    {!isPast && (
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 text-gray-500 mr-2" />
                        <span className={`inline-block px-2 py-1 rounded-full text-xs ${(() => {
                          const currentTime = dayjs();
                          const startTime = dayjs(event.timeRange[0]);
                          const endTime = dayjs(event.timeRange[1]);

                          if (currentTime.isAfter(startTime) && currentTime.isBefore(endTime)) {
                            return 'bg-green-50 text-green-700';
                          } else if (currentTime.isBefore(startTime)) {
                            return 'bg-gray-100 text-gray-700';
                          } else {
                            return 'bg-gray-100 text-gray-700';
                          }
                        })()}`}>
                          {(() => {
                            const currentTime = dayjs();
                            const startTime = dayjs(event.timeRange[0]);
                            const endTime = dayjs(event.timeRange[1]);

                            if (currentTime.isAfter(startTime) && currentTime.isBefore(endTime)) {
                              return '进行中';
                            } else if (currentTime.isBefore(startTime)) {
                              return '即将开始';
                            } else {
                              return '已结束';
                            }
                          })()}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </a>
              {/* 历史活动列表中最后一个活动添加半透明遮罩 */}
              {isPast && index === events.length - 1 && (
                <a
                  className="absolute inset-0 bg-black/50 hover:bg-black/70 rounded-lg flex items-center justify-center text-white font-medium transition-all"
                  href={SITE_URL_MAP.digitalYinhu}
                  target="_blank"
                  rel="external"
                  title="到「数字银湖（暂名）」查看更多活动"
                >
                  查看更多活动
                </a>
              )}
            </div>
          ))}
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
