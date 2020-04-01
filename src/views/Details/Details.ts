import Vue from "vue";
import axios from "axios";
import { Component,  Watch, Prop } from "vue-property-decorator";
//@ts-ignore
import JsonCSV from "vue-json-csv";

@Component

export default class Details extends Vue {
  showTable = false;
  showLoader = true;
  tempUnitList = ["Fahrenheit", "Celsius"];
  timeZoneList = ["IST", "EST", "UTC"];

  tempUnit = "";
  timeZone = "";

  expanded = [];
  singleExpand = true;
  search = "";
  headers:any = [
    { text: 'Gate/Location', value: 'gate' },
    { text: 'Event Time', value: 'eventTime' , align: ' d-none'},
    { text: 'Total Count', value: 'totalCount' },
    { text: 'Registration Staus', value: 'registrationStatus' },
    { text: '', value: 'data-table-expand' }
  ];
  tableData = [
    {
      gate: 'FeverSense1',
      eventTime: [{time:'10AM', temp:'38.2C'}, {time:'1AM', temp:'38.5C'}, {time:'2AM', temp:'38.7C'}],
      totalCount: 6,
      registrationStatus:2
    },
    {
      gate: 'FeverSense2',
      eventTime: [{time:'10AM', temp:'38.2C'}, {time:'1AM', temp:'38.5C'}],
      totalCount: 6,
      registrationStatus:2
    }
  ];

  async submitDataForm(){
    this.showLoader = true;
    let machineList:any = JSON.stringify(localStorage.getItem('machineList'));
    const date = new Date();
    const apiEndTime = Math.floor(date.getTime());
    let data = {
      "Company name": localStorage.getItem('companyName'),
      "Machine list": ["FeverSensor1"],
      "End time": apiEndTime.toString(),
      "Time format": this.timeZone,
      "Temp unit" : this.tempUnit,
    }
    let responseData = await axios.post('https://crystalball-powerviz.machinesense.com:3443/api/analytics/fever_sensor_log/123-567-8910',data);
    console.log(responseData.data);
    this.headers = responseData.data["column name"];
    console.log(this.headers)
    this.tableData = responseData.data["data"];
    this.showTable = true;
    this.showLoader = false;
  }
}