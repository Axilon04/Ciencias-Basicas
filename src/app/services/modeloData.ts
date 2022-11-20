export interface graphic{
  element: HTMLCanvasElement,
  ejeycoseno: number[],
  ejeyseno: number[] | any,
  ejex: number[],
  time: number,
  longEje:number,
}

export interface graphicEjeyCustom{
  labelVistaPoint: string,
  borderColor: string,
  borderWidth: number,
  tension: number;
  pointRadius: number,
  titleText: string,
}
