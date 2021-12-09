import { gql } from "apollo-server";

export default gql`
scalar DateTime

type User {
  id: ID!
  name: String!
  email: String!
  createdAt: DateTime
  rooms: [Room!]!
  roomEvents: [RoomEvent!]!
  roomEventPresences: [RoomEventPresence!]!
}

input UserInput {
  name: String
  email: String
}

type Room {
  id: ID!
  name: String!
  localization: String
  createdAt: DateTime
  user: User!
  roomEvents: [RoomEvent!]!
}

input RoomInput{
  name: String
  localization: String
  userId: ID
}

type RoomEvent {
  id: ID!
  name: String!
  description: String
  minimumAge: Int
  startingTime: DateTime
  endingTime: DateTime
  createdAt: DateTime
  modifiedAt: DateTime
  acess: Acess!
  room: Room!
  user: User!
  roomEventPresences: [RoomEventPresence]!
}

enum Acess {
  PUBLIC
  ONLYINVITED
  OLNYACCEPTED
}

type RoomEventPresence {
  id: ID!
  createdAt: DateTime
  user: User!
  roomEvent: RoomEvent!
}

type Query {
  users(page:Int!, take: Int!): [User!]!
  user(id: ID!): User

  rooms(page:Int!, take: Int!): [Room!]!
  room(id: ID!): Room

  roomEvent(id: ID!): RoomEvent
  roomEventsByAge(age: Int!): [RoomEvent!]!

  roomEventPresence(id: ID!): RoomEventPresence
}

type Mutation {
  createUser(user: UserInput): User
  createRoom(room: RoomInput): Room
}

`