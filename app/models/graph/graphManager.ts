import Graph from "@/app/models/graph/graph";
import { v4 as uuid } from 'uuid';

export default class GraphManager {
    private static INSTANCE: GraphManager = new GraphManager();

    private static mainGraph: Graph = new Graph();
    private static graphs: Map<string, Graph> = new Map<string, Graph>();

    private constructor() {
    }

    public static get get(): GraphManager {
        return this.INSTANCE;
    }

    public static get getMain(): Graph {
        return this.mainGraph;
    }

    public static addGraph(graph: Graph): string {
        const id: string = uuid();
        this.graphs.set(id, graph);
        return id;
    }

    public static removeGraph(id: string): void {
        this.graphs.delete(id);
    }

    public static getGraph(id: string): Graph | undefined {
        return this.graphs.get(id);
    }

}