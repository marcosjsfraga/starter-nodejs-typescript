const resolvers = {
  Query: {
    health_check: (): any => ({ message: 'GraphQL working!!' }),
  },
}

export { resolvers }
