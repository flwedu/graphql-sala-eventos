import { RoomEvent } from "@prisma/client";
import roomEvents from "../../mock/mockData";

interface IRepository {

    dataSource: RoomEvent[]

    find: (eventId: number) => Promise<RoomEvent>
    findDateTimeConflict: (args: { startTime: Date; endingTime: Date; }) => boolean
    create: (roomEvent: RoomEvent) => Promise<RoomEvent>
}

class RoomEventRepository implements IRepository {

    dataSource: RoomEvent[];

    constructor(dataSource: any) {
        this.dataSource = dataSource;
    }

    find(eventId: number) {
        return new Promise<RoomEvent>((resolve, reject) => {
            const eventRoom = this.dataSource.find((roomEvent) => roomEvent.id == eventId)
            if (eventRoom) resolve(eventRoom);
            else reject()
        })
    }

    findDateTimeConflict(args: { startTime: Date; endingTime: Date; }) {
        return this.dataSource.some((roomEvent: RoomEvent) =>
            (roomEvent.startingTime.getTime() <= args.startTime.getTime() &&
                roomEvent.endingTime.getTime() >= args.startTime.getTime())
            ||
            (roomEvent.endingTime.getTime() >= args.endingTime.getTime() &&
                roomEvent.startingTime.getTime() <= args.endingTime.getTime()))
    }
    create(roomEvent: RoomEvent) {
        return new Promise<RoomEvent>((resolve, reject) => {

            const oldLengh = this.dataSource.length;
            const newLength = this.dataSource.push(roomEvent);

            if (newLength > oldLengh) {
                resolve(this.dataSource.at(oldLengh) as RoomEvent);
            }
            else {
                reject();
            }
        })
    }
}

interface IService {

    find: (eventId: number) => Promise<RoomEvent>
    findDateTimeConflict(args: { startTime: Date; endingTime: Date; }): boolean
    create: (roomEvent: RoomEvent) => Promise<RoomEvent>
}


class RoomEventService implements IService {


    constructor(private readonly repository: IRepository) { }

    async find(eventId: number) {
        return this.repository.find(eventId);
    }

    findDateTimeConflict(args: { startTime: Date; endingTime: Date; }) {
        return this.repository.findDateTimeConflict(args);
    }

    async create(roomEvent: RoomEvent) {
        return this.repository.create(roomEvent);
    }
}

describe("Service methods", () => {

    it("Should return the right one element", async () => {

        const repository = new RoomEventRepository(roomEvents)
        const service = new RoomEventService(repository);

        const result = await service.find(1);
        const result2 = await service.find(2);

        expect(result?.id).toBe(1);
        expect(result2?.id).toBe(2);
    })
})

describe("Find an events based in datetime", () => {

    it("True if exists and event at same time", async () => {
        const repository = new RoomEventRepository(roomEvents)
        const service = new RoomEventService(repository);

        const result = service.findDateTimeConflict({
            startTime: new Date(2020, 12, 1, 18, 30, 0),
            endingTime: new Date(2020, 12, 1, 19, 0, 0)
        })

        expect(result).toBeTruthy()
    })

    it("False if don't exists events at same time", () => {
        const repository = new RoomEventRepository(roomEvents)
        const service = new RoomEventService(repository);

        expect(service.findDateTimeConflict({
            startTime: new Date(2020, 12, 1, 22, 30, 0),
            endingTime: new Date(2020, 12, 2, 0, 0, 0)
        })).toBe(false)
    })
})