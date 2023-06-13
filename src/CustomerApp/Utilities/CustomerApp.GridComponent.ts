import { Input,Output,EventEmitter, Component } from "@angular/core";
import { Customer } from "../Customer/CustomerApp.model";

@Component({
    selector: "grid-ui",
    templateUrl: "./CustomerApp.Grid.html"
})

export class GridComponent{
    //Code behind for grid
    gridColumns : Array<GridColumnInfo> = new Array<GridColumnInfo>();
    gridData : Array<Object> = new Array<Object>();

    @Input("grid-columns")
    set setGridColumns(_gridColumns:Array<GridColumnInfo>){
        this.gridColumns=_gridColumns;
    }
    @Input("grid-data")
    set setGridData(_gridData:Array<Object>){
        this.gridData=_gridData;
    }
    
    @Output("grid-selected")
    eventEmitter: EventEmitter<Object> = new EventEmitter<Object>();

    SelectGrid(_selected: Object){
        //emit out the event
        this.eventEmitter.emit(_selected);

    }
}

export class GridColumnInfo  {
    colName: string="";
}