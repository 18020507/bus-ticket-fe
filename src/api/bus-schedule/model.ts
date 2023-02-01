import { BasicPageParams } from '../model/baseModel';

export interface ISearchBusSchedule extends BasicPageParams {
  travel_from: string;
  travel_to: string;
  ways: number;
}
