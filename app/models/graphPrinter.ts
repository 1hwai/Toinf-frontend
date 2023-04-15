export default interface GraphPrinter {
    onResize(canvas: HTMLCanvasElement): void;
    print(): void;
    printBasis(): void;
    drawFunctions(): void;

}