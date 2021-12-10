import { Acess, RoomEvent } from "@prisma/client";

export default [{
    id: 1,
    name: "Test1",
    createdAt: new Date(2020, 12, 1, 0, 0, 0),
    modifiedAt: new Date(2020, 12, 1, 0, 0, 0),
    startingTime: new Date(2020, 12, 1, 18, 0, 0),
    endingTime: new Date(2020, 12, 1, 19, 0, 0),
    acess: Acess.PUBLIC,
    description: "Test1",
    minimumAge: 10,
    roomId: 1,
    userId: 1
},
{
    id: 2,
    name: "Test2",
    createdAt: new Date(2020, 12, 1, 0, 0, 0),
    modifiedAt: new Date(2020, 12, 1, 0, 0, 0),
    startingTime: new Date(2020, 12, 1, 10, 0, 0),
    endingTime: new Date(2020, 12, 1, 12, 0, 0),
    acess: Acess.PUBLIC,
    description: "Test2",
    minimumAge: 10,
    roomId: 1,
    userId: 1
}
]