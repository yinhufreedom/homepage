export interface Event {
  id: string;
  name: string;
  description: string;
  price: string;
  timeRange: [number, number];
  place?: string;
  source?: string | string[];
  registration?: string;
}
