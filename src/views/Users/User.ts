import Vue from "vue";
import axios from "axios";
import { Component,  Watch, Prop } from "vue-property-decorator";
//@ts-ignore
import JsonCSV from "vue-json-csv";

@Component

export default class User extends Vue {
//   input-fields
    name = "";
    phone = "";
    email = "";
    gateId = "";
    zoneId = "";
    
    dialog = false;

    search = "";
    headers:any = [
        { text: "Id", value: 'id' },  
        { text: 'Name', value: 'name' },
        { text: 'Phone', value: 'phone' },
        { text: 'E-mail', value: 'email' },
        { text: 'Gate Id', value: 'gateId' },
        { text: 'Zone Id', value: 'zoneId' },
        { text: 'Actions', value: 'actions', sortable: false }
    ];
    tableData = [
        {
            id: '1',
            name: 'person1',
            phone: '1011111111',
            email: 'a@mail.com',
            gateId: 'Gate 1/East',
            zoneId: 'Zone 1',
        },
        {
            id: '2',
            name: 'person1',
            phone: '1011111111',
            email: 'a@mail.com',
            gateId: 'Gate 1/East',
            zoneId: 'Zone 1',
        }
    ];

    close() {
        this.dialog = false;
    }

    editCount = 0;
    save() {
        if(this.editCount === 1) {
            console.log("Make edit");
        }else{
            console.log("Make save");
        }
        this.dialog = false;
    }

    newItem() {
        this.editCount = 0;
    }
    editItem(item:any){
        this.editCount = 1;
        this.dialog = true;
        console.log(item.id)
    }
    deleteItem(item:any) {
        console.log(item.id);
        this.dialog = false;
    }
}