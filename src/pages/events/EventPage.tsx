import { useState } from 'react';

import EventList from './EventList';
import type { EventData } from '../../domain/events/types';

interface EventPageProps {
  events: EventData[];
}

function EventPage({ events }: EventPageProps) {
  const [activeTab, setActiveTab] = useState('upcoming');
  const currentTime = Date.now();

  // 过滤并分类活动
  const upcomingEvents = events
    .filter(event => event.timeRange[1] > currentTime)
    .sort((a, b) => {
      // 按开始时间顺序排列，开始时间相同则按结束时间顺序排列
      if (a.timeRange[0] !== b.timeRange[0]) {
        return a.timeRange[0] - b.timeRange[0];
      }
      return a.timeRange[1] - b.timeRange[1];
    });

  const pastEvents = events
    .filter(event => event.timeRange[1] <= currentTime)
    .sort((a, b) => {
      // 按开始时间倒序排列，开始时间相同则按结束时间倒序排列
      if (a.timeRange[0] !== b.timeRange[0]) {
        return b.timeRange[0] - a.timeRange[0];
      }
      return b.timeRange[1] - a.timeRange[1];
    })
    .slice(0, 30); // 只取前 30 条历史活动

  return (
    <div className="w-full">
      {/* 选项卡导航 */}
      <div className="border-b border-gray-200 mb-6">
        <nav className="-mb-px flex space-x-8">
          <button
            className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm focus:outline-none transition-colors ${activeTab === 'upcoming' ? 'border-blue-500 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}
            onClick={() => setActiveTab('upcoming')}
          >
            剩余活动 ({upcomingEvents.length})
          </button>
          <button
            className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm focus:outline-none transition-colors ${activeTab === 'past' ? 'border-blue-500 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}
            onClick={() => setActiveTab('past')}
          >
            历史活动 ({pastEvents.length}+)
          </button>
        </nav>
      </div>

      {/* 选项卡内容 */}
      <div className="space-y-4">
        {activeTab === 'upcoming' && (
          <EventList events={upcomingEvents} emptyMessage="暂无剩余活动" isPast={false} />
        )}

        {activeTab === 'past' && (
          <EventList events={pastEvents} emptyMessage="暂无历史活动" isPast={true} />
        )}
      </div>
    </div>
  );
}

export default EventPage;
