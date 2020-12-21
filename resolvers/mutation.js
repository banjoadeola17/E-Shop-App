module.exports = {
    toggleFavoriteSession: (parent, {id}, {dataSources}, info) => {
        return dataSources.sessionAPI.toggleFavoriteSession(id);
    },

    addNewSession: (parent, { session }, { dataSources }, info) => {
        return dataSources.sessionAPI.addNewSession(session);
    },

    makeSpeakerFeatured: async (parent, { id }, { dataSources }, info) => {
        const speaker = await dataSources.speakerAPI.makeSpeakerFeatured(id);
        return speaker;
    }
};