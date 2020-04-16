import { SelectControlValueAccessor } from '@angular/forms'

export class Alert {
    
    constructor(
        public readonly alertType: AlerType,
        public readonly message: string
    ){ }
    
}

export enum AlerType{
    SUCCESS,
    WARNING,
    DANGER,
    INFO
}