export class DatabaseHelperService {

    db: any;
    constructor(){
        this.db = (window as any).openDatabase('FinancesApp', '1.0', 'Base de ativos', 2 * 1024 * 1024);

    }
}