export default class Point {
    private p: Map<string, number>;
    // ex) [ 'x' : 3 ], [ 'y' : 4 ]

    constructor(p: Map<string, number>) {
        this.p = p;
    }

    public get(axis: string): number {
        return this.p.get(axis)!;
    }
}