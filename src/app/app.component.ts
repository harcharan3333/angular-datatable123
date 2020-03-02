import { Component } from '@angular/core';
import moment from 'moment';
import { ButtonRendererComponent } from './renderer/button-renderer.component';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  title = 'app';
  frameworkComponents: any;
  rowDataClicked1 = {};
  rowDataClicked2 = {};

    columnDefs = [
        {headerName: 'Order Number', field: 'orderNumber', sortable: true, filter: true },
        {headerName: 'Transaction Date', field: 'actionDate', sortable: true, filter:'agDateColumnFilter', filterParams:{
        comparator:function (filterLocalDateAtMidnight, cellValue){
          const dateFormat = "YYYY-MM-DDTHH:mm:ss.SSS"
          const midnightDate = moment(filterLocalDateAtMidnight, dateFormat).startOf('day')
          const formatChange = moment(cellValue, dateFormat).startOf('day')
          
            if (formatChange.isBefore(midnightDate)) {
                return -1;
            }

            if (midnightDate.isBefore(formatChange)) {
                return 1;
            }
          
           
                return 0
            
        },
        browserDatePicker: true
    }},,
    
        {headerName: 'Transaction Response', field: 'transactionResponse', sortable: true, filter: true},
        {headerName: 'Action', field: 'success', sortable: true, filter: true}
    ];

    rowData =  [

        {

            "orderNumber": 10,

            "actionDate": "2020-02-18T14:05:56.921Z",

            "transactionResponse": " {\"response\":{\"code\":455,\"message\":\"Unexpected Error Occurred, Administrator has been informed.\",\"fields\":\"false\",\"data\":[]}}",

            "success": 0

        },

        {

            "orderNumber": 12,

            "actionDate": "2020-02-28T14:05:56.970Z",

            "transactionResponse": " {\"response\":{\"code\":455,\"message\":\"Unexpected Error Occurred, Administrator has been informed.\",\"fields\":\"false\",\"data\":[]}}",

            "success": 0

        },

        {

            "orderNumber": 14,

            "actionDate": "2020-02-28T14:05:57.018Z",

            "transactionResponse": " {\"response\":{\"code\":455,\"message\":\"Unexpected Error Occurred, Administrator has been informed.\",\"fields\":\"false\",\"data\":[]}}",

            "success": 0

        },

        {

            "orderNumber": 11,

            "actionDate": "2020-02-28T14:05:57.089Z",

            "transactionResponse": " {\"response\":{\"code\":455,\"message\":\"Unexpected Error Occurred, Administrator has been informed.\",\"fields\":\"false\",\"data\":[]}}",

            "success": 0

        },

        {

            "orderNumber": 16,

            "actionDate": "2020-02-18T14:05:57.142Z",

            "transactionResponse": " {\"response\":{\"code\":455,\"message\":\"Unexpected Error Occurred, Administrator has been informed.\",\"fields\":\"false\",\"data\":[]}}",

            "success": 0

        },

        {

            "orderNumber": 15,

            "actionDate": "2020-02-18T14:05:57.206Z",

            "transactionResponse": " {\"response\":{\"code\":455,\"message\":\"Unexpected Error Occurred, Administrator has been informed.\",\"fields\":\"false\",\"data\":[]}}",

            "success": 0

        },

        {

            "orderNumber": 18,

            "actionDate": "2020-02-18T14:05:57.259Z",

            "transactionResponse": " {\"response\":{\"code\":455,\"message\":\"Unexpected Error Occurred, Administrator has been informed.\",\"fields\":\"false\",\"data\":[]}}",

            "success": 0

        },

        {

            "orderNumber": 13,

            "actionDate": "2020-02-18T14:05:57.332Z",

            "transactionResponse": " {\"response\":{\"code\":455,\"message\":\"Unexpected Error Occurred, Administrator has been informed.\",\"fields\":\"false\",\"data\":[]}}",

            "success": 0

        },

        {

            "orderNumber": 19,

            "actionDate": "2020-02-18T14:05:57.410Z",

            "transactionResponse": " {\"response\":{\"code\":455,\"message\":\"Unexpected Error Occurred, Administrator has been informed.\",\"fields\":\"false\",\"data\":[]}}",

            "success": 0

        },

        {

            "orderNumber": 20,

            "actionDate": "2020-02-18T14:05:57.412Z",

            "transactionResponse": " {\"response\":{\"code\":455,\"message\":\"Unexpected Error Occurred, Administrator has been informed.\",\"fields\":\"false\",\"data\":[]}}",

            "success": 0

        },

        {

            "orderNumber": 21,

            "actionDate": "2020-02-18T14:05:57.510Z",

            "transactionResponse": " {\"response\":{\"code\":455,\"message\":\"Unexpected Error Occurred, Administrator has been informed.\",\"fields\":\"false\",\"data\":[]}}",

            "success": 0

        },

        {

            "orderNumber": 17,

            "actionDate": "2020-02-18T14:05:57.573Z",

            "transactionResponse": " {\"response\":{\"code\":455,\"message\":\"Unexpected Error Occurred, Administrator has been informed.\",\"fields\":\"false\",\"data\":[]}}",

            "success": 0

        },

        {

            "orderNumber": 22,

            "actionDate": "2020-02-18T14:05:57.587Z",

            "transactionResponse": " {\"response\":{\"code\":455,\"message\":\"Unexpected Error Occurred, Administrator has been informed.\",\"fields\":\"false\",\"data\":[]}}",

            "success": 0

        },

        {

            "orderNumber": 23,

            "actionDate": "2020-02-18T14:05:57.700Z",

            "transactionResponse": " {\"response\":{\"code\":455,\"message\":\"Unexpected Error Occurred, Administrator has been informed.\",\"fields\":\"false\",\"data\":[]}}",

            "success": 0

        },

        {

            "orderNumber": 24,

            "actionDate": "2020-02-18T14:05:57.740Z",

            "transactionResponse": " {\"response\":{\"code\":455,\"message\":\"Unexpected Error Occurred, Administrator has been informed.\",\"fields\":\"false\",\"data\":[]}}",

            "success": 0

        },

        {

            "orderNumber": 25,

            "actionDate": "2020-02-18T14:05:57.840Z",

            "transactionResponse": " {\"response\":{\"code\":455,\"message\":\"Unexpected Error Occurred, Administrator has been informed.\",\"fields\":\"false\",\"data\":[]}}",

            "success": 0

        },

        {

            "orderNumber": 26,

            "actionDate": "2020-02-18T14:05:57.949Z",

            "transactionResponse": " {\"response\":{\"code\":455,\"message\":\"Unexpected Error Occurred, Administrator has been informed.\",\"fields\":\"false\",\"data\":[]}}",

            "success": 0

        }

    ]
}
