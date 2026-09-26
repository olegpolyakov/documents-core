import {
    Entity,
    EntityData
} from '@olegpolyakov/core';

export type DocumentData = {
    title: string;
    content: string;
} & EntityData;

export default class Document extends Entity implements DocumentData {
    readonly title: string;
    readonly content: string;

    constructor({
        title = '',
        content = '',
        ...rest
    }: Partial<DocumentData>) {
        super(rest);

        this.title = title;
        this.content = content;
    }
}