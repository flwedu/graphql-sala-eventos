import { gql } from "apollo-server";

export default gql`
scalar DateTime

type User {
  id: Int!
  name: String!
  email: String!
  createdAt: DateTime
  createdRooms: [Room]!
  createdEvents: [RoomEvent]!
  roomEventPresences: [RoomEventPresence]!
}

input UserInput {
  name: String
  email: String
}

type Room {
  id: Int!
  name: String!
  localization: String
  createdAt: DateTime
  createdBy: User!
  events: [RoomEvent]!
}

type RoomEvent {
  id: Int!
  name: String!
  description: String
  minimumAge: Int
  startingTime: DateTime
  endingTime: DateTime
  createdAt: DateTime
  modifiedAt: DateTime
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
  createdAt: DateTime
  user: User!
  event: RoomEvent!
}

type Query {
  users(take: Int!): [User!]!
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
  createUser(user: UserInput): User
}

`