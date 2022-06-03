export type RootStackParamList = {
    Home:                   undefined;
    Params:                 undefined;
    Database:               undefined;
    Inventory:              undefined;
    Login:                  undefined;
    Register:               undefined;
    DatabaseCharacters:     undefined;
    DatabaseCharacter:      { id: string, constellations: number, weapontype: number, pv: number, atq: number, def: number, substat: number, passives: number };
    DatabaseArtifacts:      undefined;
    DatabaseArtifact:       { id: string };
    DatabaseMaterials:      undefined;
    DatabaseMaterial:       {id: string};
    DatabaseWeapons:        undefined;
    DatabaseWeapon:         { id: string, atq: number, substat: number, weapontype: number }
};
