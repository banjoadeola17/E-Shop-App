module.exports = {
    sessions: (parent, args, {dataSources}, info) => {
        return dataSources.sessionAPI.getSessions(args);
    },
    sessionById: (parent, {id}, {dataSources}, info) => {
        try{
            return dataSources.sessionAPI.getSessionById(id);
        } catch (error) {
            return {code: "Error", message: "An error occured", token: "uieou8373u"}
        }
        
    },
    speakers: async (parent, args, {dataSources}, info) => {
        return await dataSources.speakerAPI.getSpeakers();
    },
    speakerById: async (parent, {id}, {dataSources}, info) => {
        return await dataSources.speakerAPI.getSpeakerById(id);
    },
};