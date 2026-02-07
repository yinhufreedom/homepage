import dayjs from 'dayjs';

/**
 * 格式化活动时间范围
 * @param startTime 开始时间戳
 * @param endTime 结束时间戳
 * @returns 格式化后的时间字符串
 */
export const formatTimeRange = (startTime: number, endTime: number): string => {
  const start = dayjs(startTime);
  const end = dayjs(endTime);
  const isSameDay = start.isSame(end, 'day');

  if (isSameDay) {
    return `${start.format('YYYY-MM-DD HH:mm')} - ${end.format('HH:mm')}`;
  } else {
    return `${start.format('YYYY-MM-DD HH:mm')} - ${end.format('YYYY-MM-DD HH:mm')}`;
  }
};

/**
 * 格式化带星期的活动时间范围
 * @param startTime 开始时间戳
 * @param endTime 结束时间戳
 * @returns 格式化后的时间字符串（包含星期）
 */
export const formatTimeRangeWithWeekday = (startTime: number, endTime: number): string => {
  const start = dayjs(startTime);
  const end = dayjs(endTime);
  
  // 中文星期几
  const weekdays = ['周日', '周一', '周二', '周三', '周四', '周五', '周六'];
  const startWeekday = weekdays[start.day()];
  const endWeekday = weekdays[end.day()];
  
  if (start.isSame(end, 'day')) {
    // 同一天，只显示一个日期和星期
    return `${start.format('YYYY-MM-DD')}(${startWeekday}) ${start.format('HH:mm')} - ${end.format('HH:mm')}`;
  } else {
    // 不同天，显示完整日期和各自的星期
    return `${start.format('YYYY-MM-DD')}(${startWeekday}) ${start.format('HH:mm')} - ${end.format('YYYY-MM-DD')}(${endWeekday}) ${end.format('HH:mm')}`;
  }
};

/**
 * 活动状态类型
 */
export type EventStatus = 'upcoming' | 'ongoing' | 'ended';

/**
 * 获取活动状态
 * @param startTime 开始时间戳
 * @param endTime 结束时间戳
 * @returns 活动状态
 */
export const getEventStatus = (startTime: number, endTime: number): EventStatus => {
  const currentTime = dayjs();
  
  if (currentTime.isAfter(startTime) && currentTime.isBefore(endTime)) {
    return 'ongoing';
  } else if (currentTime.isBefore(startTime)) {
    return 'upcoming';
  } else {
    return 'ended';
  }
};

/**
 * 获取活动状态的中文名称
 * @param status 活动状态
 * @returns 活动状态的中文名称
 */
export const getEventStatusText = (status: EventStatus): string => {
  const statusMap = {
    upcoming: '即将开始',
    ongoing: '进行中',
    ended: '已结束'
  };
  
  return statusMap[status];
};

/**
 * 获取活动状态的样式类名
 * @param status 活动状态
 * @returns 样式类名
 */
export const getEventStatusClass = (status: EventStatus): string => {
  const classMap = {
    upcoming: 'bg-gray-100 text-gray-700',
    ongoing: 'bg-green-50 text-green-700',
    ended: 'bg-gray-100 text-gray-700'
  };
  
  return classMap[status];
};

/**
 * 获取价格的样式类名
 * @param price 价格字符串
 * @returns 样式类名
 */
export const getPriceClass = (price: string): string => {
  return parseFloat(price) > 0 ? 'bg-yellow-50 text-amber-600' : 'bg-gray-100 text-gray-800';
};
