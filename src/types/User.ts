export type User = {
    id:         number,
    username:   string,
    email:      string,
    provider:   string,
    confirmed:  boolean,
    blocked:    boolean,
    createdAt:  string,
    updatedAt:  string,
    Inventory:  Inventory,
}

export type LoginResponse = {
    jwt:    string,
    user:   User,
}

type Inventory = {
    idArtifacts: number,
    artifacts: UserArtifact[],
}

export type UserArtifact = {
    id:     number,
    idSet:  number,
    name:   string,
    rarity: number,
    level:  number,
    type:   string,
    stat1:  string,
    stat2:  string,
    stat3:  string,
    stat4:  string,
    stat5:  string,
}
