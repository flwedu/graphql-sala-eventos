import { GraphQLScalarType } from "graphql";

export default {
    DateTime: new GraphQLScalarType({
        name: 'DateTime',
        description: 'Date and time custom scalar type',
        serialize: (value: any) => value.toISOString(),
        parseValue: (value: any) => new Date(value),
        parseLiteral: (obj: any) => new Date(obj.value)
    })
}