export class Facility {
  id: number;
  name: string;
  area: number;
  cost: number;
  maxPeople: number;
  rentType: number;
  facilityType: number;
  standardRoom: string;
  description: string;
  poolArea: number;
  numberOfFloor: number;
  facilityFree: string;

  constructor(id: number, name: string, area: number, cost: number, maxPeople: number, rentType: number,
              facilityType: number, standardRoom: string, description: string, poolArea: number,
              numberOfFloor: number, facilityFree: string) {
    this.id = id;
    this.name = name;
    this.area = area;
    this.cost = cost;
    this.maxPeople = maxPeople;
    this.rentType = rentType;
    this.facilityType = facilityType;
    this.standardRoom = standardRoom;
    this.description = description;
    this.poolArea = poolArea;
    this.numberOfFloor = numberOfFloor;
    this.facilityFree = facilityFree;
  }
}
