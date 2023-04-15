import Graph from "./graph/graph";
import GraphManager from "./graph/graphManager";
import GraphPrinter from "./graphPrinter";
import Point2d from "./point2d";
import Dot2d from "@/app/models/dot";
import {Colors} from "@/app/models/colors";
import { ComputeEngine } from "@cortex-js/compute-engine";

export default class ScreenManager implements GraphPrinter {

    private readonly canvas: HTMLCanvasElement;
    private isMouseDown: boolean = false;
    private readonly ctx: CanvasRenderingContext2D;
    private readonly graph: Graph = GraphManager.getMain;

    private idealCenter: Point2d = new Point2d(0, 0);
    private realCenter: Point2d;
    private ratio: number;
    //G2S abs(1) in Graph = abs(initialWidth / 10);
    //<=> abs(10) in Graph = abs(initialWidth);

    constructor(canvas?: HTMLCanvasElement) {
        this.canvas = canvas!;
        this.ctx = canvas!.getContext('2d')!;
        this.canvas.width = window.innerWidth - 400;
        this.canvas.height = window.innerHeight * 0.9;
        this.ctx.strokeStyle = '#84ff89';
        this.ctx.lineWidth = 1;
        this.realCenter = new Point2d(this.canvas.width / 2, this.canvas.height / 2);
        this.ratio = this.canvas.width / 10;

        this.graph.getFM.addFunction((x) => {
            return Math.asin(x);
        });
        this.initListeners();

        this.print();
    }

    public initListeners() {
        this.canvas.addEventListener('pointerdown', ev => {
            this.isMouseDown = true;
        });
        this.canvas.addEventListener('pointerup', ev => {
            this.isMouseDown = false;
        });
        this.canvas.addEventListener('pointerleave', ev => {
            this.isMouseDown = false;
        })
        this.canvas.addEventListener('pointermove', ev => {
            if (this.isMouseDown)
                this.move(ev.movementX / this.ratio, ev.movementY / this.ratio);
        })
        this.canvas.addEventListener('wheel', ev => {
            this.clear();
            if (ev.deltaY < 0) {
                this.ratio -= ev.deltaY/50;
            } else {
                this.ratio /= ev.deltaY/80;
            }
            this.print();
        })

        window.onresize = () => this.onResize(this.canvas);
    }

    public onResize(canvas: HTMLCanvasElement): void {
        canvas.width = window.innerWidth * 0.8;
        canvas.height = window.innerHeight * 0.8;
        this.realCenter = new Point2d(canvas.width / 2, canvas.height / 2);
        this.ctx.strokeStyle = '#84ff89'
        this.print();
    }

    public move(deltaX: number, deltaY: number): void {
        this.idealCenter = new Point2d(
            this.idealCenter.getX + deltaX,
            this.idealCenter.getY - deltaY
        );
        this.clear();
        this.print();
    }

    public print(): void {
        this.printBasis();
        this.drawFunctions();
    }

    public printBasis(): void {
        this.drawXYAxis();
    }

    public drawXYAxis(): void {
        const leftUp: Point2d = this.convertPosS2G(new Point2d(0, 0));
        const rightDown: Point2d = this.convertPosS2G(new Point2d(this.canvas.width, this.canvas.height));
        this.drawStrokeAt(leftUp.getX, 0, rightDown.getX, 0);
        this.drawStrokeAt(0, leftUp.getY, 0, rightDown.getY);
    }

    public drawFunctions(): void {
        const leftUp: Point2d = this.convertPosS2G(new Point2d(0, 0));
        const rightDown: Point2d = this.convertPosS2G(new Point2d(this.canvas.width, this.canvas.height));

        for (let f of this.graph.getFM.getFunctions()) {
            const result: Array<Point2d> = f.calcFor(leftUp.getX, rightDown.getX);
            for (let i = 0; i < result.length; i++) {
                if (i > 0) {
                    const p: Point2d = result[i];
                    const preP: Point2d = result[i - 1];
                    this.drawStrokeAt(p.getX, p.getY, preP.getX, preP.getY);
                    //drawDot
                    if (p.getY * preP.getY < 0) {
                        const meanX: number = (p.getX + preP.getX) / 2;
                        const root: Dot2d = new Dot2d(Colors.BLUE, meanX, 0);
                        this.drawDot(root);
                    }
                }
            }
        }
    }

    public clear(): void {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }

    //Should be an Ideal Point.
    public drawStrokeAt(x1: number, y1: number, x2: number, y2: number): void {
        const _p1: Point2d = this.convertPosG2S(new Point2d(x1, y1));
        const _p2: Point2d = this.convertPosG2S(new Point2d(x2, y2));
        this.ctx.beginPath();
        this.ctx.moveTo(_p1.getX, _p1.getY);
        this.ctx.lineTo(_p2.getX, _p2.getY);
        this.ctx.stroke();
    }

    public drawDot(dot: Dot2d): void {
        this.ctx.fillStyle = dot.getColor;
        const p: Point2d = this.convertPosG2S(new Point2d(dot.getX, dot.getY));
        this.ctx.fillRect(p.getX - 2, p.getY - 2, 4, 4);
        this.ctx.fillStyle = "#ffffff";
        this.ctx.fillText(`${dot.getX.toString().slice(0, 5)}`, p.getX, p.getY + 4);
    }

    public convertPosG2S(point: Point2d): Point2d {
        return new Point2d(
            (this.idealCenter.getX + point.getX) * this.ratio + this.realCenter.getX,
            this.canvas.height - (this.idealCenter.getY + point.getY) * this.ratio - this.realCenter.getY
        );
    }

    public convertPosS2G(point: Point2d): Point2d {
        return new Point2d(
            (-this.realCenter.getX + point.getX) / this.ratio - this.idealCenter.getX,
            (this.canvas.height - point.getY - this.realCenter.getY) / this.ratio - this.idealCenter.getY
        );
    }

    public get getWidth() {
        return this.canvas.width;
    }

    public get getHeight() {
        return this.canvas.height;
    }

}