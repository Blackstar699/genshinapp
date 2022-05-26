export type WeaponTypes = {
    data: {
        id: string,
        attributes: attributes
    }[],
    meta: {
        pagination: pagination
    }
}

export type WeaponType = {
    data: {
        id: string,
        attributes: attributes
    },
    meta: {
        pagination: pagination
    }
}
type attributes = {
    ID_WeaponTypes: number,
    Name: string,
    updatedAt: Date,
    publishedAt: Date
}

type pagination = {
    page: number,
    pageSize: number,
    pageCount: number,
    total: number
}