export type Stats = {
    data: {
        id: string,
        attributes: attributes
    }[],
    meta: {
        pagination: pagination
    }
}

export type Stat = {
    data: {
        id: string,
        attributes: attributes
    },
    meta: {
        pagination: pagination
    }
}

type attributes = {
    ID_Stats:	        string,
    Type:	            string,
    L1:	                number,
    L20:	            number,
    L20P:	            number,
    L40:	            number,
    L40P:	            number,
    L50:	            number,
    L50P:	            number,
    L60:	            number,
    L60P:	            number,
    L70:	            number,
    L70P:	            number,
    L80:	            number,
    L80P:	            number,
    L90:	            number,
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