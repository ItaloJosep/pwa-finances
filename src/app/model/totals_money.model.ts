export class TotalMoneyModel {

constructor(money: number, color: String, categoria: String, percentage?: number, startChart?: string, sizeChart?: String){
    this.money = money
    this.color = color
    this.categoria = categoria
    this.percentage = percentage
    this.startChart = startChart
    this.sizeChart = sizeChart
}

    categoria: String;
    color: String;
    money: number;
    percentage: number;
    startChart: string;
    sizeChart: String;
}