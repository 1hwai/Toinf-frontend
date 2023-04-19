import {Request, Response} from "next/dist/compiled/@edge-runtime/primitives/fetch";
import Graph from "@/app/models/graph";

export default (req: Request, res: Response) => {
    return Graph.get.getFM.getFunctions();
}