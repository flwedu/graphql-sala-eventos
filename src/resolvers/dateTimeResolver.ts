import { GraphQLScalarType, Kind } from "graphql";

export default {
    DateTime: new GraphQLScalarType({
        name: 'DateTime',
        description: 'Date and time custom scalar type',
        serialize: (value: any) => value.getTime(),
        parseValue: (value: any) => new Date(value),
        parseLiteral: (obj: any) => {
            if (obj.kind === Kind.INT) {
                return new Date(parseInt(obj.value, 10))
            }
            return null
        }

    })
}