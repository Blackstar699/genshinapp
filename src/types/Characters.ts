export type Characters = {
    data: {
        id: string,
        attributes: attributes
    }[],
    meta: {
        pagination: pagination
    }
}

export type Character = {
    data: {
        id: string,
        attributes: attributes
    },
    meta: {
        pagination: pagination
    }
}
type attributes = {
    ID_Characters:          string,
    Name:                   string,
    Images:                 string,
    Element:                string,
    WeaponType:             number,
    Rarity:                 number,
    Gender:                 string,
    Description:            string,
    PV:                     number,
    ATQ:                    number,
    DEF:                    number,
    SubStat:                number,
    Region:                 string,
    Birthday:               string,
    Constellations:         number,
    Passives:               number,
    Skill1:                 number,
    Skill2:                 number,
    Skill3:                 number,
    ElevationMaterials:     number,
    SkillsMaterials:        number,
    createdAt:	            Date,
    updatedAt:	            Date,
    publishedAt:	        Date
}

type pagination = {
    page: number,
    pageSize: number,
    pageCount: number,
    total: number
}
