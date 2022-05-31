export type Weapons = {
    data: {
        id: string,
        attributes: attributes
    }[],
    meta: {
        pagination: pagination
    }
}

export type Weapon = {
    data: {
        id: string,
        attributes: attributes
    },
    meta: {
        pagination: pagination
    }
}

type attributes = {
    ID_Weapons:	        string,
    Name:	            string,
    Description:        string,
    Images:             string,
    Rarity:	            number,
    ATQ:                number,
    SubStat:            number,
    WeaponType:         number,
    ElevationMaterials: number,
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