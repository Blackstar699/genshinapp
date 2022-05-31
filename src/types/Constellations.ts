export type Constellations = {
    data: {
        id: string,
        attributes: attributes
    }[],
    meta: {
        pagination: pagination
    }
}

export type Constellation = {
    data: {
        id: string,
        attributes: attributes
    },
    meta: {
        pagination: pagination
    }
}
type attributes = {
    ID_Constellations: number,
    Name: string,
    C1: string,
    C2: string,
    C3: string,
    C4: string,
    C5: string,
    C6: string,
    DescriptionC1: string,
    DescriptionC2: string,
    DescriptionC3: string,
    DescriptionC4: string,
    DescriptionC5: string,
    DescriptionC6: string,
    updatedAt: Date,
    publishedAt: Date
}

type pagination = {
    page: number,
    pageSize: number,
    pageCount: number,
    total: number
}