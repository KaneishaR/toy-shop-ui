export class FToyList{
    id: number;
    username: string;
    color: string;
    type: string;
    vibration: string;
    material: string[];
    anal: boolean;
    analMaterial: string[];
    analType: string;
    accessories: string[];
    bdsm: boolean;
    bdsmType: string[];

    constructor(id: number, username: string, color: string, type: string,
                vibration: string, material: string[],anal: boolean,
                analMaterial: string[],analType: string,accessories: string[],
                bdsm: boolean,bdsmType: string[]){
            this.id=id;
            this.username = username;
            this.color = color;
            this.type = type;
            this.vibration = vibration;
            this.material = material;
            this.anal = anal;
            this.analType = analType;
            this.analMaterial = analMaterial;
            this.accessories = accessories;
            this.bdsm = bdsm;
            this.bdsmType = bdsmType;
        }

}