import { gql } from "apollo-server";

export default gql`
type User {
  id: Int!
  name: String!
  email: String!
  createdAt: String
  createdRooms: [Room]!
  createdEvents: [RoomEvent]!
  roomEventPresences: [RoomEventPresence]!
}

type Room {
  id: Int!
  name: String!
  localization: String
  createdAt: String
  createdBy: User!
  events: [RoomEvent]!
}

type RoomEvent {
  id: Int!
  name: String!
  description: String
  minimumAge: Int
  startingTime: String
  endingTime: String
  createdAt: String
  modifiedAt: String
  acess: Acess
  room: Room!
  createdBy: User!
  roomEventPresences: [RoomEventPresence]!
}

enum Acess {
  PUBLIC
  ONLYINVITED
  OLNYACCEPTED
}

type RoomEventPresence {
  id: Int!
  createdAt: String
  user: User!
  event: RoomEvent!
}

type Query {
  users: [User!]!
  user(id: Int!): User

  roomsFromUser(userId: Int!): [Room]!
  roomById(id: Int!): Room!

  roomEventsFromUser(userId: Int!): [RoomEvent]!
  roomEventsFromRoom(roomId: Int!): [RoomEvent]!
  roomEventsPublics: [RoomEvent!]!
  roomEventById(id: Int!): RoomEvent
  roomEventsByAge(age: Int!): [RoomEvent]!

  presencesFromRoomEvent(roomEventId: Int!): [RoomEventPresence]!
  presencesFromUser(userId: Int!): [RoomEventPresence]!
}

type Mutation {
  createUser(name: String!, email: String!): User
}

`