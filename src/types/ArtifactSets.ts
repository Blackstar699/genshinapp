export type ArtifactSets = {
    data: {
        id: string,
        attributes: attributes
    }[],
    meta: {
        pagination: pagination
    }
}

export type ArtifactSet = {
    data: {
        id: string,
        attributes: attributes
    },
    meta: {
        pagination: pagination
    }
}

type attributes = {
    ID_ArtifactSets:	string,
    Name:	            string,
    Flower:	            string,
    DescriptionFlower:	string,
    Plume:	            string,
    DescriptionPlume:	string,
    Sand:	            string,
    DescriptionSand:	string,
    Goblet:	            string,
    DescriptionGoblet:	string,
    Circlet:	        string,
    DescriptionCirclet:	string,
    Bonus2:	            string,
    Bonus4:	            string,
    Images:             string,
    RarityMin:	        number,
    RarityMax:	        number,
    createdAt:	        Date,
    updatedAt:	        Date,
    publishedAt:	    Date
}

type pagination = {
    page:	    number,
    pageSize:	number,
    pageCount:	number,
    total:	    number
}