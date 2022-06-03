export type Passives = {
    data: {
        id: string,
        attributes: attributes
    }[],
    meta: {
        pagination: pagination
    }
}

export type Passive = {
    data: {
        id: string,
        attributes: attributes
    },
    meta: {
        pagination: pagination
    }
}

type attributes = {
    ID_Passives:        string,
    P1:                 string,
    P2:                 string,
    P3:                 string,
    DescriptionP1:      string,
    DescriptionP2:      string,
    DescriptionP3:      string,
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