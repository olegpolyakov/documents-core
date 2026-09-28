import {
    Entity,
    EntityData
} from '@olegpolyakov/core';

export type FolderData = {
    name: string;
    documentIds: string[];
} & EntityData;

export default class Folder extends Entity implements FolderData {
    readonly name: string;
    readonly documentIds: string[];

    constructor({
        name = '',
        documentIds = [],
        ...rest
    }: Partial<FolderData>) {
        super(rest);

        this.name = name;
        this.documentIds = documentIds;
    }
}