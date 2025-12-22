import type { CollectionEntry } from 'astro:content';

type DataCollectionKey = 'projects';

type PickCollectionData<K extends DataCollectionKey> = CollectionEntry<K>['data'];

export type { DataCollectionKey, PickCollectionData };
