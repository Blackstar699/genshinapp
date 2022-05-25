export type Materials = {
    data: {
        id: string,
        attributes: attributes
    }[],
    meta: {
        pagination: pagination
    }
}

export type Material = {
    data: {
        id: string,
        attributes: attributes
    },
    meta: {
        pagination: pagination
    }
}

type attributes = {
    ID_Materials:	    string,
    Name:	            string,
    Rarity:             number,
    Type:               string,
    Description:        string,
    Source:             string,
    Images:             string,
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