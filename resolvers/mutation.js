module.exports = {
  Mutation: {
    addDummyItem: (parent, { dummyItem }, { userAllowed }) => {
      if(!userAllowed) throw new Error('User is not allowed to do this!'); // coming in from context

      // let the subscribers know we have added a book
      pubsub.publish('DUMMYITEM_ADDED', { dummyItemAdded: dummyItem });

      return [...dummyItems, dummyItem ]
    }
  }
}