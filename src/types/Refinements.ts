export type Refinements = {
    data: {
        id: string,
        attributes: attributes
    }[],
    meta: {
        pagination: pagination
    }
}

export type Refinement = {
    data: {
        id: string,
        attributes: attributes
    },
    meta: {
        pagination: pagination
    }
}

type attributes = {
    ID_Refinements:     number,
    Name:               string,
    R1:                 string,
    R2:                 string,
    R3:                 string,
    R4:                 string,
    R5:                 string,
}

type pagination = {
    page:       number,
    pageSize:   number,
    pageCount:  number,
    total:      number
}